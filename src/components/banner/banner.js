import React from 'react'; 


function Banner({shipping,delivery}) {
    return(
        <div className="banner">
            <p className="banner_image"></p>
             <ul>
                <li>{shipping}</li>
                <li>{delivery}</li>
                <li></li>
            </ul>
        </div>
    )
}

export default Banner;