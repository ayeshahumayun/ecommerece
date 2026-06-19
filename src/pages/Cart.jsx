import { FaArrowLeft, FaShieldAlt, FaHeadset, FaTruck } from 'react-icons/fa';
import { getImageUrl } from '../utils/images';
import './Cart.css';

export default function Cart() {
  return (
    <div className="container cart-page">
      <h2 className="mb-20 mt-20">My cart (3)</h2>
      
      <div className="cart-layout d-flex gap-20">
        <div className="cart-main flex-1">
          <div className="card cart-items-list p-20 mb-20">
            {[1, 2, 3].map((item, index) => (
              <div key={item} className="cart-item d-flex border-bottom pb-20 mb-20">
                <div className="cart-img border border-radius p-10 mr-20">
                  <img src={getImageUrl(index + 2)} alt="Cart item" style={{objectFit: 'cover', width: '80px', height: '80px'}} />
                </div>
                <div className="cart-item-details flex-1">
                  <div className="d-flex justify-between">
                    <div className="text-dark font-500 font-16">T-shirts with multiple colors, for men and lady</div>
                    <div className="font-18 font-500">${(78.99).toFixed(2)}</div>
                  </div>
                  <div className="text-gray mt-5 mb-5">Size: medium, Color: blue, Material: Plastic</div>
                  <div className="text-gray mb-15">Seller: Artel Market</div>
                  
                  <div className="d-flex justify-between align-center">
                    <div className="cart-actions d-flex gap-10">
                      <button className="btn-outline btn-sm text-danger border-radius">Remove</button>
                      <button className="btn-outline btn-sm border-radius text-primary">Save for later</button>
                    </div>
                    <div className="qty-select border border-radius d-flex align-center bg-white">
                      <span className="p-10">Qty: 9</span>
                      <span className="arrow-down ml-10 mr-10"></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="cart-bottom-actions d-flex justify-between align-center mt-20">
              <button className="btn-primary d-flex align-center gap-10"><FaArrowLeft /> Back to shop</button>
              <button className="btn-outline">Remove all</button>
            </div>
          </div>
          
          <div className="guarantees d-flex gap-20 mb-20">
            <div className="guarantee-item d-flex align-center gap-10 flex-1">
              <div className="icon-circle bg-light d-flex align-center justify-center text-gray"><FaShieldAlt /></div>
              <div>
                <div className="text-dark font-500">Secure payment</div>
                <div className="text-gray">Have you ever finally just</div>
              </div>
            </div>
            <div className="guarantee-item d-flex align-center gap-10 flex-1">
              <div className="icon-circle bg-light d-flex align-center justify-center text-gray"><FaHeadset /></div>
              <div>
                <div className="text-dark font-500">Customer support</div>
                <div className="text-gray">Have you ever finally just</div>
              </div>
            </div>
            <div className="guarantee-item d-flex align-center gap-10 flex-1">
              <div className="icon-circle bg-light d-flex align-center justify-center text-gray"><FaTruck /></div>
              <div>
                <div className="text-dark font-500">Free delivery</div>
                <div className="text-gray">Have you ever finally just</div>
              </div>
            </div>
          </div>
          
          <div className="saved-for-later card p-20 mb-20">
            <h3 className="mb-20">Saved for later</h3>
            <div className="saved-grid d-flex gap-20">
              {[1, 2, 3, 4].map((item, index) => (
                <div key={item} className="saved-item flex-column">
                  <div className="saved-img bg-light flex-column align-center justify-center border-radius mb-10 p-10">
                    <img src={getImageUrl(index + 6)} alt="Saved" style={{objectFit: 'cover', width: '150px', height: '150px'}} />
                  </div>
                  <div className="font-18 font-500 mb-5">$99.50</div>
                  <div className="text-dark mb-10">GoPro HERO6 4K Action Camera - Black</div>
                  <button className="btn-outline d-flex align-center justify-center gap-10 w-100 text-primary">🛒 Move to cart</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="cart-sidebar">
          <div className="card p-20 mb-20">
            <div className="text-dark mb-10">Have a coupon?</div>
            <div className="d-flex">
              <input type="text" placeholder="Add coupon" className="form-control" style={{marginBottom: 0, borderRadius: '6px 0 0 6px', borderRight: 'none'}} />
              <button className="btn-outline text-primary" style={{borderRadius: '0 6px 6px 0', border: '1px solid var(--border-color)', borderLeft: 'none'}}>Apply</button>
            </div>
          </div>
          
          <div className="card p-20">
            <div className="d-flex justify-between mb-10 text-dark">
              <span>Subtotal:</span>
              <span>$1403.97</span>
            </div>
            <div className="d-flex justify-between mb-10 text-danger">
              <span>Discount:</span>
              <span>- $60.00</span>
            </div>
            <div className="d-flex justify-between mb-20 text-success">
              <span>Tax:</span>
              <span>+ $14.00</span>
            </div>
            
            <div className="border-top pt-20 d-flex justify-between mb-20">
              <span className="font-18 font-500 text-dark">Total:</span>
              <span className="font-20 font-500 text-dark">$1357.97</span>
            </div>
            
            <button className="btn-success w-100 mb-20" style={{background: '#00B517', color: 'white', padding: '15px', borderRadius: '6px', border: 'none', fontSize: '16px'}}>Checkout</button>
            
            <div className="payment-methods d-flex justify-center gap-10">
              <img src="https://placehold.co/40x25?text=AMEX" alt="Amex" />
              <img src="https://placehold.co/40x25?text=Visa" alt="Visa" />
              <img src="https://placehold.co/40x25?text=Pay" alt="Pay" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="discount-banner mt-20 mb-40 p-30 border-radius text-white d-flex justify-between align-center">
        <div>
          <h2 className="mb-5">Super discount on more than 100 USD</h2>
          <p>Have you ever finally just write dummy info</p>
        </div>
        <button className="btn-warning border-radius text-white" style={{padding: '10px 20px', background: '#FF9017', border: 'none'}}>Shop now</button>
      </div>
    </div>
  );
}
