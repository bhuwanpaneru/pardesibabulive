import React, { useState } from 'react'
import '../Styling/Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase/Firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [openInterface, setInterface] = useState(false)

    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(e => alert(e.message));
    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(e => alert(e.message));
    }

    const backTomenu = () => {
        history.push('/')
    }
    const OpenInterface = () => {
        setInterface(true)
    }
     const redirectToRegister = (e) => {
         console.log("eeeeeeeeeee", e.target.id);
         if(e.target.id === "user")
         {
             history.push('/regusterAsUser')
         }
         if(e.target.id === 'farmer') {
             history.push('/reagisterAsFarmer')
         }
     }

    return (
        <div className="login">
            <Link to="#">
                <p className="logo-container">
                    <h1 className="header-logo-login-text">Pardesi Babu</h1>
                    <h5 className="header-logo-login" >-An online vegetables shop</h5>
                </p>
            </Link>
            <div className="login-container">
                <h1>Login</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={login} className="login-sign-in-button">Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Pardesi Babu's Conditions of Use and Privacy Notice.
                </p>
               { !openInterface && <div className="login-register">
                    <button onClick={OpenInterface} className="login-register-button">Create your Account</button>
                    <button onClick={backTomenu} className="login-back-button">Back</button>
                </div>}
                {
                    openInterface && <div className="login-register">   
                        <button onClick = {redirectToRegister} className="login-register-button" id ="user">Create As User</button>
                        <button  onClick = {redirectToRegister} className="login-back-button" id= "farmer">Create As Farmer</button>
                    </div>
                }
                 {
                    openInterface && <div className="login-register-full">
                        <button onClick={backTomenu} className="login-back-button">Back to menu</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Login
