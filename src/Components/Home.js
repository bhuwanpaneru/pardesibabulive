import React from 'react'
import '../Styling/Home.css'
import { sabji } from "../Images/index";
import Products from '../Components/Products';
import Footer from "../Components/Footer";
import algoliasearch from "algoliasearch";
import { useStateValue } from "../ReacContextAPI/StateProvider";


function Home() {
    const [{ basket, user, products }, dispatch] = useStateValue();

    return (<div>
        <div className="home">
            <img className="home-image"
                src = {sabji}
                // src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/ARTs2021/JanART21/India-Bazaar-English-1x1x._CB662270432_.jpg"
                alt="" />
            <div className="display-grid">
                {products && products.map(item => {
                    return (
                        <div className="home-product">
                            <Products
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Home
