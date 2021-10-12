import React from 'react'

const Btn=(props)=> {
    const btnCss=`btn ${props.color}  ${props.size} ${props.css}`
    return (

        <button className={btnCss} onClick={props.click} style={props.estSelection?{opacity:1}:{opacity:0.5}}>{props.text}</button>
    )
}

export default Btn
