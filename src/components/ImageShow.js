import React from 'react'

import parse from "html-react-parser"
import Fotter from './Fotter'
function ImageShow({image,caption,title}) {
    return (
        <div className="shadow-sm">
            <h2 className="text-center font-bold mt-2 text-sm md:text-base lg:text-lg lg:text-center ">{title}</h2>
            <img className="mx-auto h-32 w-44 md:mt-2 md:h-36 md:w-52 lg:h-56 lg:w-72" src={image} alt="" />
            <div className="grid place-items-center md:flex shadow-md md:shadow-md lg:shadow-lg">
           
          
            
            {/* <img src={image} className="h-32 w-screen " alt="" /> */}
           
            <h1 className="mt-2 mx-auto text-center text-sm md:text-base lg:text-lg lg:text-center">{parse(caption)}</h1>
        
        
           
        </div>
       
        </div>
        
    )
}

export default ImageShow
