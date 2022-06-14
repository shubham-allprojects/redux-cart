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
      <div className='card'>
        <img className='card-img-top' src={item.img} alt={item.title} />
        <div className="card-body">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.desc}</p>
          <h4 className="card-title">{item.price}</h4>
          <label htmlFor="qty">Qty</label>
          <input min="1" type="number" id="qty" name="qty" value={input} onChange={onChangeHandler} />
          <button
            onClick={() => removeFromCart(item.id)}
            className="btn btn-danger"
          >Remove</button>
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