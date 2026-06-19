import { getImageUrl } from '../utils/images';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page container">
      {/* 1. Banner Section */}
      <section className="banner-section d-flex">
        <div className="banner-menu card">
          <ul>
            <li className="active">Automobiles</li>
            <li>Clothes and wear</li>
            <li>Home interiors</li>
            <li>Computer and tech</li>
            <li>Tools, equipments</li>
            <li>Sports and outdoor</li>
            <li>Animal and pets</li>
            <li>Machinery tools</li>
            <li>More category</li>
          </ul>
        </div>
        <div className="banner-main">
          <div className="banner-content">
            <p>Latest trending</p>
            <h2>Electronic items</h2>
            <button className="btn-primary" style={{ backgroundColor: 'white', color: 'black' }}>Learn more</button>
          </div>
        </div>
        <div className="banner-user">
          <div className="user-login card">
            <div className="d-flex align-center user-info">
              <div className="avatar"></div>
              <span>Hi, user<br/>let's get stated</span>
            </div>
            <button className="btn-primary w-100">Join now</button>
            <button className="btn-outline w-100 mt-10">Log in</button>
          </div>
          <div className="orange-card card text-white mt-10">
            <p>Get US $10 off with a new supplier</p>
          </div>
          <div className="blue-card card text-white mt-10">
            <p>Send quotes with supplier preferences</p>
          </div>
        </div>
      </section>

      {/* 2. Deals and Offers */}
      <section className="deals-section card d-flex">
        <div className="deals-timer">
          <h3>Deals and offers</h3>
          <p>Hygiene equipments</p>
          <div className="timer-blocks d-flex">
            <div className="timer-block"><div>04</div><span>Days</span></div>
            <div className="timer-block"><div>13</div><span>Hour</span></div>
            <div className="timer-block"><div>34</div><span>Min</span></div>
            <div className="timer-block"><div>56</div><span>Sec</span></div>
          </div>
        </div>
        <div className="deals-items d-flex">
          {[1,2,3,4,5].map((item, index) => (
            <div key={item} className="deal-item flex-column align-center">
              <img src={getImageUrl(index)} alt="Product" style={{objectFit: 'cover'}} />
              <p>Smart watches</p>
              <span className="badge-discount">-25%</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Category Sections */}
      <CategorySection title="Home and outdoor" />
      <CategorySection title="Consumer electronics and gadgets" />

      {/* 4. Request Section */}
      <section className="request-section d-flex justify-between align-center border-radius">
        <div className="request-text">
          <h2>An easy way to send requests to all suppliers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className="request-form card">
          <h3>Send quote to suppliers</h3>
          <input type="text" placeholder="What item you need?" className="form-control" />
          <textarea placeholder="Type more details" className="form-control" rows="3"></textarea>
          <div className="d-flex gap-10">
            <input type="text" placeholder="Quantity" className="form-control" style={{ width: '50%' }} />
            <select className="form-control" style={{ width: '50%' }}>
              <option>Pcs</option>
            </select>
          </div>
          <button className="btn-primary mt-10">Send inquiry</button>
        </div>
      </section>

      {/* 5. Recommended Items */}
      <section className="recommended-section">
        <h3>Recommended items</h3>
        <div className="recommended-grid">
          {[1,2,3,4,5,6,7,8].map((item, index) => (
            <div key={item} className="card rec-item">
              <img src={getImageUrl(index + 5)} alt="Rec product" style={{objectFit: 'cover'}} />
              <div className="rec-price">$10.30</div>
              <p className="rec-desc">T-shirts with multiple colors, for men</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function CategorySection({ title }) {
  return (
    <section className="category-block card d-flex">
      <div className="cat-sidebar">
        <h3>{title}</h3>
        <button className="btn-outline mt-10" style={{background: 'white'}}>Source now</button>
      </div>
      <div className="cat-grid">
        {[1,2,3,4,5,6,7,8].map((item, index) => (
          <div key={item} className="cat-item d-flex justify-between">
            <div>
              <p>Soft chairs</p>
              <span>From<br/>USD 19</span>
            </div>
            <img src={getImageUrl(index + 2)} alt="Cat item" style={{objectFit: 'cover', width: '60px', height: '60px', borderRadius: '4px'}} />
          </div>
        ))}
      </div>
    </section>
  );
}
