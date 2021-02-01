import React from 'react'
import { useStateValue } from '../ReacContextAPI/StateProvider'
import '../Styling/Checkout.css'
import CheckoutProducts from './CheckoutProducts'
import Subtotal from "./Subtotal";
import { sabjibanner } from "../Images/index";

function CheckoutPage() {
    const [{ basket }, dispath] = useStateValue();
    return (
        <div className="checkout-page">
            <div className="checkou">
            <img className="checkout-ad"
             src={sabjibanner}
              alt="" />
            </div>
            {/* <p className="banner-add">Pardesi babu</p> */}
            {basket?.length === 0 ? (
                <div className="empty-msg">
                    <h2> Your Shopping Basket is empty</h2>
                    <p>You have no item in your basket. To buy one or
                    "ADD to Basket" next to the item.
            </p>
                </div>
            ) : (
                    <div>
                        <h2 className="checkout-title">Your Shopping Basket</h2>
                        {
                            basket.map(item => (
                                <CheckoutProducts
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                )}
                {
                    basket.length > 0 && (
                        <div className="checkout-right">  
                            <Subtotal />
                        </div>
                    )
                }
        </div>
    )
}

export default CheckoutPage
