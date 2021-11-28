import React, { useEffect } from 'react'
import AdSense from 'react-adsense';
function Ads() {
    // useEffect(() => {
    //     (window.adsbygoogle = window.adsbygoogle || []).push({})
    // })
    return (
     <div>
          <ins className = "adsbygoogle"
                style = { {display:"inline-block",width:"728px",height:"200px"} }
                data-ad-client = "ca-pub-9081099632904876"
                data-ad-slot = "6873570239"
                data-full-width-responsive="true"></ins>
     </div>
    )
        
}

export default Ads
