import React, { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import Covid from '../Covid'
import Image from './Image'
import db from '../firebase'
import Message from '../Message'
import ChatInput from './ChatInput'
import firebase from "firebase";
import { storage } from "../firebase";
import ImageShow from './ImageShow'
import Fotter from './Fotter'
function AdminPanel() {

    const [message, setMessage] = useState()
    const [roomMessages] = useCollection(
        db.collection("messages").orderBy("timestamp", "asc")
    )
    const [roomImages] = useCollection(db.collection("posts").orderBy("timestamp", "asc"))
    const sendMessage = (e) => {
        db.collection("messages").add({
            messages: message,

        })
        setMessage("")
    }


    return (
        <div>

            {/* {roomMessages?.docs.map(doc => {
                const { message, userImage, timestamp, user } = doc.data()
                return (
                    <Message
                        key={doc.id}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}

                    />
                )
            })}
            {roomImages?.docs.map(doc => {
                const { imageUrl,caption,title } = doc.data()
                return (
                    <ImageShow key={doc.id} image={imageUrl} caption={caption} title={title} />
                )
            })} */}
            <Image />

            {/* <ChatInput 

/> */}
<Fotter />
        </div>
        // <div>
        //     <h2>Iam Admin</h2>
        //     <input type="text" onChange={e=>setMessage(e.target.value)} value={message} />
        //     <button onClick={sendMessage}>send</button>
        // </div>
    )
}

export default AdminPanel



