import React from 'react'
import Header from '../Header'
import Fotter from './Fotter'

function Author() {
    return (
        <div>
            <Header />
        <div className="flex mt-2 justify-between">
            <div className="">
            <img className="lg:h-56 h-20 ml-7 border-4" src="/sakthi.jpg" alt="" />
            <h1 className=" lg:ml-24 ml-4 font-bold">Sakthi Kumar</h1>
            <p className="text-xs ml-1 lg:text-lg lg:ml-10">Blogger Since May 2018</p>
            <div className="flex lg:ml-24 ml-8">
            <a href="https://twitter.com/iam_sakthikumar"><img className="h-7 lg:mr-4" src="data:image/jpeg;base64,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" alt="" /></a>
        <a href="https://www.instagram.com/sakthikumarselvaraj/"><img  className="h-7" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt="" /></a>
            </div>
            </div>
            
            <div>
            <img className="lg:h-56 h-20 mr-7 border-4" src="/kanna.jpg" alt="" />
            <h1 className="mt-1 lg:ml-16 mr-3 font-bold">Naveen Kumar</h1>
            <p className="text-xs mr-1 lg:text-lg ">Blogger Since Febuary 2018</p>
            <div className="flex lg:ml-20 ml-4">
            <a href="https://twitter.com/naveenkannan12"><img className="h-7 lg:mr-4" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="" /></a>
        <a href="https://www.instagram.com/naveen_kannan/"><img  className="h-7" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt="" /></a>
            </div>
       
        </div>
        </div>
       <Fotter />
        </div>
    )
}

export default Author
