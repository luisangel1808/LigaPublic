import React,{useEffect} from 'react';
import {startUi} from '../firebase';
import '../styles/components/Login.css'
const Login = () => {

    useEffect(() => {
        startUi('#firebaseui');
        
    }, [])
            
    
    return (
        <div className="Login" id="firebaseui">

        </div>
    )
}
export default Login
