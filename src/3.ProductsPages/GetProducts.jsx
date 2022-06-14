import React from 'react'
import ShowProducts from './ShowProducts';
// Redux
import { connect } from "react-redux";



const GetProducts = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                <ShowProducts key={product.id} product={product} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
    };
};

export default connect(mapStateToProps)(GetProducts)