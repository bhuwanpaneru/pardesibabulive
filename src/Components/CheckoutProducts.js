import React from 'react'
import { useStateValue } from '../ReacContextAPI/StateProvider';
import '../Styling/CheckoutProduct.css'

function CheckoutProducts({ id, title, image, price, rating }) {
    console.log("id, title, image, price, rating", id, title, image, price, rating);
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = ()=> {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }

    return (
        <div className="checkout-products">
            <img className="checkout-product-image" src={image} alt="" />
            <div className="checkoutProduct-info">
                <p className="checkout-product-title">{title}</p>
                <p className="checkout-product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-product-rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>*</p>
                            ))
                    }
                </div>
                <button onClick={removeFromBasket}>Romove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProducts
