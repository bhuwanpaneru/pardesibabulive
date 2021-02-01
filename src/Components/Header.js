import React, { useEffect } from 'react'
import '../Styling/Header.css'
import { Link } from "react-router-dom";
import SeachIcon from '@material-ui/icons/Search';
// import  ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasketIcon';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "../ReacContextAPI/StateProvider";
import Login from './Login';
import { auth } from '../Firebase/Firebase';
import algoliasearch from "algoliasearch";
// import VoiceRecognization from "./VoiceRecognization";

function Header() {
    const [{ basket, user, products }, dispatch] = useStateValue();

    useEffect(() => {
        const client = algoliasearch("EB3FCIC43Q", "5132cdd02836c1964b226c262289b924");
        const index = client.initIndex("test_live");
        index
            .search("*")
            .then(({ hits }) => {
                dispatch({
                    type: 'SET_PRODUCTS',
                    products: hits
                })
            })
            .catch(err => {
                console.log(err);
            });
        return () => {
            // cleanup
        }
    }, [])

    console.log("Sign In", user)
    const login = () => {
        if (user) {
            auth.signOut()
        }
    }
    const callAlgolia = (e) => {
        let item = e.target.value
        const client = algoliasearch("EB3FCIC43Q", "5132cdd02836c1964b226c262289b924");
        const index = client.initIndex("test_live");
        index
            .search(item)
            .then(({ hits }) => {
                dispatch({
                    type: 'SET_PRODUCTS',
                    products: hits
                })
                console.log("prodducts", products)
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <>
        <nav  role="navigation">
            <div className="header">
            <div id="menuToggle" class="humburg">
                <input type="checkbox" hidden />
                <span id="btn"></span>
                <span id="btn"></span>
                <span id="btn"></span>
                <ul id="menu" to={!user && "/login"} onClick={login}>
                <a href="/login"><li>{user ? "Sign Out" : "Sign In"}</li></a>
                <a href="#"><li>Contact Us</li></a>
                </ul>
            
                </div> 
            <Link to="/">
                {/* <img className="header-logo" 
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="" /> */}
                <p className="add-jus">
                <h2 className="header-logo" >Pardesi Babu</h2>
                <h6 className="add-left">-An online vegetables shop</h6>
                </p>
            </Link>
            <div className="header-search">
                <input type="text" className="header-search-box" onChange={callAlgolia} 
                placeholder="Search here"
                />
                {/* <VoiceRecognization /> */}
                {/* <SeachIcon className="header-search-icon" /> */}
            </div>
            <div className="header-nav">
                <Link to={!user && "/login"} className="header-link" onClick={login}>
                    <div className="header-nav-option">
                        <span className="header-nav-option-one" >{user && "Hi" } {user?.email}</span>
                        <span className="header-nav-option-two" id="dst">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                {/* <Link to="/" className="header-link">
                    <div className="header-nav-option">
                        <span className="header-nav-option-one">Returns</span>
                        <span className="header-nav-option-two">& Orders</span>
                    </div>
                </Link> */}
                {/* <Link to="/" className="header-link">
                    <div className="header-nav-option">
                        <span className="header-nav-option-one">Your</span>
                        <span className="header-nav-option-two">Prime</span>
                    </div>
                </Link> */}
                <Link to="/checkout" className="header-link">
                    <div className="header-nav-option-basket">
                        <ShoppingBasketIcon />
                        <span className="header-nav-option-two header-basket-counts">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            </div> 
        </nav>
        {/* <nav role="navigation">
  <div id="menuToggle">
    <input type="checkbox" hidden />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About</li></a>
    </ul>
  </div>
</nav> */}
        </>
    )
}

export default Header
