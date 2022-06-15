import React, { useState, useEffect } from 'react'
import ShowCartItems from './ShowCartItems'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'

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
        <div className="container-fluid">
            <div className="row d-flex justify-content-around">
                <div className='col-lg-3 col-md-4 col-12 d-flex justify-content-center mt-5'>
                    <div className='card shadow p-4 text-start cart-count' style={{ height: "160px", width: "230px" }}>
                        <p>Items: {totalItems}</p>
                        <p>Price: {totalPrice}$</p>
                        <button className='btn btn-info btn-sm mt-2'>Checkout</button>
                    </div>
                </div>
                <div className='col-lg-8 col-md-8 col-10 cart-items-col'>
                    <div className='row pb-5 d-flex justify-content-center'>
                        {cart.length >= 1 ? cart.map((item) => (
                            <div className='col-12 col-md-6 col-lg-4' key={item.id}>
                                <ShowCartItems item={item} />
                            </div>
                        )) : <div className='col-12 p-5'><h2 className='text-center'>Cart is empty <MdOutlineRemoveShoppingCart size={40} /></h2><h2 className='text-center text-muted'>Add some items in your cart</h2></div>}
                    </div>
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