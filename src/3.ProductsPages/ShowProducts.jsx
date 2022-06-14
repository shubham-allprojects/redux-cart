import React from 'react'
import { NavLink } from 'react-router-dom'

// Redux
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../1.Redux/actions/mainActions"

const ShowProducts = ({ product, addToCart, loadCurrentItem }) => {
    return (
        <div className='card'>
            <img className='card-img-top' src={product.img} alt={product.title} />
            <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-text">{product.desc}</p>
                <h4 className="card-title">{product.price}</h4>
                <NavLink to={`/product/${product.id}`}>
                    <button onClick={() => { loadCurrentItem(product) }} className='btn btn-info mx-2'>View</button>
                </NavLink>
                <button onClick={() => { addToCart(product.id) }} className='btn btn-warning'>Add to Cart</button>
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