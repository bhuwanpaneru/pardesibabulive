import React from 'react'
import '../Styling/Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../ReacContextAPI/StateProvider';
import { getBasketTotal } from "../ReacContextAPI/reducer";
import { useHistory } from "react-router-dom";


function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const history = useHistory();
    const submitCheckout = () => {

        history.push('/submit')
    }
    return (
        <div className="subtotal">  
        <CurrencyFormat
        renderText={(value) => (
            <>
            <p>
                Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal-gift">
                <input type="checkbox" /> This is contains a gift.
            </small>
            </>
        )}
        decimalScal ={2}
        value={getBasketTotal(basket)}
         displayType={'text'} 
         thousandSeparator={true} 
         prefix={'$'}
        />
            <button onClick ={submitCheckout}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
