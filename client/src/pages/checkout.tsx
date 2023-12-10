import { Link } from "react-router-dom";
import CheckoutItems from "../components/sub/checkout_item";

const Checkout = () => {
  return (
    <>
      <main className="main">
        <div className="section block-breadcrumb">
          <div className="container">
            <div className="breadcrumbs">
              <ul>
                <li>
                  <a href="#">Home </a>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="section block-cart">
          <div className="container mb-100 mt-60">
            <form action="#">
              <div className="row mt-20">
                <div className="col-lg-6">
                  <div className="box-customer-login">
                    Returning customer? <a href="#">Click here to login</a>
                  </div>
                  <div className="box-title-checkout mt-30">
                    <h4 className="mb-25">Billing Details</h4>
                    <h5 className="mb-20">Contact information</h5>
                  </div>
                  <div className="box-form-checkout form-comment">
                    <div className="form-group">
                      <label
                        className="d-d-inline-block mb-1 fw-medium"
                        htmlFor="email"
                      >
                        Email Address *
                      </label>
                      <input className="form-control" id="email" type="text" />
                      <label className="mt-12">
                        <input className="cb-left" type="checkbox" />
                        Email me with news and offers
                      </label>
                    </div>
                    <h4 className="mt-32 mb-25">Shipping address </h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="d-d-inline-block mb-1 fw-medium"
                            htmlFor="firstname"
                          >
                            First Name *
                          </label>
                          <input
                            className="form-control"
                            id="firstname"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="d-d-inline-block mb-1 fw-medium"
                            htmlFor="lastname"
                          >
                            Last Name *
                          </label>
                          <input
                            className="form-control"
                            id="lastname"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label
                            className="d-d-inline-block mb-1 fw-medium"
                            htmlFor="region"
                          >
                            Country / Region *
                          </label>
                          <input
                            className="form-control"
                            id="region"
                            type="text"
                            value="United Kingdoom (UK)"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label
                            className="d-d-inline-block mb-1 fw-medium"
                            htmlFor="address"
                          >
                            Street Address *
                          </label>
                          <input
                            className="form-control"
                            id="address"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label
                            className="d-d-inline-block mb-1 fw-medium"
                            htmlFor="apartment"
                          >
                            Apartment, suite, unit, etc. (optional)
                          </label>
                          <input
                            className="form-control"
                            id="apartment"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label
                            className="d-d-inline-block mb-1 fw-medium"
                            htmlFor="towncity"
                          >
                            Town / City *
                          </label>
                          <input
                            className="form-control"
                            id="towncity"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label
                            className="d-d-inline-block mb-1 fw-medium"
                            htmlFor="country"
                          >
                            Country (optional)
                          </label>
                          <input
                            className="form-control"
                            id="country"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label
                            className="d-d-inline-block mb-1 fw-medium"
                            htmlFor="postcode"
                          >
                            Postcode *
                          </label>
                          <input
                            className="form-control"
                            id="postcode"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label
                            className="d-d-inline-block mb-1 fw-medium"
                            htmlFor="phone"
                          >
                            Phone *
                          </label>
                          <input
                            className="form-control"
                            id="phone"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>
                            <input className="cb-left" type="checkbox" />
                            Create an account?
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label
                            className="d-d-inline-block mb-1 fw-medium"
                            htmlFor="ordernote"
                          >
                            Order Note (optional)
                          </label>
                          <textarea
                            className="form-control"
                            id="ordernote"
                            rows={6}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-detail-cart">
                    <h4 className="mb-25">Your Order</h4>
                    <div className="box-info-cart">
                      <p className="text-17-medium text-uppercase">Product</p>
                      <div className="box-info-checkout-inner">
                        <div className="list-items-cart">
                          <CheckoutItems />
                          <CheckoutItems />
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between box-border-bottom">
                        <h5 className="neutral-medium-dark">Subtotal</h5>
                        <h5 className="neutral-dark">$24.00</h5>
                      </div>
                      <div className="box-info-cart-inner">
                        <p className="text-17-medium text-uppercase mb-15 neutral-medium-dark">
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
                      </div>
                      <div className="d-flex align-items-center justify-content-between box-border-bottom">
                        <h5 className="neutral-medium-dark">Total</h5>
                        <h5 className="color-9">$74.00 </h5>
                      </div>
                      <div className="box-other-link text-start box-border-bottom">
                        <span className="text-17 link-green">
                          Free shipping on orders over $200.00
                        </span>
                        <a className="text-17" href="#">
                          Continue Shopping
                        </a>
                      </div>
                      <div className="box-payment-method">
                        <p className="text-17-medium text-uppercase mb-15 neutral-medium-dark">
                          Shipping
                        </p>
                        <div className="list-radio">
                          <div className="item-radio">
                            <label>
                              <input
                                type="radio"
                                name="payment"
                                checked={true}
                              />
                              Direct bank transfer
                            </label>
                            <p className="body-p2 neutral-medium-dark extra-info active">
                              Bank transfer supported by flutterwave.
                            </p>
                          </div>
                          <div className="item-radio">
                            <label>
                              <input type="radio" name="payment" />
                              Card (Flutterwave)
                            </label>
                            <p className="body-p2 neutral-medium-dark extra-info active">
                              Mastercard, Visa, Verve supported by Flutterwave
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="box-desc-checkout">
                        <p className="body-p2 neutral-medium-dark mb-20">
                          Your personal data will be used to process your order,
                          support your experience throughout this website, and
                          for other purposes described in our privacy policy.
                        </p>
                        <div className="form-group">
                          <label className="cursor-pointer">
                            <input className="cb-left" type="checkbox" />I agree
                            to the website{" "}
                            <Link to="/terms-of-service text-danger font-bold">
                              terms and conditions *
                            </Link>
                          </label>
                        </div>
                      </div>
                      <div className="box-button-checkout">
                        <a className="btn btn-black" href="#">
                          Place Order
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Checkout;
