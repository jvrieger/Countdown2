import React from 'react'
import '../styles/Button.css'

const Button = ( { label } ) => {
    
    return (
        <>
            <button className="button" onClick={() => console.log("clicked!")}>
            {label}
            </button>
        </>
    )
}

export default Button;