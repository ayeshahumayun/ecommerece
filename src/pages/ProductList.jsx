import { Link } from 'react-router-dom';
import SidebarFilter from '../components/SidebarFilter';
import { FaHeart, FaTh, FaBars } from 'react-icons/fa';
import { getImageUrl } from '../utils/images';
import './Product.css';

export default function ProductList() {
  return (
    <div className="container product-page">
      <div className="breadcrumb">
        Home &gt; Clothings &gt; Men's wear &gt; Summer clothing
      </div>
      
      <div className="d-flex mt-10 page-layout">
        <SidebarFilter />
        
        <div className="product-content">
          <div className="product-header card d-flex justify-between align-center">
            <div>12,911 items in <strong>Mobile accessory</strong></div>
            <div className="d-flex align-center gap-10">
              <label><input type="checkbox" /> Verified only</label>
              <select className="form-control" style={{marginBottom: 0, width: '150px'}}><option>Featured</option></select>
              <div className="view-toggles d-flex">
                <Link to="/grid" className="btn-toggle"><FaTh /></Link>
                <Link to="/list" className="btn-toggle active"><FaBars /></Link>
              </div>
            </div>
          </div>

          <div className="product-list mt-10">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div key={item} className="card list-item d-flex">
                <div className="img-wrapper">
                  <img src={getImageUrl(index + 3)} alt="Product" style={{objectFit: 'cover', width: '200px', height: '200px'}} />
                </div>
                <div className="list-item-details">
                  <div className="d-flex justify-between align-center">
                    <h4>Canon Camera EOS 2000, Black 10x zoom</h4>
                    <button className="btn-icon btn-outline"><FaHeart /></button>
                  </div>
                  <div className="price-info mt-10">
                    <span className="current-price">$998.00</span>
                    <span className="old-price">$1128.00</span>
                  </div>
                  <div className="rating-info d-flex align-center gap-10 mt-10">
                    <span className="stars">⭐⭐⭐⭐</span>
                    <span className="rating-num">7.5</span>
                    <span className="orders">• 154 orders</span>
                    <span className="shipping text-success">• Free Shipping</span>
                  </div>
                  <p className="desc mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Link to="/product/1" className="view-details mt-10 d-flex">View details</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pagination d-flex justify-center align-center mt-10">
            <select className="form-control" style={{width: 'auto', marginBottom: 0, marginRight: '10px'}}><option>Show 10</option></select>
            <div className="page-numbers d-flex">
              <button className="page-btn">&lt;</button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
