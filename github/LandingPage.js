import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: 'cover',
        height: '100vh',
        color: 'white',
        textAlign: 'center',
        padding: '5rem',
      }}
    >
      <h1>Bienvenue chez GreenThumb</h1>
      <p>
        GreenThumb est une entreprise spécialisée dans la vente de plantes d'intérieur uniques et soigneusement sélectionnées.
      </p>
      <Link to="/products">
        <button style={{ padding: '1rem 2rem', fontSize: '1rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}>
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;