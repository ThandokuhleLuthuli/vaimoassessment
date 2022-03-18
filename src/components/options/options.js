import React from 'react';
import plus from './plus.png';
import minus from './minus.png';
import {useState} from 'react';

function Options(props) {
    const [disabled,setDisabled] = useState(true)
    const [value,setValue] = useState(0);
    var minusButton = document.querySelector('.minus');
    
    //when user directly changes the input value
   var handleInput = (e) => {
        //get value from input and assign it to value 
        setValue(parseInt(e.target.value));
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
            <p>options :</p>
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
    )
}

export default Options;