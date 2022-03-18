import React from 'react'; 

function Price ({currentPrice,oldPrice}) {
 return (
     <div className="price">
         <div className="price_container">
         <div className="price_box">
             <span className="price_current">{currentPrice} </span>
             <span className="price_old">{oldPrice} </span>
         </div>
         <span className="price_option">&nbsp;/ option &nbsp;<text>2 options</text>(Min Order) </span>
         </div>
     </div>
 )
}

export default Price;