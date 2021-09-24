import React from 'react';
import './LoginForm.css';
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import google from '../assets/google.png'

const LoginForm = () => {
    return(
        <div className ="Container">
            <h3>Login to your account</h3>
            <div className = "logoContainer">
                <img className = "logo" src = {facebook}/>
                <img className = "logo" src = {twitter}/>
                <img className = "logo" src = {google}/>
            </div>
        </div>
    )
}
export default LoginForm