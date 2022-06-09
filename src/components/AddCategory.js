import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {
    const [ inputValue, setInputValue] = useState('');
    const onInputChange = (e) => setInputValue(e.target.value);
    const onAddCategory = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategorias( cat => [inputValue, ...cat]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ onAddCategory }>
            <input 
                type="text" 
                value={ inputValue } 
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}