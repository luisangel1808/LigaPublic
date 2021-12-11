import React,{useState} from 'react';
import {auth} from '../firebase';
import '../styles/components/SignUp.css'
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((res)=>alert('Usuario registrado'));
            
    }
    return (
        <div className="SignUp">
            <h1>Registrarse</h1>
            <form onSubmit={register}>
                <input 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    type="email"
                    placeholder="email"
                />
                <input 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    type="password"
                    placeholder="contraseña"
                />
                <input type="submit" value="Registrar"/>
            </form>

        </div>
    )
}
export default SignUp