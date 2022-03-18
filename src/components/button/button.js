import React from 'react';



function Button({name, modifier ,icon}) {
    return (
        <button className={`button button--${modifier} button--${icon}`}>
           <img src={icon}/> {name}
        </button>
    )
}

export default Button;