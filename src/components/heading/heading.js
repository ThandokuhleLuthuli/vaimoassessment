import axios from 'axios';
import React from 'react';
import tick from '../../assets/images/circular-tick.png';

function Heading(props) {
    const prod = props.prod;

    console.log(prod.reviews)

    
    return (
    <div className="heading">
        <div className="heading_bar">
            <span> Ready to ship</span>
            <span><img src={tick} alt=""/>In stock</span>
            <span><img src={tick} alt=""/>Fast Dispatch</span>
        </div>
        <p className="heading_title">
            {prod.name}
            <span className="heading_text">{prod.tags[0]}</span>
        </p>
        <div className="heading_reviews">
            <span><text>{prod.reviews.rating}</text> <i>{prod.reviews.count} Reviews</i></span>
            <span>{prod.reviews.total_buyers} buyers</span>
        </div>
    </div>
    )
}
export default Heading;