import React from 'react';

function Counter (props) {

    //pass in API values through props 
    const prod = props.prod;

    return (
        <div className="counter">
            <p><span>{prod.discount.amount}</span> Discount ends in</p>
            <p>{prod.discount.end_date}</p>
        </div>
    )
}

export default Counter;