import React, { useState, useEffect } from 'react'
import ShowCartItems from './ShowCartItems'

import { connect } from "react-redux";

const MainCartPage = () => {
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

    return (<>
        <div>
            {cart.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
        <div>
            <h4>Total: {totalItems}</h4>
            <h4>Price: {totalPrice}</h4>
        </div>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(MainCartPage)