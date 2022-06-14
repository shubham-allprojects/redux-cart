import React from 'react'
// Redux
import { connect } from "react-redux";
import { addToCart } from "../1.Redux/actions/mainActions"

const ViewSingleProduct = ({ current, addToCart }) => {
    return (
        <div className="card">
            <img src={current.img} alt={current.title} className="card-img-top" />
            <div className="card-body">
                <h3 className="card-title"></h3>
                <p className="card-text">{current.desc}</p>
                <h4 className="card-title">{current.price}</h4>
                <button onClick={() => { addToCart(current.id) }} className='btn bnt-warning'>Add to Cart</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        current: state.shop.currentItem,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewSingleProduct)