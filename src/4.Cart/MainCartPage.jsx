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
        <div className="container-fluid py-2">
            <div className="row d-flex justify-content-around">
                <div className='col-lg-4 col-md-4 col-12 d-flex justify-content-center py-4'>
                    <div className='card shadow p-4 text-center cart-count' style={{ height: "120px", width: "230px" }}>
                        <h4 className=''>Total: {totalItems}</h4>
                        <h4>Price: {totalPrice}</h4>
                    </div>
                </div>
                <div className='col-lg-7 col-md-8 col-12'>
                    <div className='row pb-4'>
                        {cart.map((item) => (
                            <div className='col-12 col-md-6 col-lg-6'>
                                <ShowCartItems key={item.id} item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className='row bg-light d-flex justify-content-between'>
               <div className='col-4 bg-success text-center'>wow</div>
               <div className='col-6 bg-danger text-end'>wow2</div>
            </div> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(MainCartPage)