import React,  {useState} from 'react'
import '../../Styling/Register.css'
import { useHistory } from "react-router-dom";


function RegusterAsUser() {
    const [email, setEmail] = useState('')
    const history = useHistory();
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const submitForm = (e) => {
        e.preventDefault();
    }
    const backToMenu = () => {
        history.push('/login')
    }
    return (
        <div className="register-user-container">
            <h1>Register As User</h1>
                <form>
                    <h5>User Name</h5>
                    <input type="text" value={username} onChange={e => setEmail(e.target.value)} />
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                   <div className ="register-pack-button">
                    <button type="submit" onClick = {submitForm}>Submit</button>
                    <button onClick = {backToMenu}>Back</button>
                   </div>
            </form>
        </div>
    )
}

export default RegusterAsUser
