import React from 'react'

function Fotter() {
    return (
        <footer className="flex lg:mt-80 mt-96  bg-black text-white p-5 place-items-center">
            
            <h1 className="mt-1 mx-auto">&copy; Created By Aswin</h1>
           <div className="flex  space-x-3">
           
               <div>
               <a href="https://www.facebook.com/profile.php?id=100012294364304">
        <img className="h-7" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" />
       </a>
               </div>
          <div>
          <a href="https://www.instagram.com/_aswin24_/"><img  className="h-7" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt="" /></a>
          </div>
         <div>
         <a href="https://twitter.com/RajasekaraAswin"><img className="h-7 lg:mr-4" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="" /></a>
         </div>
  
        
            </div>
            
           
        </footer>
        
    )
}

export default Fotter
