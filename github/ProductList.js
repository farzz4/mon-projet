import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import PlantCard from './PlantCard';

const products = [
  { id: 1, name: 'Monstera', price: 25, image: 'monstera.jpg', category: 'Tropical' },
  { id: 2, name: 'Cactus', price: 10, image: 'cactus.jpg', category: 'Désertique' },
  { id: 3, name: 'Fiddle Leaf Fig', price: 30, image: 'fiddle-leaf.jpg', category: 'Tropical' },
  { id: 4, name: 'Snake Plant', price: 15, image: 'snake-plant.jpg', category: 'Désertique' },
  { id: 5, name: 'Peace Lily', price: 20, image: 'peace-lily.jpg', category: 'Tropical' },
  { id: 6, name: 'Aloe Vera', price: 12, image: 'aloe-vera.jpg', category: 'Désertique' },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <h1>Nos Produits</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {products.map((product) => (
          <PlantCard key={product.id} product={product} onAddToCart={handleAddToCart} isAdded={cartItems.some((item) => item.id === product.id)} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;