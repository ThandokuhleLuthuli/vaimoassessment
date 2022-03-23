import React from 'react';
import plus from '../../assets/images/plus.png';
import minus from '../../assets/images/minus.png';
import shield from '../../assets/images/shield.svg';
import visa from '../../assets/images/visa.svg';
import applePay from '../../assets/images/apple-pay.svg';
import mastercard from '../../assets/images/mastercard.svg';

import {useState} from 'react';

function Options(props) {

    const [disabled,setDisabled] = useState(true);

    const [value,setValue] = useState(0);

    var minusButton = document.querySelector('.minus');
    
    //when user directly changes the input value
   var handleInput = (e) => {
        //get value from input and assign it to value 
        setValue(e.target.value);
        //enable the button 
        setDisabled(false);
        //add styling if value greated than 0
        if(value > 0) {
            minusButton.classList.add("minus--enabled");
        } else {
            //disable button if input value is below 0
            setDisabled(true);
            //remove enabled button styles
            minusButton.classList.remove("minus--enabled");
        }
    } 

    //when user presses the plus button
    var handlePlus = (e) => {
        setValue(value + 1);
        if (value >= 1) {
            setDisabled(false);
            minusButton.classList.add("minus--enabled");
        }
    }

    //when the user clicks the minus button 
    var handleMinus = (e) => {
        if (disabled == false) {
            setValue(value  - 1);
            if(value < 1) {
                setDisabled(true);
                minusButton.classList.remove("minus--enabled");
            }
        }
    }
    //passing API values through props
    const prod = props.prod;

    return (
    <div className="options">
        <div className="options_container">
        <p>options:</p>
        <div className="options_column">
            <span>1080P</span>
            <span>4K</span>
            <span>{prod.options.battery_accessories.label}</span>
        </div>
        <div className="options_column">
            <span>R 833.99</span>
            <span>R 895.31</span>
            <span>{prod.options.battery_accessories.price.currency.symbol} {prod.options.battery_accessories.price.value}</span>
        </div>
        <div className="options_column">
            <p><button className="minus" disabled={disabled} onClick={handleMinus}><img src={minus}/></button><input placeholder="0" onChange={handleInput} value={value}/><button onClick={handlePlus}><img src={plus}/></button></p>
            <p><button className="minus" disabled={disabled} onClick={handleMinus}><img src={minus}/></button><input  placeholder="0" onChange={handleInput} value={value}/><button onClick={handlePlus}><img src={plus}/></button></p>
            <p><button className="minus" disabled={disabled} onClick={handleMinus}><img src={minus}/></button><input  placeholder="0" onChange={handleInput} value={value}/><button onClick={handlePlus}><img src={plus}/></button></p>   
        </div>
        </div>
        <div className='options_footer'>
            <p className="options_footer-text"><span><img src={shield} alt=""/><b>Trade Assurance</b></span>  protects your Alibaba.com orders</p>
            <p className="options_footer-text options_footer-text--icons">Payments: <span className="options_footer-payment"><img src={visa} alt=""/> <img src={mastercard} alt=""/> <img src={applePay} alt=""/></span></p>
            <p className="options_footer-text"><span>Alibaba.com Logistics</span> <span>Inspection Solutions</span></p>
        </div>
    </div>
    )
}

export default Options;