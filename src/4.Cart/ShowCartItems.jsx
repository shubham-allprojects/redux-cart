import React, { useState } from "react";
import { connect } from "react-redux";
import { adjustItemQty, removeFromCart } from "../1.Redux/actions/mainActions";
import { AiFillDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert"; // Import

const ShowCartItems = ({ item, adjustQty, removeFromCart, Index }) => {
  const [input, setInput] = useState(item.qty);

  const incrementQty = () => {
    item.qty += 1;
    setInput(item.qty);
    adjustQty(item.id, item.qty);
    if (item.qty > 5) {
      toast.warn("max quantity is 5 for this product");
      setInput(5);
      adjustQty(item.id, 5);
    }
  };

  const decrementQty = () => {
    item.qty -= 1;
    setInput(item.qty);
    adjustQty(item.id, item.qty);
    if (item.qty < 1) {
      setInput(1);
      adjustQty(item.id, 1);
      confirmDelete();
    }
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  const confirmDelete = () => {
    confirmAlert({
      title: "Confirm action",
      message: "Are you sure to remove product ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            removeFromCart(item.id);
            toast.info(`product ${item.title} removed from cart`);
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <tr>
      <td>{Index + 1}</td>
      <td>
        <img
          className="cart-img"
          src={item.img}
          alt={item.title}
          style={{ height: "100px", width: "100px" }}
        />
      </td>
      <td>{item.title}</td>
      <td>
        <ul className="pagination" id="qty">
          <li className="page-item">
            <a className="page-link" onClick={decrementQty}>
              <AiOutlineMinus size={10} />
            </a>
          </li>
          <li>
            <input
              onChange={onChangeHandler}
              id="quantity"
              className="form-control"
              type="text"
              value={input}
              style={{ width: "38px" }}
              readOnly
            ></input>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={incrementQty}>
              <AiOutlinePlus size={10} />
            </a>
          </li>
        </ul>
      </td>
      <td>{item.price*item.qty}$</td>
      <td>
        <span onClick={confirmDelete} style={{ cursor: "pointer" }}>
          <AiFillDelete size={35} color="red" />
        </span>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ShowCartItems);
