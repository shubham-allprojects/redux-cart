import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { RiShoppingCart2Fill } from 'react-icons/ri'

const Navbar = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });

        setCartCount(count);
    }, [cart, cartCount]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">Redux-Cart</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link mx-2" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cart" className="nav-link mx-2"><RiShoppingCart2Fill size={24} />{cartCount}</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Navbar)