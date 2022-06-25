import React, { useState, useEffect } from "react";
import ShowCartItems from "./ShowCartItems";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
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

  {
    if (cart.length < 1) {
      return (
        <div className="cotainer-fluid my-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="text-center">
                  You cart is empty <MdOutlineRemoveShoppingCart />
                </h1>
                <h3 className="text-muted text-center">
                  Please add some items !
                </h3>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col cart-table">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, Index) => {
                  return <ShowCartItems item={item} Index={Index} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row py-2 justify-content-center">
          <div className="col-12 text-end">
            <div className="badge badge-pill bg-primary py-2 px-5 fs-3">
              Total items: {totalItems}
            </div>
            <br />
            <div className="badge badge-pill bg-warning py-2 px-5 my-2 text-dark fs-3">
              Price: {totalPrice}$
            </div>
            <br />
            <button className="btn btn-outline-info text-dark mt-2">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(MainCartPage);
