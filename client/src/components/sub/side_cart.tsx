import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface SideCartProps {
  open: boolean;
  onClose: () => void;
}

const SideCart = ({ open, onClose }: SideCartProps) => {
  return (
    <div
      className="box-popup-cart"
      style={{ visibility: open ? "visible" : "hidden" }}
    >
      <div className="box-cart-overlay" onClick={onClose}></div>
      <div className={`box-cart-wrapper ${open ? "active" : ""}`}>
        <span className="btn-close-popup cursor-pointer" onClick={onClose}>
          <X className="icon-16 d-inline-flex align-items-center justify-content-center" />
        </span>
        <h5 className="mb-15">Your Cart (2)</h5>
        <p className="body-p2">
          <span className="text-17-medium">Free Shipping</span>on orders over
          <span className="text-17-medium">$200.00</span>
        </p>
        <div className="box-progress-bar-block">
          <div className="progress">
            <div className="progress-bar" style={{ width: "35%" }}></div>
          </div>
        </div>
        <div className="box-products-cart">
          <div className="box-empty-cart d-none">
            <div className="icon-empty-cart">
              <img src="/imgs/template/icons/empty-cart.svg" alt="Guza" />
            </div>
            <div className="info-empty-cart">
              <p className="text-17 neutral-medium-dark">Your cart is empty</p>
              <a className="link-underline" href="#">
                Add from Wishlist
              </a>
            </div>
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
                      <span className="body-p2 neutral-medium-dark">Size:</span>
                      <span className="body-p2 neutral-dark">S</span>
                    </p>
                  </div>
                  <p className="body-p2 d-block d-sm-none mb-8">$24.00</p>
                  <div className="box-form-cart">
                    <div className="form-cart detail-qty">
                      <span className="minus"></span>
                      <input
                        className="qty-val form-control"
                        type="text"
                        name="quantity"
                        defaultValue="1"
                        min="1"
                      />
                      <span className="plus"></span>
                    </div>
                  </div>
                </div>
                <div className="item-cart-info-2">
                  <p className="body-p2 d-none d-sm-block">$24.00</p>
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
                      <span className="body-p2 neutral-medium-dark">Size:</span>
                      <span className="body-p2 neutral-dark">S</span>
                    </p>
                  </div>
                  <p className="body-p2 d-block d-sm-none mb-8">$24.00</p>
                  <div className="box-form-cart">
                    <div className="form-cart detail-qty">
                      <span className="minus"></span>
                      <input
                        className="qty-val form-control"
                        type="text"
                        name="quantity"
                        defaultValue="1"
                        min="1"
                      />
                      <span className="plus"></span>
                    </div>
                  </div>
                </div>
                <div className="item-cart-info-2">
                  <p className="body-p2 d-none d-sm-block">$24.00</p>
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
                      <span className="body-p2 neutral-medium-dark">Size:</span>
                      <span className="body-p2 neutral-dark">S</span>
                    </p>
                  </div>
                  <p className="body-p2 d-block d-sm-none mb-8">$24.00</p>
                  <div className="box-form-cart">
                    <div className="form-cart detail-qty">
                      <span className="minus"></span>
                      <input
                        className="qty-val form-control"
                        type="text"
                        name="quantity"
                        defaultValue="1"
                        min="1"
                      />
                      <span className="plus"></span>
                    </div>
                  </div>
                </div>
                <div className="item-cart-info-2">
                  <p className="body-p2 d-none d-sm-block">$24.00</p>
                  <a className="btn-remove-cart" href="#"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-products-search">
          <h6 className="text-18-medium mb-20">You May Also Like</h6>
          <div className="box-list-product-search">
            <div className="item-product-search">
              <div className="cardProductStyle3 cardProductType03 cardProductType02 wow fadeInUp">
                <div className="cardImage">
                  <a href="#">
                    <img
                      className="imageMain"
                      src="/imgs/page/shop1/sp.png"
                      alt="guza"
                    />
                    <img
                      className="imageHover"
                      src="/imgs/page/shop1/sp.png"
                      alt="guza"
                    />
                  </a>
                  <div className="button-select">
                    <a href="#">Select Options</a>
                  </div>
                  <div className="box-quick-button">
                    <a className="btn" href="#">
                      <svg
                        className="d-inline-flex align-items-center justify-content-center"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_116_452)">
                          <path
                            d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z"
                            fill=""
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_116_452">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(2 2)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a className="btn" href="#">
                      <svg
                        className="d-inline-flex align-items-center justify-content-center"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_200_1102)">
                          <path
                            d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z"
                            fill=""
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_200_1102">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(2 2)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a className="btn preview-product" href="#">
                      <svg
                        className="d-inline-flex align-items-center justify-content-center"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill=""
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_91_73)">
                          <path
                            d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z"
                            fill=""
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_91_73">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(2 2)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="cardInfo">
                  <h6 className="text-16-medium">Ball Crew Shirt</h6>
                  <p className="body-p2 cardDesc">$35.00</p>
                </div>
              </div>
            </div>
            <div className="item-product-search">
              <div className="cardProductStyle3 cardProductType03 cardProductType02 wow fadeInUp">
                <div className="cardImage">
                  <a href="#">
                    <img
                      className="imageMain"
                      src="/imgs/page/shop1/sp2.png"
                      alt="guza"
                    />
                    <img
                      className="imageHover"
                      src="/imgs/page/shop1/sp2.png"
                      alt="guza"
                    />
                  </a>
                  <div className="button-select">
                    <a href="#">Select Options</a>
                  </div>
                  <div className="box-quick-button">
                    <a className="btn" href="#">
                      <svg
                        className="d-inline-flex align-items-center justify-content-center"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_116_452)">
                          <path
                            d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z"
                            fill=""
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_116_452">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(2 2)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a className="btn" href="#">
                      <svg
                        className="d-inline-flex align-items-center justify-content-center"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_200_1102)">
                          <path
                            d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z"
                            fill=""
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_200_1102">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(2 2)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a className="btn preview-product" href="#">
                      <svg
                        className="d-inline-flex align-items-center justify-content-center"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill=""
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_91_73)">
                          <path
                            d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z"
                            fill=""
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_91_73">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(2 2)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="cardInfo">
                  <h6 className="text-16-medium">Ball Crew Shirt</h6>
                  <p className="body-p2 cardDesc">$35.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-25 mb-15">
          <h6 className="neutral-medium-dark">Subtotal</h6>
          <h6 className="neutral-dark">$59.00</h6>
        </div>
        <div className="box-button-popup-cart d-flex align-items-center justify-content-between">
          <Link
            className="btn btn-border w-100 mr-5"
            to="/cart"
            onClick={onClose}
          >
            View Cart
          </Link>
          <Link
            className="btn btn-black w-100 ml-5"
            to="/checkout"
            onClick={onClose}
          >
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
