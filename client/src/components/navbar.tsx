import { useState } from "react";
import { LucideSearch, LucideUser, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import SideCart from "./sub/side_cart";
import SideSearch from "./sub/side_search";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [sideCart, setSideCart] = useState(false);
  const [sideSearch, setSideSearch] = useState(false);

  const togggleNavbarOn = () => {
    setNavbar(true);
  };
  const togggleNavbarOff = () => {
    setNavbar(false);
  };

  const togggleSideCartOn = () => {
    setSideCart(true);
  };
  const togggleSideCartOff = () => {
    setSideCart(false);
  };

  const togggleSideSearchOn = () => {
    setSideSearch(true);
  }
  const togggleSideSearchOff = () => {
    setSideSearch(false);
  }
  

  return (
    <>
      <header className="header sticky-bar header-style-3">
        <div className="container">
          <div className="main-header">
            <div className="header-logo">
              <Link className="d-flex" to="/">
                <img alt="luxride" src="/imgs/template/logo.svg" />
              </Link>
            </div>
            <div className="header-menu">
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li className="">
                      <Link className="active" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/contact">Size Chart</Link>
                    </li>
                  </ul>
                </nav>
                <div
                  className="burger-icon burger-icon-white cursor-pointer"
                  onClick={togggleNavbarOn}
                >
                  <span className="burger-icon-top burger-size"></span>
                  <span className="burger-icon-mid burger-size"></span>
                  <span className="burger-icon-bottom burger-size"></span>
                </div>
              </div>
            </div>
            <div className="header-account">
              <Link
                className="account-icon search"
                to="#"
                onClick={togggleSideSearchOn}
              >
                <LucideSearch className="fill-white" />
              </Link>
              <Link className="account-icon account" to="#">
                <LucideUser className="fill-white" />
              </Link>
              <span
                className="account-icon cart cursor-pointer"
                onClick={togggleSideCartOn}
              >
                <span className="number-tag">5</span>
                <ShoppingCart className="fill-white" />
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}

      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${
          navbar ? " sidebar-visible" : ""
        }`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-menu-head">
              <div className="box-head-1" style={{ display: "block" }}>
                <Link
                  className="link-underline mr-20 account-icon account"
                  to="#"
                >
                  Login
                </Link>
                <Link className="link-underline account-icon account" to="#">
                  Sign Up
                </Link>
                <Link
                  className="close-mobile"
                  to="#"
                  onClick={togggleNavbarOff}
                >
                  <img src="/imgs/template/icons/close.svg" alt="Guza" />
                </Link>
              </div>
              <div className="box-head-2" style={{ display: "none" }}>
                <Link className="back-mobile" to="#">
                  <img src="/imgs/template/icons/back.svg" alt="Guza" />
                </Link>
              </div>
            </div>
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li className="has-children">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="has-children">
                      <Link to="#">Shop</Link>
                    </li>
                    <li className="has-children">
                      <Link to="#">Products</Link>
                    </li>
                    <li className="has-children">
                      <Link to="service-grid.html">Pages</Link>
                    </li>
                    <li className="has-children">
                      <Link to="blog.html">Blog</Link>
                    </li>
                    <li>
                      <Link to="contact.html">Elements</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SIDECART*/}
      <SideCart open={sideCart} onClose={togggleSideCartOff} />

      {/* SEARCHBAR */}
      <SideSearch open={sideSearch} onClose={togggleSideSearchOff} />
    </>
  );
};

export default Navbar;
