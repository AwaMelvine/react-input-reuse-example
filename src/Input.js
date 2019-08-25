import React from 'react'

export default ({ label, type, name, value, handleChange }) => {
    return (
        <div>
            <label>{label}</label> <br />
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}