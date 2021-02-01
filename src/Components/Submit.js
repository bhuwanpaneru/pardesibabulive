import React from 'react'
import { useStateValue } from '../ReacContextAPI/StateProvider'
import { useHistory } from "react-router-dom";
import '../Styling/Submit.css'

function Submit() {
    const [{ basket, user, products }, dispatch] = useStateValue();
    const history = useHistory();

    return (
        <div className = "submit-checkout">
            <h1>Congratulation!!</h1>
            <h3>Your resevation is on the way.</h3>
            <h5>Check your email {user?.email} to track your order</h5>
            <button onClick = {() => history.push('/')}>Back To home</button>
        </div>
    )
}

export default Submit
