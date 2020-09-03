import React from 'react';

import './form.css';

const Form = ({value, onChange, addTarefa, className}) => {
    return (
        <div>
            
                <input
                name='tarefa' 
                value={value}
                onChange={onChange}
                placeholder='Digite uma tarefa'
                type='text'
                addtarefa={addTarefa}
                className={className}
                />
            

        </div>
    )
}

export default Form;