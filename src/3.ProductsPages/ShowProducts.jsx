import React from 'react'
import { NavLink } from 'react-router-dom'

// Redux
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../1.Redux/actions/mainActions"

const ShowProducts = ({ product, addToCart, loadCurrentItem }) => {
    return (
        <div className='card show-product-card mt-5 mx-2 shadow' style={{ height: "330px" }}>
            <img className='card-img-top' src={product.img} alt={product.title} style={{ height: "180px" }} />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h5 className="card-title">Price: {product.price}$</h5>
                <NavLink to={`/product/${product.id}`}>
                    <button onClick={() => { loadCurrentItem(product) }} className='btn btn-sm btn-info'>View</button>
                </NavLink>
                <button onClick={() => { addToCart(product.id) }} className='btn btn-sm btn-warning mx-2'>Add to Cart</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};


export default connect(null, mapDispatchToProps)(ShowProducts)