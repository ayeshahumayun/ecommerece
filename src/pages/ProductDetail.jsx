import { FaCheck, FaHeart } from 'react-icons/fa';
import { getImageUrl } from '../utils/images';
import './ProductDetail.css';

export default function ProductDetail() {
  return (
    <div className="container product-detail-page">
      <div className="breadcrumb mt-10 mb-10">
        Home &gt; Clothings &gt; Men's wear &gt; Summer clothing
      </div>
      
      <div className="card detail-main-section d-flex p-20">
        <div className="product-images">
          <div className="main-image border-radius flex-column align-center justify-center border">
            <img src={getImageUrl(0)} alt="Main Product" style={{objectFit: 'cover', width: '350px', height: '350px'}} />
          </div>
          <div className="thumbnail-list d-flex gap-10 mt-10">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={item} className="thumbnail border border-radius">
                <img src={getImageUrl(index)} alt="Thumb" style={{objectFit: 'cover', width: '50px', height: '50px'}} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="product-info ml-20 flex-1">
          <div className="text-success d-flex align-center gap-5 mb-5"><FaCheck /> In stock</div>
          <h2 className="product-title mb-10">Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h2>
          <div className="rating-row d-flex align-center gap-10 mb-10">
            <span className="stars">⭐⭐⭐⭐</span>
            <span className="rating-num">9.3</span>
            <span className="text-gray">• 32 reviews</span>
            <span className="text-gray">• 154 sold</span>
          </div>
          
          <div className="price-block d-flex mb-15">
            <div className="price-item active">
              <div className="price text-danger">$98.00</div>
              <div className="qty text-gray">50-100 pcs</div>
            </div>
            <div className="price-item">
              <div className="price text-dark">$90.00</div>
              <div className="qty text-gray">100-700 pcs</div>
            </div>
            <div className="price-item">
              <div className="price text-dark">$78.00</div>
              <div className="qty text-gray">700+ pcs</div>
            </div>
          </div>
          
          <table className="specs-table mb-20">
            <tbody>
              <tr><td className="text-gray">Price:</td><td>Negotiable</td></tr>
              <tr><td className="text-gray border-top-light pt-10">Type:</td><td className="border-top-light pt-10">Classic shoes</td></tr>
              <tr><td className="text-gray">Material:</td><td>Plastic material</td></tr>
              <tr><td className="text-gray">Design:</td><td>Modern nice</td></tr>
              <tr><td className="text-gray border-top-light pt-10">Customization:</td><td className="border-top-light pt-10">Customized logo and design custom packages</td></tr>
              <tr><td className="text-gray">Protection:</td><td>Refund Policy</td></tr>
              <tr><td className="text-gray">Warranty:</td><td>2 years full warranty</td></tr>
            </tbody>
          </table>
        </div>
        
        <div className="supplier-info card ml-20 p-20 flex-column align-center">
          <div className="supplier-header d-flex align-center gap-10 w-100 mb-15">
            <div className="supplier-avatar d-flex align-center justify-center">R</div>
            <div>
              <div>Supplier</div>
              <div className="text-dark font-500">Guanjoi Trading LLC</div>
            </div>
          </div>
          <div className="supplier-details w-100 mb-20">
            <div className="d-flex align-center gap-10 mb-5 text-gray"><span className="flag-icon">🇩🇪</span> Germany, Berlin</div>
            <div className="d-flex align-center gap-10 mb-5 text-gray"><span className="icon">🛡️</span> Verified Seller</div>
            <div className="d-flex align-center gap-10 text-gray"><span className="icon">🌐</span> Worldwide shipping</div>
          </div>
          <button className="btn-primary w-100 mb-10">Send inquiry</button>
          <button className="btn-outline w-100 mb-15">Seller's profile</button>
          <button className="btn-icon text-primary font-500 d-flex align-center gap-5"><FaHeart /> Save for later</button>
        </div>
      </div>
      
      <div className="detail-bottom-section d-flex mt-20 gap-20">
        <div className="detail-tabs-section flex-1 card">
          <div className="tabs-header d-flex border-bottom">
            <div className="tab active">Description</div>
            <div className="tab">Reviews</div>
            <div className="tab">Shipping</div>
            <div className="tab">About seller</div>
          </div>
          <div className="tab-content p-20">
            <p className="mb-15 text-gray line-height-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <table className="features-table mb-20 w-100">
              <tbody>
                <tr><td className="bg-light p-10">Model</td><td className="p-10 border-right">#8786867</td></tr>
                <tr><td className="bg-light p-10">Style</td><td className="p-10 border-right">Classic style</td></tr>
                <tr><td className="bg-light p-10">Certificate</td><td className="p-10 border-right">ISO-898921212</td></tr>
                <tr><td className="bg-light p-10">Size</td><td className="p-10 border-right">34mm x 450mm x 19mm</td></tr>
                <tr><td className="bg-light p-10">Memory</td><td className="p-10 border-right">36GB RAM</td></tr>
              </tbody>
            </table>
            <ul className="check-list text-gray">
              <li><FaCheck className="text-gray mr-10" /> Some great feature name here</li>
              <li><FaCheck className="text-gray mr-10" /> Lorem ipsum dolor sit amet, consectetur</li>
              <li><FaCheck className="text-gray mr-10" /> Duis aute irure dolor in reprehenderit</li>
              <li><FaCheck className="text-gray mr-10" /> Some great feature name here</li>
            </ul>
          </div>
        </div>
        
        <div className="you-may-like card p-20">
          <h3 className="mb-15">You may like</h3>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={item} className="yml-item d-flex gap-10 mb-15">
              <div className="yml-img border border-radius"><img src={getImageUrl(index + 3)} alt="YML" style={{objectFit: 'cover', width: '60px', height: '60px'}} /></div>
              <div>
                <div className="text-dark">Men Blazers Sets Elegant Formal</div>
                <div className="text-gray mt-5">$7.00 - $99.50</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="related-products card p-20 mt-20">
        <h3 className="mb-15">Related products</h3>
        <div className="d-flex gap-20 overflow-auto">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={item} className="related-item flex-column">
              <div className="related-img bg-light flex-column align-center justify-center border-radius mb-10 p-10">
                <img src={getImageUrl(index + 5)} alt="Related" style={{objectFit: 'cover', width: '120px', height: '120px'}} />
              </div>
              <div className="text-dark">Xiaomi Redmi 8 Original</div>
              <div className="text-gray mt-5">$32.00-$40.00</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="discount-banner mt-20 p-30 border-radius text-white d-flex justify-between align-center">
        <div>
          <h2 className="mb-5">Super discount on more than 100 USD</h2>
          <p>Have you ever finally just write dummy info</p>
        </div>
        <button className="btn-warning border-radius text-white" style={{padding: '10px 20px', background: '#FF9017', border: 'none'}}>Shop now</button>
      </div>
    </div>
  );
}
