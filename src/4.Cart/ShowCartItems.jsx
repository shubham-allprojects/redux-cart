import React, { useState } from 'react'
import { connect } from "react-redux";
import { adjustItemQty, removeFromCart } from "../1.Redux/actions/mainActions";
import { AiFillDelete, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { toast } from 'react-toastify';

const ShowCartItems = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const incrementQty = () => {
    item.qty += 1
    setInput(item.qty)
    adjustQty(item.id, item.qty)
    if (item.qty >= 5) {
      setInput(5)
      adjustQty(item.id, 5)
    }
  }

  const decrementQty = () => {
    item.qty -= 1
    setInput(item.qty)
    adjustQty(item.id, item.qty)
    if (item.qty <= 1) {
      setInput(1)
      adjustQty(item.id, 1)
    }
  }


  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  }

  return (
    <div>
      <div className='card cart-cards mt-5 shadow' style={{ height: "330px" }}>
        <img className='card-img-top' src={item.img} alt={item.title} style={{ height: "170px" }} />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <h5 className="card-title">Price: {item.price}$</h5>
          <div>
            <ul className="pagination" id='qty'>
              <li className="page-item"><a className="page-link" onClick={decrementQty}><AiOutlineMinus size={10} /></a></li>
              <li><input onChange={onChangeHandler} id="quantity" className='form-control' type="text" value={input} style={{ width: "38px" }} readOnly></input></li>
              <li className="page-item"><a className="page-link" onClick={incrementQty}><AiOutlinePlus size={10} /></a></li>
              <span
                onClick={() => {
                  removeFromCart(item.id)
                  toast.info(`product ${item.title} removed from cart`)
                }}
                className="mx-2" style={{ cursor: "pointer" }}
              ><AiFillDelete size={35} color='red' /></span>
            </ul>
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