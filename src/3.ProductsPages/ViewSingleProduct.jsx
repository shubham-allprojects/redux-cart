import React from 'react'
// Redux
import { connect } from "react-redux";
import { addToCart } from "../1.Redux/actions/mainActions"

const ViewSingleProduct = ({ current, addToCart }) => {
    return (
        <div className='container py-4'>
            <div className='row d-flex justify-content-center'>
                <div className='col-lg-5 col-md-10 col-12'>
                    <div className="card">
                        <img src={current.img} alt={current.title} className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">{current.title}</h3>
                            <p className="card-text">{current.desc}</p>
                            <h4 className="card-title">Price: {current.price}</h4>
                            <button onClick={() => { addToCart(current.id) }} className='btn btn-warning'>Add to Cart</button>
                        </div>
                    </div>
                </div>
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