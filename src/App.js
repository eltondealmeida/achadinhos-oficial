import React, { useState, useEffect } from 'react';
import './App.css';
import Product from './components/Product';
import { productList } from './components/product-list';

function App() {
  const [searchText, setSearchText] = useState('');
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [visibleProductCount, setVisibleProductCount] = useState(6);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = productList.filter(product =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchText, productList]);

  const visibleProducts = showAllProducts ? filteredProducts : filteredProducts.slice(0, visibleProductCount);

  const handleShowMoreProducts = () => {
    setVisibleProductCount(prevCount => prevCount + 6);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="avatar-container">
          <img src="../logos/achadinhos-logo.png" alt="Avatar" className="avatar" />
          <div className="verified-container">
            <div className="avatar-text">Achadinhos Oficial</div>
            <img src="../logos/verificado.png" alt="Verificado" className="verified-icon" />
          </div>
          <span className="subtitle">Os melhores achadinhos do Brasil!</span>
        </div>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Encontre seu achadinho" 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} 
          />
          {searchText && (
            <button className="clear-button" onClick={() => setSearchText('')}>X</button>
          )}
        </div>
      </header>
      <div className="product-list">
        <div className="product-grid">
          {visibleProducts.map(product => (
            <Product
              key={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              productUrl={product.productUrl}
            />
          ))}
        </div>
        {filteredProducts.length === 0 && <p>Nenhum produto encontrado.</p>}
      </div>
      {!showAllProducts && filteredProducts.length > visibleProductCount && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={handleShowMoreProducts}>
            Ver mais
          </button>
        </div>
      )}
      <footer className="footer">
        <div className="footer-title">Achadinhos Oficial</div>
        <span>Nos sigam em nossas redes sociais:</span>
        <div className="footer-social">
          <div>
            <a href="https://www.instagram.com/achadinhos.official.shop" target="_blank" rel="noopener noreferrer">
              <img src="../logos/instagram-logo.png" alt="Instagram" className="social-icon" />
            </a>
          </div>
          <div>
            <a href="https://www.tiktok.com/@achadinhos.shop.oficial" target="_blank" rel="noopener noreferrer">
              <img src="../logos/tiktok-logo.webp" alt="TikTok" className="social-icon" />
            </a>
          </div>
          <div>
            <a href="https://kwai-video.com/u/@achadinhos.official/h0C56mr7" target="_blank" rel="noopener noreferrer">
              <img src="../logos/kawai-logo.webp" alt="Kwai" className="social-icon" />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/@achadinhos.official" target="_blank" rel="noopener noreferrer">
              <img src="../logos/youtube-logo.png" alt="Youtube" className="social-icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
