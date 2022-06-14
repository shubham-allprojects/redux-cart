import React, { useState, useEffect } from 'react'
import ShowCartItems from './ShowCartItems'

import { connect } from "react-redux";

const MainCartPage = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        });
        setTotalItems(items);
        setTotalPrice(price);

    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    return (
        <div className="container py-2">
            <div className="row">
                <div className='col-lg-8'>
                    <div className='row'>
                        {cart.map((item) => (
                            <div className='col-12 col-md-6 col-lg-6'>
                                <ShowCartItems key={item.id} item={item} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-lg-4'>
                    <h4>Total: {totalItems}</h4>
                    <h4>Price: {totalPrice}</h4>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(MainCartPage)