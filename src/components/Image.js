import React, { useState } from 'react'
import db, { storage } from '../firebase';
import firebase from "firebase"
import ImageShow from './ImageShow';
import parse from "html-react-parser"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Fotter from './Fotter';
function Image() {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState("");
  const[title,setTitle] = useState("")
  const [text, setText] = useState("")
    const handleChange = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
    const handleUpload = () => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          alert(error.message);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                imageUrl: url,
                title:title,
              });
              setProgress(0);
              setCaption("");
              setImage(null);
            });
        }
      );
    };
    return (
        <div>
          {/* className="imageupload__progress" */}
       <progress  value={progress} max="100" />
       <input type="text" className="focus:outline-none md:ml-2 lg:ml-3 xl:ml-3" placeholder="Enter Your Blog Title" value={title} onChange={e=>setTitle(e.target.value)} />
      
       {/* <input
      className="p-5"
        type="text"
        placeholder="Enter a caption..."
        onChange={event => setCaption(event.target.value)}
        value={caption}
      /> */}
        <div>
        {/* <CKEditor
          editor={ClassicEditor}
          data={caption}
          onChange={(event, editor) => {
            const data = editor.getData()
            setCaption(data)
          }}
        /> */}
        
        <CKEditor
          editor={ClassicEditor}
          data={caption}
          onChange={(event, editor) => {
            const data = editor.getData()
            setCaption(data)
          }}
        />
      </div>
      {/* <p>{parse(caption)}</p> */}
     
      
     
      <input type="file" onChange={handleChange} />
      <button className="lg:p-4 p-2 bg-black text-white" onClick={handleUpload}>Upload</button>   
      {/* <ImageShow />    */}
      {/* <Fotter /> */}
        </div>
    )
}

export default Image
