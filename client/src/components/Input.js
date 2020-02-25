import React from 'react';

const Input = ({ type, name, label, value, errorA, errorB, message, handleChange }) => {
    const style = {
        color: 'red',
        fontFamily: 'italic'
    }
    if(message){
        var inputStyle={
            border: 'solid 3px red'        
        }
    }
    else{
        var inputStyle={
            
        }
    }
    return (
        <div>
            <span style={style}></span>
            <label>{label}</label>
            <input className="form-control" style={inputStyle} type={type} name={name} value={value} onChange={(e) => handleChange(e)} />
            <p style={style}>{message}</p>
        </div>
    );
}

export default Input;