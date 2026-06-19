import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaApple, FaGooglePlay } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter-section">
        <div className="container flex-column align-center justify-center">
          <h3>Subscribe on our newsletter</h3>
          <p>Get daily news on upcoming offers from many suppliers all over the world</p>
          <div className="subscribe-form d-flex">
            <input type="email" placeholder="Email" />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
      
      <div className="footer-links-section container d-flex justify-between">
        <div className="brand-info">
          <div className="brand-logo d-flex align-center">
            <div className="logo-icon"></div>
            <span className="brand-name">Brand</span>
          </div>
          <p>Best information about the company gies here but now lorem ipsum is</p>
          <div className="social-icons d-flex">
            <FaFacebook className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaLinkedin className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaYoutube className="social-icon" />
          </div>
        </div>

        <div className="footer-links">
          <h4>About</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Find store</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Partnership</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Find store</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Information</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Money Refund</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>For users</h4>
          <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">My Orders</a></li>
          </ul>
        </div>

        <div className="get-app">
          <h4>Get app</h4>
          <button className="app-btn d-flex align-center"><FaApple className="app-icon" /> App Store</button>
          <button className="app-btn d-flex align-center"><FaGooglePlay className="app-icon" /> Google Play</button>
        </div>
      </div>
      
      <div className="footer-bottom border-top">
        <div className="container d-flex justify-between align-center">
          <p>&copy; 2023 Ecommerce.</p>
          <div className="language">
            <span className="flag-icon">🇺🇸</span> English <span className="arrow-up"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
