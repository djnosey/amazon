import React from 'react'
import "./initialProducts.css"

function InitialProducts( {title,image,a} ) {
    return (
        <div className ="initialProducts">
            <h2> {title} </h2>
            <img src= {image} ></img>
            <a> {a} </a>
        </div>
    )
}

export default InitialProducts
