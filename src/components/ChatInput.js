
import React, { useRef, useState } from 'react'
import db, {auth} from "../firebase"
import firebase from "firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
function ChatInput() {
    const [user]=useAuthState(auth)
    const [input,setInput]=useState("")
    const sendMessage=e=>{
        e.preventDefault()
       
        db.collection("messages").add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:user.displayName,
            userImage:user.photoURL,
        })
        // chatRef.current.scrollIntoView({
        //     behavior:"smooth"
        // })
        setInput("")
    }
    return (
     <div>
         <form>
             <input value={input} onChange={e=>setInput(e.target.value)} />
             <button hidden type="submit" onClick={sendMessage}>Send</button>
         </form>
         </div>
    )
}

export default ChatInput;

