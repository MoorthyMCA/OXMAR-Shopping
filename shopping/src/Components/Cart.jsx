import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeCart } from '../redux/action';

export const Cart = () => {
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);

  const handleRemoveItem = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      <div className="row">

        {cartItems.length > 0 ? (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price}</p>
                    <p className="card-text">Quantity: {item.qty}</p>
                    <button onClick={() => handleRemoveItem(item.id)} className="btn btn-danger text-center">Remove</button>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-12 text-end ">
              <h3 className='display-6'>Total Price: ${totalPrice.toFixed(2)}</h3>
              <h4>Total Items: {totalItems}</h4>
            </div>
          </>
        ) : (
          <div className="col-12 text-center">
            <p>Your cart is currently empty.</p>
            <button className="btn btn-primary" onClick={() => navigate('/')}>
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
