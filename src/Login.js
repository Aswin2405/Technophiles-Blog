import React from 'react'

import { auth, provider } from './firebase';
function Login() {
    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider)
    }
    
    return (
        <div className="grid place-items-center">
            <img className="h-32 items-center mt-60 mx-auto" src="/logo.jpeg" alt="" />
            <button className="p-5 bg-black rounded-full mt-4 ml-2 text-white text-center cursor-pointer" onClick={signIn}>Login With Google</button>
            {/* <h1 onClick={signIn} className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login With Facebook</h1>  */}
        </div>
    )
}

export default Login
// bg-green-500 items-center mt-4 text-center text-white font-semibold p-3 cursor-pointer w-44 ml-96