import React from "react";

const TextArea = ({ label, name, handler, className }) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <textarea name={name} className={className} onChange={handler} rows="5" placeholder="MAX 50 CHARACTERS"></textarea>
        </div>
    )

}

export default TextArea 
