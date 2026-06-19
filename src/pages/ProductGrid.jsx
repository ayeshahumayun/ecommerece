import { Link } from 'react-router-dom';
import SidebarFilter from '../components/SidebarFilter';
import { FaHeart, FaTh, FaBars } from 'react-icons/fa';
import { getImageUrl } from '../utils/images';
import './Product.css';

export default function ProductGrid() {
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
                <Link to="/grid" className="btn-toggle active"><FaTh /></Link>
                <Link to="/list" className="btn-toggle"><FaBars /></Link>
              </div>
            </div>
          </div>

          <div className="applied-filters d-flex align-center gap-10 mt-10">
            <span className="filter-tag">Samsung ✕</span>
            <span className="filter-tag">Apple ✕</span>
            <span className="filter-tag">Poco ✕</span>
            <span className="filter-tag">Metallic ✕</span>
            <span className="filter-tag">4 star ✕</span>
            <span className="clear-all text-primary">Clear all filter</span>
          </div>

          <div className="product-grid mt-10">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <div key={item} className="card grid-item flex-column">
                <div className="img-wrapper flex-column align-center justify-center">
                  <img src={getImageUrl(index + 1)} alt="Product" style={{objectFit: 'cover', width: '180px', height: '180px'}} />
                </div>
                <div className="grid-item-details">
                  <div className="d-flex justify-between align-center mb-5">
                    <div className="price-info">
                      <span className="current-price">$99.50</span>
                      <span className="old-price">$1128.00</span>
                    </div>
                    <button className="btn-icon btn-outline" style={{padding: '5px 8px'}}><FaHeart /></button>
                  </div>
                  <div className="rating-info d-flex align-center gap-10 mb-5">
                    <span className="stars">⭐⭐⭐⭐</span>
                    <span className="rating-num">7.5</span>
                  </div>
                  <Link to="/product/1"><p className="desc text-dark">GoPro HERO6 4K Action Camera - Black</p></Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pagination d-flex justify-center align-center mt-10" style={{marginTop: '20px'}}>
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
