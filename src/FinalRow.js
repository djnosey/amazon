import React from 'react'
import './finalRow.css'
import cd1 from '/Users/stevenpayne/Desktop/amazon-clone/amazon-clone/src/images/finalRow-images/cd1.jpg'
import cd2 from '/Users/stevenpayne/Desktop/amazon-clone/amazon-clone/src/images/finalRow-images/cd2.jpg'
import cd3 from '/Users/stevenpayne/Desktop/amazon-clone/amazon-clone/src/images/finalRow-images/cd3.jpg'
import cd4 from '/Users/stevenpayne/Desktop/amazon-clone/amazon-clone/src/images/finalRow-images/cd4.jpg'
import cd5 from '/Users/stevenpayne/Desktop/amazon-clone/amazon-clone/src/images/finalRow-images/cd5.jpg'

function FinalRow() {
    return (
        <div className ="finalRow">
            <h2>Gift ideas inspired by your shopping history</h2>
            <button>Sign in to see personalised recommendations</button>
            
            <div className = "finalRow__imageContainer">
                <img src = {cd1}></img>
                <img src = {cd2}></img>
                <img src = {cd3}></img>
                <img src = {cd4}></img>
                <img src = {cd5}></img>
            </div>

        </div>
    )
}

export default FinalRow
