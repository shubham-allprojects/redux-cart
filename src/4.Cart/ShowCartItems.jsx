import React, { useState } from 'react'
import { connect } from "react-redux";
import { adjustItemQty, removeFromCart } from "../1.Redux/actions/mainActions";
import { AiFillDelete } from 'react-icons/ai'

const ShowCartItems = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  }

  return (
    <div>
      <div className='card mt-md-4 mt-5 shadow' style={{ height: "330px" }}>
        <img className='card-img-top' src={item.img} alt={item.title} style={{ height: "170px" }} />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <h5 className="card-title">Price: {item.price}$</h5>
          <div>
            <label htmlFor="qty" className='h6'>Qty</label>
            <input className='mx-1 mb-2 p-lg-1' min="1" type="number" id="qty" name="qty" value={input} onChange={onChangeHandler} style={{ width: "50px", border: "1px solid blue", borderRadius: "8px" }} />
            <span
              onClick={() => removeFromCart(item.id)}
              className="mx-2" style={{cursor:"pointer"}}
            ><AiFillDelete size={35} color='red' /></span>
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