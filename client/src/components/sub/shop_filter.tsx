const ShopFilter = () => {
    return (
      <div className="col-lg-3">
        <div className="wrapper-overlay"></div>
        <div className="box-filters-sidebar">
          <h5 className="title-filter">Filter</h5>
          <div className="block-filter">
            <h6 className="item-collapse">Categories</h6>
            <div className="box-collapse scrollFilter">
              <ul className="list-filter-checkbox">
                <li>
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">
                      Womens
                      <span className="neutral-medium">(12)</span>
                    </span>
                    <span className="checkmark"></span>
                  </label>
                  <span className="arrow-down"></span>
                </li>
                <li>
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">
                      Mens <span className="neutral-medium">(9)</span>
                    </span>
                    <span className="checkmark"></span>
                  </label>
                  <span className="arrow-down"></span>
                  <ul>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" />
                        <span className="text-small">
                          Hats
                          <span className="neutral-medium">(4)</span>
                        </span>
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" />
                        <span className="text-small">
                          Glasses
                          <span className="neutral-medium">(3)</span>
                        </span>
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" />
                        <span className="text-small">
                          Jeans
                          <span className="neutral-medium">(2)</span>
                        </span>
                        <span className="checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </li>
                <li>
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">
                      Kids <span className="neutral-medium">(15)</span>
                    </span>
                    <span className="checkmark"></span>
                  </label>
                  <span className="arrow-down"></span>
                </li>
                <li>
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">
                      Gifts <span className="neutral-medium">(10)</span>
                    </span>
                    <span className="checkmark"></span>
                  </label>
                  <span className="arrow-down"></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="block-filter">
            <h6 className="item-collapse">Colors </h6>
            <div className="box-collapse scrollFilter">
              <ul className="list-colors">
                <li className="active">
                  <div className="box-colors">
                    <div className="item-color color-4"></div>
                    <label>Blue</label>
                  </div>
                </li>
                <li>
                  <div className="box-colors">
                    <div className="item-color color-3"></div>
                    <label>Grey</label>
                  </div>
                </li>
                <li>
                  <div className="box-colors">
                    <div className="item-color color-5"></div>
                    <label>Red</label>
                  </div>
                </li>
                <li>
                  <div className="box-colors">
                    <div className="item-color color-6"></div>
                    <label>Yellow</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="block-filter">
            <h6 className="item-collapse">Size </h6>
            <div className="box-collapse scrollFilter">
              <div className="block-size">
                <div className="list-sizes">
                  <span className="item-size">XS </span>
                  <span className="item-size active">S </span>
                  <span className="item-size">M </span>
                  <span className="item-size">XL </span>
                </div>
              </div>
            </div>
          </div>
          <div className="block-filter">
            <h6 className="item-collapse">Brand </h6>
            <div className="box-collapse scrollFilter">
              <ul className="list-filter-checkbox">
                <li>
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">Adidas</span>
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">Chloe</span>
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">Kendo</span>
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">Nike</span>
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">Adidas</span>
                    <span className="checkmark"></span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="block-filter">
            <h6 className="item-collapse">Price </h6>
            <div className="box-collapse scrollFilter">
              <ul className="list-filter-checkbox">
                <li>
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">$10.00 - $49.00</span>
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">$50.00 - $99.00</span>
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">$100.00 - $199.00</span>
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">$200.00 +</span>
                    <span className="checkmark"></span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ShopFilter;