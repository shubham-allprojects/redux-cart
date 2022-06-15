import React from 'react'
import ShowProducts from './ShowProducts';

// Redux
import { connect } from "react-redux";



const GetProducts = ({ products }) => {
    return (
        <div className='container pb-4 '>
            <div className='row d-flex justify-content-center'>
                {products.map((product) => (
                    <div className='col-10 col-md-6 col-lg-3' key={product.id}>
                        <ShowProducts product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
    };
};

export default connect(mapStateToProps)(GetProducts)