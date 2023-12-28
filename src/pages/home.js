import React from 'react';
import './stylehome.css'; 
import logo from '../images/Vita Logo2.png' ;
import product from '../images/product.png' ;
import { FaSearch } from 'react-icons/fa';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import Slider from './slider/Slider';
import StarRating from './rate/StarRating';
import axios from 'axios';
import { useEffect , useState} from 'react';

function Home  ()  {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://mostafaben.bsite.net/api/Products');
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); 
    const rating = product.rate; 
  
  
    const handleRatingChange = async (productId, newRating) => {
      try {
       
        await axios.post('https://mostafaben.bsite.net/api/Products', {
          id: productId,
          newRating: newRating,
        });
  
      } catch (error) {
        console.error('Error updating rating:', error);
      }
    };
  
    return (
      <div className="page-container">
      {/* Header Container */}
      <div className="header-container">
        {/* Header */}
        <header className="myheader">
          <div className="left-section">
            {/* Search */}
            <div  className="search-container">
                <input type="text" style={{background: 'white'}} placeholder="Search" className="search-input" />
                <FaSearch className="search-icon" />
              </div>
          </div>
          <div className="center-section">
            {/* Logo */}
            <img src={logo} alt="Logo" />
          </div>
          <div className="right-section">
              
              <select>
                <option>french</option>
                <option>arabic</option>
                <option>english</option>
              </select>
              <FaShoppingCart className="cart-icon" />
              <FaUser className="user-icon" />
          </div>
  
        </header>
  
        {/* Line with Text */}
        <div className="text-line">
          <p>Maison</p>
          <p>Magasin</p>
          <p>A propos de nous</p>
          <p>Marques internatio</p>
          <p>Blog</p>
          <p>Contactez nous</p>
        </div>
      </div>
  
      {/* Green Container */}
      <div className="green-containerr">
       
        <div className='home-containerr'>
          <Slider />
         
          <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="card-body">
              <div className="card-icons">
                <FaHeart className="favorite-icon" />
                <FaShoppingCart className="cart-iconPro" />
              </div>
              <div className="card-img">
              <img
        src={`data:image/png;base64,${product.poster}`}
        alt="Product poster"
      />
              </div>
              <div className='card-info'>
                <h2>{product.title}</h2>
                <div className='rate'>
  
  
                <StarRating
                      initialRating={product.rate}
                      onRatingChange={(newRating) =>
                        handleRatingChange(product.id, newRating)
                      }
                    />
  
  
  
                </div>
                <div className='price'>{`$${product.price}`}</div>
              </div>
              <button className='proBtn'>Ajouter au panier</button>
            </div>
          </div>
        ))}
      </div>
  
        <div className='popular'>
          <h3>quoi de neuf</h3>
          <p> Découvrez tout ce qui est nouveau</p>
          </div>
          <div className="card-container">
  
  <div className="card">
  <div className="card-body">
  <div className="card-icons">
    <FaHeart className="favorite-icon" />
    <FaShoppingCart className="cart-iconPro" />
  </div>
  <div className="card-img">
    <img src={product} alt="product" />
  </div>
  <div className='card-info'>
  <h2>Title</h2>
  <div className='rate'>
  <StarRating rating={rating} />
  </div>
  <div className='price'>$500</div>
  </div>
  <button className='proBtn'>Ajouter au panier</button>
  </div>
  </div>
  <div className="card">
  <div className="card-body">
  <div className="card-icons">
  <FaHeart className="favorite-icon" />
  <FaShoppingCart className="cart-iconPro" />
  </div>
  <div className="card-img">
    <img src={product} alt="product" />
  </div>
  <div className='card-info'>
  <h2>Title</h2>
  <div className='rate'>
  <StarRating rating={rating} />
  </div>
  <div className='price'>$500</div>
  </div>
  <button className='proBtn'>Ajouter au panier</button>
  </div>
  </div>
  
  <div className="card">
  <div className="card-body">
  <div className="card-icons">
    <FaHeart className="favorite-icon" />
    <FaShoppingCart className="cart-iconPro" />
  </div>
  <div className="card-img">
    <img src={product} alt="product" />
  </div>
  <div className='card-info'>
  <h2>Title</h2>
  <div className='rate'>
  <StarRating rating={rating} />
  </div>
  <div className='price'>$500</div>
  </div>
  <button className='proBtn'>Ajouter au panier</button>
  </div>
  </div>
  <div className="card">
  <div className="card-body">
  <div className="card-icons">
    <FaHeart className="favorite-icon" />
    <FaShoppingCart className="cart-iconPro" />
  </div>
  <div className="card-img">
    <img src={product} alt="product" />
  </div>
  <div className='card-info'>
  <h2>Title</h2>
  <div className='rate'>
  <StarRating rating={rating} />
  </div>
  <div className='price'>$500</div>
  </div>
  <button className='proBtn'>Ajouter au panier</button>
  </div>
  </div>
  
  
          </div>
  
          <div className='marks'>
           <p style={{textAlign: 'start'}}>Marques internationales</p> 
           <div className='flex-marks'>
           <div className='inner-marks'>
           <img src={product} alt="product" />
           <span>Marques internationales</span>
           </div>
           <div className='inner-marks'>
           <img src={product} alt="product" />
           <span>Marques internationales</span>
           </div>
           <div className='inner-marks'>
           <img src={product} alt="product" />
           <span>Marques internationales</span>
           </div>
           
           <div className='inner-marks'>
           <img src={product} alt="product" />
           <span>Marques internationales</span>
           </div>
           </div>
          </div>
  
        </div>
        
        <div className='footerr'>
          <div className=' header-container flex-footer'>
            <div className='footer-info'>
              <p>Liens importants</p>
              <p>Informations d'expédition Pour garantir que vos achats arrivent sans problème, assurez-vous de fournir </p>
            </div>
            <div className='footer-info'>
              <p>private Policy </p>
              <p>cookies Policy </p>
              <p>terms and conditions </p>
            </div>
            <div className='footer-info'>
              <p>Informations sur la livraison</p>
              <p>Contactez-nous pour toute demande de renseignements ou d'assistance dont vous avez besoin, nous sommes là pour vous fournir soutien et conseils</p>
            </div>
            <div className='footer-info'>
              <p>Subscribe to AdobeXD via Email</p>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    );
};

export default Home;