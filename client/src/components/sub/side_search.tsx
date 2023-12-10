interface SideSearchProps {
  open: boolean;
  onClose: () => void;
}

const SideSearch = ({}: SideSearchProps) => {
  return (
    <div className="box-popup-search ele-popup-search">
      <div className="box-search-overlay"></div>
      <div className="box-search-wrapper">
        <a className="btn-close-popup" href="#">
          <svg
            className="icon-16 d-inline-flex align-items-center justify-content-center"
            fill="#111111"
            stroke="#111111"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </a>
        <h5 className="mb-15">Search products</h5>
        <form action="#">
          <div className="form-group">
            <select className="form-control arrow-select">
              <option>All Categories</option>
              <option>Animals & Pet Supplies</option>
              <option>Baby & Toddler</option>
            </select>
          </div>
          <div className="form-group">
            <input className="form-control search-icon" type="text" />
          </div>
        </form>
        <div className="box-quick-search">
          <span className="text-17 neutral-medium-dark">Quick search:</span>
          <a className="text-17" href="#">
            T-Shirt
          </a>
          <a className="text-17" href="#">
            Jeans
          </a>
          <a className="text-17" href="#">
            Mens
          </a>
        </div>
        <div className="box-products-search">
          <h6 className="text-18-medium mb-10">You May Also Like</h6>
          <div className="box-list-product-search">
            <div className="item-product-search">
              <div className="cardProductStyle3 cardProductType03 cardProductType02 wow fadeInUp">
                <div className="cardImage">
                  <a href="#">
                    <img
                      className="imageMain"
                      src="assets/imgs/page/popup/product-1.png"
                      alt="guza"
                    />
                    <img
                      className="imageHover"
                      src="assets/imgs/page/popup/product-5.png"
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
                        <g clip-path="url(#clip0_116_452)">
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
                        <g clip-path="url(#clip0_200_1102)">
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
                        <g clip-path="url(#clip0_91_73)">
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
                  <h6 className="text-16-medium">illow Covers Luxury</h6>
                  <p className="body-p2 cardDesc">$24.00</p>
                </div>
              </div>
            </div>
            <div className="item-product-search">
              <div className="cardProductStyle3 cardProductType03 cardProductType02 wow fadeInUp">
                <div className="cardImage">
                  <a href="#">
                    <img
                      className="imageMain"
                      src="assets/imgs/page/popup/product-2.png"
                      alt="guza"
                    />
                    <img
                      className="imageHover"
                      src="assets/imgs/page/popup/product-6.png"
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
                        <g clip-path="url(#clip0_116_452)">
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
                        <g clip-path="url(#clip0_200_1102)">
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
                        <g clip-path="url(#clip0_91_73)">
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
                  <h6 className="text-16-medium">Pillow Covers Linen</h6>
                  <p className="body-p2 cardDesc">$36.00</p>
                </div>
              </div>
            </div>
            <div className="item-product-search">
              <div className="cardProductStyle3 cardProductType03 cardProductType02 wow fadeInUp">
                <div className="cardImage">
                  <a href="#">
                    <img
                      className="imageMain"
                      src="assets/imgs/page/popup/product-3.png"
                      alt="guza"
                    />
                    <img
                      className="imageHover"
                      src="assets/imgs/page/popup/product-7.png"
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
                        <g clip-path="url(#clip0_116_452)">
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
                        <g clip-path="url(#clip0_200_1102)">
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
                        <g clip-path="url(#clip0_91_73)">
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
                  <h6 className="text-16-medium">Pillow Cushion</h6>
                  <p className="body-p2 cardDesc">$27.00</p>
                </div>
              </div>
            </div>
            <div className="item-product-search">
              <div className="cardProductStyle3 cardProductType03 cardProductType02 wow fadeInUp">
                <div className="cardImage">
                  <a href="#">
                    <img
                      className="imageMain"
                      src="assets/imgs/page/popup/product-4.png"
                      alt="guza"
                    />
                    <img
                      className="imageHover"
                      src="assets/imgs/page/popup/product-8.png"
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
                        <g clip-path="url(#clip0_116_452)">
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
                        <g clip-path="url(#clip0_200_1102)">
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
                        <g clip-path="url(#clip0_91_73)">
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
                  <h6 className="text-16-medium">Pillow Covers Linen</h6>
                  <p className="body-p2 cardDesc">$98.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSearch;
