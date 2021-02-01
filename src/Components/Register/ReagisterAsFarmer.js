import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function ReagisterAsFarmer() {
    const [email, setEmail] = useState('')
    const history = useHistory();
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const submitForm = (e) => {
        e.preventDefault();
    }
    const backToMenu = (e) => {
        // e.preventDefault();
        history.push('/login')
    }
    console.log("rrrrrrrrrrrrrrrr",);
    return (
        <div className="register-user-container">
            <h1>Register As Farmer</h1>
                <form>
                    <h5>User Name</h5>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                   <div className ="register-pack-button">
                    <button type="submit" onClick={submitForm} >Submit</button>
                    <button onClick = {backToMenu}>Back</button>
                   </div>
            </form>
        </div>
    )
}

export default ReagisterAsFarmer
