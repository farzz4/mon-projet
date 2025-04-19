import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice';
import CartItem from './CartItem';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Panier</h1>
      <p>Total d'articles : {totalItems}</p>
      <p>Total du prix : ${totalPrice.toFixed(2)}</p>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrement={() => dispatch(incrementQuantity(item.id))}
              onDecrement={() => dispatch(decrementQuantity(item.id))}
              onRemove={() => dispatch(removeItem(item.id))}
            />
          ))
        ) : (
          <p>Votre panier est vide.</p>
        )}
      </div>
      <button onClick={() => alert('Coming Soon')}>Payer</button>
      <button onClick={() => window.location.href = '/products'}>Continuer mes achats</button>
    </div>
  );
};

export default CartPage;