import React from 'react';

import './button.css';


const Button = ({onClick}) => {
    return (
        <div>
            <button onClick={onClick}  >Adicionar</button>
        </div>

    )
}

export default Button;