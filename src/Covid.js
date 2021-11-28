import React, { useEffect, useState } from 'react'
import db, { auth } from './firebase'
import {useCollection} from "react-firebase-hooks/firestore"
import Message from './Message'
import AdminPanel from './components/AdminPanel'
import Image from './components/Image'
import ImageShow from './components/ImageShow'
import Header from './Header'
import Fotter from './components/Fotter'
function Covid({message}) {
    const [roomImages]=useCollection(db.collection("posts").orderBy("timestamp","asc"))
    const[roomMessages]=useCollection(db.collection("messages").orderBy("timestamp","asc"))
    const [data,setData]=useState([])
  

    return (
        <div>
            <Header />
         
             {roomMessages?.docs.map(doc=>{
 const{message,userImage,timestamp,user}=doc.data()
 return(
     <p
     key={doc.id}
     message={message}
     timestamp={timestamp}
     user={user}
     userImage={userImage}
     
     >{message}</p>
 )
})}
{roomImages?.docs.map(doc=>{
 const{imageUrl,caption,title}=doc.data()
 return(
    <ImageShow altkey={doc.id} image={imageUrl} caption={caption} title={title} />
 )
})}
 <Fotter />
        </div>
    )
}

export default Covid
