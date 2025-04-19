import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const totalItems = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f8f9fa' }}>
      <h1>GreenThumb</h1>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/products">Produits</Link> | <Link to="/cart">Panier</Link>
      </nav>
      <div>
        <span role="img" aria-label="cart">
          🛒
        </span>{' '}
        {totalItems}
      </div>
    </header>
  );
};

export default Header;