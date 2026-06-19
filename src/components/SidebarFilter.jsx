export default function SidebarFilter() {
  return (
    <aside className="sidebar-filter">
      <div className="filter-group border-bottom">
        <h4>Category <span className="arrow-up"></span></h4>
        <ul>
          <li>Mobile accessory</li>
          <li>Electronics</li>
          <li>Smartphones</li>
          <li>Modern tech</li>
          <li className="see-all">See all</li>
        </ul>
      </div>

      <div className="filter-group border-bottom">
        <h4>Brands <span className="arrow-up"></span></h4>
        <div className="checkbox-item"><input type="checkbox" /> <label>Samsung</label></div>
        <div className="checkbox-item"><input type="checkbox" /> <label>Apple</label></div>
        <div className="checkbox-item"><input type="checkbox" /> <label>Huawei</label></div>
        <div className="checkbox-item"><input type="checkbox" /> <label>Pocco</label></div>
        <div className="checkbox-item"><input type="checkbox" /> <label>Lenovo</label></div>
        <div className="see-all">See all</div>
      </div>

      <div className="filter-group border-bottom">
        <h4>Features <span className="arrow-up"></span></h4>
        <div className="checkbox-item"><input type="checkbox" /> <label>Metallic</label></div>
        <div className="checkbox-item"><input type="checkbox" /> <label>Plastic cover</label></div>
        <div className="checkbox-item"><input type="checkbox" /> <label>8GB Ram</label></div>
        <div className="checkbox-item"><input type="checkbox" /> <label>Super power</label></div>
        <div className="checkbox-item"><input type="checkbox" /> <label>Large Memory</label></div>
        <div className="see-all">See all</div>
      </div>

      <div className="filter-group border-bottom">
        <h4>Price range <span className="arrow-up"></span></h4>
        <div className="price-slider">
          <div className="slider-track"></div>
        </div>
        <div className="d-flex gap-10 mt-10 price-inputs">
          <div className="flex-column w-100">
            <label>Min</label>
            <input type="text" placeholder="0" className="form-control" />
          </div>
          <div className="flex-column w-100">
            <label>Max</label>
            <input type="text" placeholder="999999" className="form-control" />
          </div>
        </div>
        <button className="btn-outline w-100 mt-10">Apply</button>
      </div>

      <div className="filter-group border-bottom">
        <h4>Condition <span className="arrow-up"></span></h4>
        <div className="radio-item"><input type="radio" name="condition" defaultChecked /> <label>Any</label></div>
        <div className="radio-item"><input type="radio" name="condition" /> <label>Refurbished</label></div>
        <div className="radio-item"><input type="radio" name="condition" /> <label>Brand new</label></div>
        <div className="radio-item"><input type="radio" name="condition" /> <label>Old items</label></div>
      </div>

      <div className="filter-group">
        <h4>Ratings <span className="arrow-up"></span></h4>
        <div className="checkbox-item"><input type="checkbox" /> <label>⭐⭐⭐⭐⭐</label></div>
        <div className="checkbox-item"><input type="checkbox" /> <label>⭐⭐⭐⭐</label></div>
        <div className="checkbox-item"><input type="checkbox" /> <label>⭐⭐⭐</label></div>
        <div className="checkbox-item"><input type="checkbox" /> <label>⭐⭐</label></div>
      </div>
    </aside>
  );
}
