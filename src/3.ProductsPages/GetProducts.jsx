import React from 'react'
import ShowProducts from './ShowProducts';
// Redux
import { connect } from "react-redux";



const GetProducts = ({ products }) => {
    return (
        <div className='container pb-4 '>
            <div className='row d-flex justify-content-center'>
                {products.map((product) => (
                    <div className='col-12 col-md-6 col-lg-4'>
                        <ShowProducts key={product.id} product={product} />
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