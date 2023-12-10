import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-30">
              <h5 className="color-white mb-20">
                Receive an exclusive<span className="tone-red">20%</span>
                <br className="d-none d-md-block" />
                discount code when you
                <br className="d-none d-md-block" />
                signup.
              </h5>
              <div className="box-form-subscribe box-form-subscribe-white">
                <form className="form-sub" action="#" method="POST">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <input
                    className="btn btn-subscribe"
                    type="submit"
                    value="Subscribe"
                  />
                </form>
              </div>
            </div>
            <div className="col-lg-8 mb-30">
              <div className="row">
                <div className="col-lg-3 mb-30 footerBorder">
                  <h6 className="color-white mb-20">Company</h6>
                  <ul className="menu-footer">
                    <li>
                      <Link to="about-us-1.html">About us</Link>
                    </li>
                    <li>
                      <Link to="carrers.html">Careers</Link>
                    </li>
                    <li>
                      <Link to="store-location.html">Store Locator</Link>
                    </li>
                    <li>
                      <Link to="contact.html">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 mb-30 footerBorder">
                  <h6 className="color-white mb-20">Customer Care</h6>
                  <ul className="menu-footer">
                    <li>
                      <Link to="about-us-1.html">Size Guide</Link>
                    </li>
                    <li>
                      <Link to="team.html">Help & FAQs</Link>
                    </li>
                    <li>
                      <Link to="career.html">Return My Order</Link>
                    </li>
                    <li>
                      <Link to="#">Refer a Friend</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 mb-30 footerBorder">
                  <h6 className="color-white mb-20">Terms & Policies</h6>
                  <ul className="menu-footer">
                    <li>
                      <Link to="#">Duties & Taxes</Link>
                    </li>
                    <li>
                      <Link to="#">Shipping Info</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Terms Conditions</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 mb-30 footerBorder">
                  <h6 className="color-white mb-20">Follow Us</h6>
                  <ul className="menu-footer">
                    <li>
                      <Link to="#">Instagram</Link>
                    </li>
                    <li>
                      <Link to="#">Facebook</Link>
                    </li>
                    <li>
                      <Link to="#">Pinterest</Link>
                    </li>
                    <li>
                      <Link to="#">Tiktok</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div className="container">
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 text-center text-lg-start mb-20">
                <img
                  className="mr-25 d-inline-block align-middle logo-footer-img"
                  src="/imgs/template/logo-light.svg"
                  alt="Guza"
                />
                <span className="body-p1 color-white d-inline-block align-middle">
                  © 2023 Guza.Co. All rights reserved
                </span>
              </div>
              <div className="col-lg-6 col-md-12 text-center text-lg-end mb-20">
                <div className="d-flex justify-content-center justify-content-lg-end align-items-center box-all-payments">
                  <div className="d-inline-block box-payments mr-20">
                    <img src="/imgs/template/icons/visa.svg" alt="Guza" />
                    <img src="/imgs/template/icons/master.svg" alt="Guza" />
                    <img src="/imgs/template/icons/stripe.svg" alt="Guza" />
                    <img src="/imgs/template/icons/paypal.svg" alt="Guza" />
                  </div>
                  <div className="dropdown mr-20">
                    <button
                      className="btn btn-line-bottom dropdown-toggle"
                      id="dropdownLang"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      EN
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownLang"
                    >
                      <li>
                        <Link className="dropdown-item" to="#">
                          EN
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          JP
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          KR
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn btn-line-bottom dropdown-toggle"
                      id="dropdownCurrency"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      USD
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownCurrency"
                    >
                      <li>
                        <Link className="dropdown-item" to="#">
                          USD
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          EURO
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          AUD
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
