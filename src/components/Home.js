import React from 'react'
import Header from '../Header'
import {Link} from 'react-router-dom'
import Fotter from './Fotter'
import Ads from './Ads'
function Home() {
    return (
        <div className="" >
            <Header />
            {/* <Ads /> */}
            <div className="flex place-items-center xl:ml-40">
            <img className="lg:h-64 h-20 mt-3" src="/logo.jpeg" alt="" />
            
            <div className="mt-3 place-items-center">
            <h1 className="font-bold lg:text-3xl text-2xl sm:mt-2 ">Learn Better Together</h1>
           <h2 className="text-lg mt-1">Blog Smarter</h2>
            <h2 className="text-lg">Better,Faster.</h2>
            <div className="flex lg:hidden mt-2 space-x-2">
           <a href="https://www.facebook.com/technophilesblog/">
        <img className="h-7" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" />
       </a>
            <a href="https://twitter.com/technophiles_b?s=08"><img className="h-7 lg:mr-4" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="" /></a>
        <a href="https://www.instagram.com/technophiles_blog/"><img  className="h-7" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt="" /></a>
            <a href="https://t.me/technophilesblog"><img className="h-7" src="data:image/png;base64,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" alt="" /></a>
            <a href="https://blogtechnophiles.blogspot.com/?m=1"><img className="h-7" src="https://www.freeiconspng.com/thumbs/blogger-logo-icon-png/blogger-logo-icon-png-10.png" alt="" /></a>
            </div> 
           </div>
           <div className="lg:flex-col lg:space-y-2 hidden lg:inline-flex lg:ml-24">
           <a href="https://www.facebook.com/technophilesblog/">
        <img className="h-7" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" />
       </a>
            <a href="https://twitter.com/technophiles_b?s=08"><img className="h-7 lg:mr-4" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="" /></a>
        <a href="https://www.instagram.com/technophiles_blog/"><img  className="h-7" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt="" /></a>
            <a href="https://t.me/technophilesblog"><img className="h-7" src="data:image/png;base64,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" alt="" /></a>
            <a href="https://blogtechnophiles.blogspot.com/?m=1"><img className="h-7" src="https://www.freeiconspng.com/thumbs/blogger-logo-icon-png/blogger-logo-icon-png-10.png" alt="" /></a>
            </div>   
            </div>
        
         
           <Fotter />
        </div>
    )
}

export default Home