import React from "react";

const Input = ({ label, name, type = "text", handler, className, placeholder }) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <input type={type} name={name} className={className} onChange={handler} placeholder={placeholder}></input>
        </div>
    )

}

export default Input