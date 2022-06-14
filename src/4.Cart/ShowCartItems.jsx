import React, { useState } from 'react'
import { connect } from "react-redux";
import { adjustItemQty, removeFromCart } from "../1.Redux/actions/mainActions";

const ShowCartItems = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  }

  return (
    <div>
      <div className='card mt-2'>
        <img className='card-img-top' src={item.img} alt={item.title} style={{ height: "180px" }} />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <h4 className="card-title">Price: {item.price}</h4>
          <div>
            <label htmlFor="qty" className='h5'>Qty</label>
            <input className='mx-1 mb-2 p-2' min="1" type="number" id="qty" name="qty" value={input} onChange={onChangeHandler} style={{ width: "50px", border: "1px solid blue", borderRadius: "8px" }} />
            <button
              onClick={() => removeFromCart(item.id)}
              className="btn btn-danger mx-2 rounded rounded-pill"
            >Remove Item</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ShowCartItems)