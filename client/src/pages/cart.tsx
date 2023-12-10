const Cart = () => {
  return (
    <>
      <main className="main">
        <div className="section block-breadcrumb">
          <div className="container">
            <div className="breadcrumbs">
              <ul>
                <li>
                  {" "}
                  <a href="#">Home </a>
                </li>
                <li>
                  {" "}
                  <a href="#">Cart Items</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="section block-cart">
          <div className="container">
            <div className="row mt-20">
              <div className="col-lg-7">
                <div className="box-title-cart">
                  <h4>Your Cart</h4>
                  <h6>2 items</h6>
                </div>
                <div className="list-items-cart">
                  <div className="item-cart">
                    <div className="item-cart-image">
                      <img src="/imgs/page/cart/sp.png" alt="Guza" />
                    </div>
                    <div className="item-cart-info">
                      <div className="item-cart-info-1">
                        <a className="text-16-medium" href="#">
                          Ball Crew Shirt
                        </a>
                        <div className="box-info-size-color-product">
                          <p className="box-color">
                            <span className="body-p2 neutral-medium-dark">
                              Color:
                            </span>
                            <span className="body-p2 neutral-dark">Navy</span>
                          </p>
                          <p className="box-size">
                            <span className="body-p2 neutral-medium-dark">
                              Size:
                            </span>
                            <span className="body-p2 neutral-dark">S</span>
                          </p>
                        </div>
                        <div className="box-form-cart">
                          <div className="form-cart detail-qty">
                            <span className="minus"></span>
                            <input
                              className="qty-val form-control"
                              type="text"
                              name="quantity"
                              value="1"
                              min="1"
                            />
                            <span className="plus"></span>
                          </div>
                        </div>
                      </div>
                      <div className="item-cart-info-2">
                        <p className="body-p2">$24.00</p>
                        <a className="btn-remove-cart" href="#"></a>
                      </div>
                    </div>
                  </div>
                  <div className="item-cart">
                    <div className="item-cart-image">
                      <img src="/imgs/page/cart/sp2.png" alt="Guza" />
                    </div>
                    <div className="item-cart-info">
                      <div className="item-cart-info-1">
                        <a className="text-16-medium" href="#">
                          Ball Crew Shirt
                        </a>
                        <div className="box-info-size-color-product">
                          <p className="box-color">
                            <span className="body-p2 neutral-medium-dark">
                              Color:
                            </span>
                            <span className="body-p2 neutral-dark">Navy</span>
                          </p>
                          <p className="box-size">
                            <span className="body-p2 neutral-medium-dark">
                              Size:
                            </span>
                            <span className="body-p2 neutral-dark">S</span>
                          </p>
                        </div>
                        <div className="box-form-cart">
                          <div className="form-cart detail-qty">
                            <span className="minus"></span>
                            <input
                              className="qty-val form-control"
                              type="text"
                              name="quantity"
                              value="1"
                              min="1"
                            />
                            <span className="plus"></span>
                          </div>
                        </div>
                      </div>
                      <div className="item-cart-info-2">
                        <p className="body-p2">$24.00</p>
                        <a className="btn-remove-cart" href="#"></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-coupon">
                  <div className="coupon-left">
                    <input
                      className="form-control input-coupon"
                      type="text"
                      placeholder="Coupon code"
                    />
                    <button className="btn btn-border">Apply</button>
                  </div>
                  <div className="coupon-right">
                    <a className="btn btn-border" href="#">
                      Update Cart
                    </a>
                  </div>
                </div>
                <div className="box-may-also-like">
                  <h4 className="box-border-bottom mb-20">You May Also Like</h4>
                  <div className="list-items-also-like">
                    <div className="item-also-like">
                      <div className="item-also-like-image">
                        <img src="/imgs/page/cart/sp3.png" alt="Guza" />
                      </div>
                      <div className="item-also-like-info">
                        <div className="item-also-like-info-1">
                          <a className="text-16-medium" href="#">
                            Ball Crew Shirt
                          </a>
                          <p className="body-2 neutral-medium-dark mb-8">
                            $35.00
                          </p>
                          <div className="box-color box-size mb-8">
                            <span className="body-p2 neutral-medium-dark">
                              Color:
                            </span>
                            <div className="dropdown">
                              <button
                                className="btn dropdown-toggle"
                                id="dropdownColor"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span>Black</span>
                              </button>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownColor"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Black
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Navy
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="box-size mb-8">
                            <span className="body-p2 neutral-medium-dark">
                              Size:
                            </span>
                            <div className="dropdown">
                              <button
                                className="btn dropdown-toggle"
                                id="dropdownSize"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span>M</span>
                              </button>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownSize"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    S
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    M
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    XL
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="item-also-like-info-2">
                          <div className="box-form-cart">
                            <div className="form-cart detail-qty">
                              <span className="minus"></span>
                              <input
                                className="qty-val form-control"
                                type="text"
                                name="quantity"
                                value="1"
                                min="1"
                              />
                              <span className="plus"></span>
                            </div>
                            <a className="btn btn-black-medium" href="#">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-also-like">
                      <div className="item-also-like-image">
                        <img src="/imgs/page/cart/sp4.png" alt="Guza" />
                      </div>
                      <div className="item-also-like-info">
                        <div className="item-also-like-info-1">
                          <a className="text-16-medium" href="#">
                            Ball Crew Shirt
                          </a>
                          <p className="body-2 neutral-medium-dark mb-8">
                            $35.00
                          </p>
                          <div className="box-color box-size mb-8">
                            <span className="body-p2 neutral-medium-dark">
                              Color:
                            </span>
                            <div className="dropdown">
                              <button
                                className="btn dropdown-toggle"
                                id="dropdownColor"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span>Black</span>
                              </button>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownColor"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Black
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Navy
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="box-size mb-8">
                            <span className="body-p2 neutral-medium-dark">
                              Size:
                            </span>
                            <div className="dropdown">
                              <button
                                className="btn dropdown-toggle"
                                id="dropdownSize"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span>M</span>
                              </button>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownSize"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    S
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    M
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    XL
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="item-also-like-info-2">
                          <div className="box-form-cart">
                            <div className="form-cart detail-qty">
                              <span className="minus"></span>
                              <input
                                className="qty-val form-control"
                                type="text"
                                name="quantity"
                                value="1"
                                min="1"
                              />
                              <span className="plus"></span>
                            </div>
                            <a className="btn btn-black-medium" href="#">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-also-like">
                      <div className="item-also-like-image">
                        <img src="/imgs/page/cart/sp5.png" alt="Guza" />
                      </div>
                      <div className="item-also-like-info">
                        <div className="item-also-like-info-1">
                          <a className="text-16-medium" href="#">
                            Ball Crew Shirt
                          </a>
                          <p className="body-2 neutral-medium-dark mb-8">
                            $35.00
                          </p>
                          <div className="box-color box-size mb-8">
                            <span className="body-p2 neutral-medium-dark">
                              Color:
                            </span>
                            <div className="dropdown">
                              <button
                                className="btn dropdown-toggle"
                                id="dropdownColor"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span>Black</span>
                              </button>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownColor"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Black
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Navy
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="box-size mb-8">
                            <span className="body-p2 neutral-medium-dark">
                              Size:
                            </span>
                            <div className="dropdown">
                              <button
                                className="btn dropdown-toggle"
                                id="dropdownSize"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span>M</span>
                              </button>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownSize"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    S
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    M
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    XL
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="item-also-like-info-2">
                          <div className="box-form-cart">
                            <div className="form-cart detail-qty">
                              <span className="minus"></span>
                              <input
                                className="qty-val form-control"
                                type="text"
                                name="quantity"
                                value="1"
                                min="1"
                              />
                              <span className="plus"></span>
                            </div>
                            <a className="btn btn-black-medium" href="#">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="box-detail-cart">
                  <h4 className="mb-25">Order Summary</h4>
                  <div className="box-info-cart">
                    <div className="d-flex align-items-center justify-content-between box-border-bottom">
                      <h5 className="neutral-medium-dark">Subtotal</h5>
                      <h5 className="neutral-dark">$59.00</h5>
                    </div>
                    <div className="box-info-cart-inner">
                      <p className="text-17-medium text-uppercase mb-15">
                        Shipping
                      </p>
                      <div className="list-radio">
                        <div className="item-radio">
                          <label>
                            <input
                              type="radio"
                              name="shipping"
                              checked={true}
                            />
                            Flat rate: $50.00
                          </label>
                          <span className="price-ship">$50.00</span>
                        </div>
                        <div className="item-radio">
                          <label>
                            <input type="radio" name="shipping" />
                            Local pickup: $60.00
                          </label>
                        </div>
                      </div>
                      <p className="body-p2 neutral-medium-dark mb-12">
                        Shipping options will be updated during checkout.
                      </p>
                      <a className="text-17 calculate-shipping" href="#">
                        Calculate shipping
                      </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between box-total-bottom">
                      <h5 className="neutral-medium-dark">Total</h5>
                      <h5 className="neutral-dark">$109.00</h5>
                    </div>
                    <div className="box-button-cart">
                      <a className="btn btn-black" href="#">
                        Proceed To Checkout
                      </a>
                    </div>
                    <div className="box-other-link">
                      <a className="text-17 link-green" href="#">
                        Free shipping on orders over $200.00
                      </a>
                      <a className="text-17" href="#">
                        Continue Shopping
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
