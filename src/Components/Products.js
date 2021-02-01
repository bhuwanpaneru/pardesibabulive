import React from 'react'
import '../Styling/Products.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../ReacContextAPI/StateProvider';

function Products({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    return (
        <div className="products">
            <div className="produst-info">
                <p className="title">{title}</p>
                <p className="products-proce">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="products-rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p><StarIcon /></p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Products
