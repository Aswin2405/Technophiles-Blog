import { Avatar } from '@material-ui/core'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import { auth } from './firebase'

function Header() {
    const logout=()=>{
        auth.signOut()
    }
    // const[user]=useAuthState(auth)
    return (
        <div className="shadow-md flex justify-evenly lg:p-4">
            <Link to="/">
            <img className="h-12 lg:h-16" src="/logo.jpeg" alt="" />
            </Link>
            <Link className="items-center my-auto" to="/">Home</Link>
            <Link className="items-center my-auto" to='/blogs'>Blogs</Link>
            <Link className="items-center my-auto" to="/authors">Authors</Link>
            <Link className="items-center hidden md:inline-flex my-auto" to="/admin">Admin</Link>
         <Avatar className="cursor-pointer items-center my-auto" onClick={logout} />
        </div>
    )
}

export default Header
