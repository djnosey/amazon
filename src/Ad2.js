import React from 'react'
import "./ad2.css"
import {Link} from 'react-router-dom'

function Ad2() {
    return (
        <div className ="ad2">
            <h2>Sign in for the best experience</h2>

            <Link to="/login">
            <button>Sign in securely</button>
            </Link>
            
        </div>
    )
}

export default Ad2
