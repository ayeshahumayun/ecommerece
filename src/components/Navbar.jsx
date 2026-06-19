import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaCommentDots, FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="header">
      <div className="header-top border-bottom">
        <div className="container justify-between align-center d-flex header-main">
          <Link to="/" className="brand-logo d-flex align-center">
            <div className="logo-icon"></div>
            <span className="brand-name">Brand</span>
          </Link>
          
          <div className="search-bar d-flex">
            <input type="text" placeholder="Search" className="search-input" />
            <select className="search-select">
              <option>All category</option>
            </select>
            <button className="btn-primary search-btn">Search</button>
          </div>

          <div className="header-actions d-flex align-center">
            <Link to="/login" className="action-item flex-column align-center justify-center">
              <FaUser className="action-icon" />
              <span>Login</span>
            </Link>
            <div className="action-item flex-column align-center justify-center">
              <FaCommentDots className="action-icon" />
              <span>Message</span>
            </div>
            <div className="action-item flex-column align-center justify-center">
              <FaHeart className="action-icon" />
              <span>Orders</span>
            </div>
            <Link to="/cart" className="action-item flex-column align-center justify-center">
              <FaShoppingCart className="action-icon" />
              <span>My cart</span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="header-bottom border-bottom">
        <div className="container justify-between align-center d-flex header-nav">
          <nav className="nav-links d-flex align-center">
            <Link to="/" className="d-flex align-center nav-category"><FaBars className="menu-icon"/> Home</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/video-call">Video Call</Link>
            <Link to="/document-chamber">Documents</Link>
            <Link to="/payments">Payments</Link>
            <a href="#">Help <span className="arrow-down"></span></a>
          </nav>
          
          <div className="nav-settings d-flex align-center">
            <div className="setting-item">English, USD</div>
            <div className="setting-item">Ship to <span className="flag-icon">🇩🇪</span></div>
          </div>
        </div>
      </div>
    </header>
  );
}
