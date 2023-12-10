import { LucideFacebook, LucideInstagram, LucideTwitter } from "lucide-react";
import ShopSuggestions from "../components/shop_suggestions";

const Product = () => {
  return (
    <>
      <main className="main">
        <section className="section block-product-single block-product-single-9">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="detail-gallery">
                  <div className="slider-nav-thumbnails slider-nav-thumbnails-1">
                    <div>
                      <div className="item-thumb">
                        <img src="/imgs/page/product/thumnb.png" alt="kidify" />
                      </div>
                    </div>
                    <div>
                      <div className="item-thumb">
                        <img
                          src="/imgs/page/product/thumnb2.png"
                          alt="kidify"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="item-thumb">
                        <img
                          src="/imgs/page/product/thumnb3.png"
                          alt="kidify"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="item-thumb">
                        <img
                          src="/imgs/page/product/thumnb4.png"
                          alt="kidify"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="item-thumb">
                        <img
                          src="/imgs/page/product/thumnb5.png"
                          alt="kidify"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="box-main-gallery">
                    <a
                      className="zoom-image glightbox"
                      href="/imgs/page/product/img.png"
                    ></a>
                    <div className="product-image-slider product-image-slider-1">
                      <figure className="border-radius-10">
                        <a
                          className="glightbox"
                          href="/imgs/page/product/img.png"
                        >
                          <img src="/imgs/page/product/img.png" alt="kidify" />
                        </a>
                      </figure>
                      <figure className="border-radius-10">
                        <a
                          className="glightbox"
                          href="/imgs/page/product/img.png"
                        >
                          <img src="/imgs/page/product/img.png" alt="kidify" />
                        </a>
                      </figure>
                      <figure className="border-radius-10">
                        <a
                          className="glightbox"
                          href="/imgs/page/product/img.png"
                        >
                          <img src="/imgs/page/product/img.png" alt="kidify" />
                        </a>
                      </figure>
                      <figure className="border-radius-10">
                        <a
                          className="glightbox"
                          href="/imgs/page/product/img.png"
                        >
                          <img src="/imgs/page/product/img.png" alt="kidify" />
                        </a>
                      </figure>
                      <figure className="border-radius-10">
                        <a
                          className="glightbox"
                          href="/imgs/page/product/img.png"
                        >
                          <img src="/imgs/page/product/img.png" alt="kidify" />
                        </a>
                      </figure>
                      <figure className="border-radius-10">
                        <a
                          className="glightbox"
                          href="/imgs/page/product/img.png"
                        >
                          <img src="/imgs/page/product/img.png" alt="kidify" />
                        </a>
                      </figure>
                      <figure className="border-radius-10">
                        <a
                          className="glightbox"
                          href="/imgs/page/product/img.png"
                        >
                          <img src="/imgs/page/product/img.png" alt="kidify" />
                        </a>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box-product-info">
                  <div className="breadcrumbs">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Shop</a>
                      </li>
                      <li>
                        <a href="#">Women</a>
                      </li>
                      <li>
                        <a href="#">Summer Stripes Shorts</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="mb-5">Summer Stripes Shorts</h3>
                  <div className="block-rating">
                    <img src="/imgs/template/icons/star-fill.svg" alt="Guza" />
                    <img src="/imgs/template/icons/star-fill.svg" alt="Guza" />
                    <img src="/imgs/template/icons/star-fill.svg" alt="Guza" />
                    <img src="/imgs/template/icons/star-fill.svg" alt="Guza" />
                    <img src="/imgs/template/icons/star-none.svg" alt="Guza" />
                    <span className="text-17 neutral-medium-dark">(5)</span>
                  </div>
                  <div className="block-price">
                    <span className="price-main">$15.00</span>
                  </div>
                  <div className="block-description">
                    <p className="body-p2 neutral-medium-dark">
                      The shorts are made from soft organic cotton. They have an
                      elasticated waistband with an internal drawstring and side
                      pockets.
                    </p>
                  </div>
                  <div className="block-color">
                    <span>Color:</span>
                    <label>Navy</label>
                    <div className="list-colors">
                      <div className="box-colors">
                        <div className="item-color color-1"></div>
                        <div className="item-color color-2 active"></div>
                        <div className="item-color color-3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="block-size">
                    <span>Size:</span>
                    <label>S</label>
                    <div className="box-list-sizes">
                      <div className="list-sizes">
                        <span className="item-size out-stock">XS</span>
                        <span className="item-size active">S</span>
                        <span className="item-size">M</span>
                        <span className="item-size">XL</span>
                      </div>
                      <a className="text-17-medium link-underline" href="#">
                        Size Guide
                      </a>
                    </div>
                  </div>
                  <div className="block-quantity">
                    <div className="text-17 neutral-medium-dark mb-10">
                      Quantity
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
                      <a className="btn btn-black" href="#">
                        Add to Cart
                      </a>
                      <a className="btn btn-navy" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                  <div className="block-shipping">
                    <div className="free-shipping">Free shipping over $300</div>
                    <div className="time-shipping">
                      60 - Days Returns Learn More
                    </div>
                  </div>
                  <div className="block-tags-product">
                    <p className="body-p2">
                      <span className="neutral-medium-dark">Product ID:</span>
                      <span className="neutral-dark">C66R8B47MP</span>
                    </p>
                    <p className="body-p2">
                      <span className="neutral-medium-dark">Categories:</span>
                      <a className="neutral-dark" href="#">
                        Dress,
                      </a>
                      <a className="neutral-dark" href="#">
                        Pants
                      </a>
                    </p>
                    <p className="body-p2">
                      <span className="neutral-medium-dark">Tags:</span>
                      <a className="neutral-dark" href="#">
                        fashion,
                      </a>
                      <a className="neutral-dark" href="#">
                        shoes,
                      </a>
                      <a className="neutral-dark" href="#">
                        women
                      </a>
                    </p>
                  </div>
                  <div className="block-socials-product">
                    <span className="body-p2 neutral-medium-dark">Share:</span>
                    <a className="social-neutral-dark" href="#">
                      <LucideFacebook />
                    </a>
                    <a className="social-neutral-dark" href="#">
                      <LucideTwitter />
                    </a>
                    <a className="social-neutral-dark" href="#">
                      <LucideInstagram className="fill-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section block-product-single-detail">
          <div className="container">
            <div className="box-detail-product">
              <ul className="nav-tabs nav-tab-product" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#description"
                    type="button"
                    role="tab"
                    aria-controls="description"
                    aria-selected="true"
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="sizechart-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#sizechart"
                    type="button"
                    role="tab"
                    aria-controls="sizechart"
                    aria-selected="false"
                  >
                    Size Chart
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="reviews-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#reviews"
                    type="button"
                    role="tab"
                    aria-controls="reviews"
                    aria-selected="false"
                  >
                    Reviews (3)
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <p>
                    The shorts are made from soft organic cotton. They have an
                    elasticated waistband with an internal drawstring and side
                    pockets. Theyre the same fit as our classic 365 organic
                    cotton shorts and feature a multicolored embroidered logo on
                    the hem.
                  </p>
                  <div className="row mt-40">
                    <div className="col-lg-6">
                      <p>
                        <strong>Model wears:</strong>UK 10/ EU 38/ US 6<br />
                        <strong>Occasion:</strong>Lifestyle, Sport
                        <br />
                        <strong>Country:</strong>Italy
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <p>
                        <strong>Outer:</strong>Leather 100%, Polyamide 100%
                        <br />
                        <strong>Lining:</strong>Polyester 100%
                        <br />
                        <strong>CounSoletry:</strong>Rubber 100%
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="sizechart"
                  role="tabpanel"
                  aria-labelledby="sizechart-tab"
                >
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <th>Color</th>
                          <td> Red</td>
                        </tr>
                        <tr>
                          <th>Size</th>
                          <td> XL</td>
                        </tr>
                        <tr>
                          <th>Weight</th>
                          <td> 300gr</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="reviews"
                  role="tabpanel"
                  aria-labelledby="reviews-tab"
                >
                  <div className="comments-area">
                    <div className="row">
                      <div className="col-lg-12 mb-30">
                        <h4 className="mb-30 title-question">
                          Customer reviews
                        </h4>
                        <div className="d-flex align-items-center mb-30">
                          <div className="product-rate d-inline-block mr-15">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                          <h6>4.8 out of 5</h6>
                        </div>
                        <div className="progress">
                          <span>5 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                          >
                            50%
                          </div>
                        </div>
                        <div className="progress">
                          <span>4 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "25%" }}
                          >
                            25%
                          </div>
                        </div>
                        <div className="progress">
                          <span>3 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "45%" }}
                          >
                            45%
                          </div>
                        </div>
                        <div className="progress">
                          <span>2 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "65%" }}
                          >
                            65%
                          </div>
                        </div>
                        <div className="progress mb-30">
                          <span>1 star</span>
                          <div
                            className="progress-bar"
                            style={{ width: "85%" }}
                          >
                            85%
                          </div>
                        </div>
                        <a className="font-xs text-muted" href="#">
                          How are ratings calculated?
                        </a>
                      </div>
                      <div className="col-lg-12 mb-30">
                        <h4 className="mb-30 title-question">
                          Customer questions &amp; answers
                        </h4>
                        <div className="comment-list">
                          <div className="single-comment justify-content-between d-flex mb-30 hover-up">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb text-center">
                                <img
                                  src="/imgs/page/about1/team.png"
                                  alt="Ecom"
                                />
                                <a className="font-heading text-brand" href="#">
                                  Sienna
                                </a>
                              </div>
                              <div className="desc">
                                <div className="d-flex justify-content-between mb-10">
                                  <div className="d-flex align-items-center">
                                    <span className="font-xs color-gray-700">
                                      December 4, 2023 at 3:12 pm
                                    </span>
                                  </div>
                                  <div className="product-rate d-inline-block">
                                    <div
                                      className="product-rating"
                                      style={{ width: "100%" }}
                                    ></div>
                                  </div>
                                </div>
                                <p className="mb-10 font-sm color-gray-900">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Delectus, suscipit
                                  exercitationem accusantium obcaecati quos
                                  voluptate nesciunt facilis itaque modi commodi
                                  dignissimos sequi repudiandae minus ab
                                  deleniti totam officia id incidunt?
                                  <a className="reply" href="#">
                                    {" "}
                                    Reply
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="single-comment justify-content-between d-flex mb-30 ml-30 hover-up">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb text-center">
                                <img
                                  src="/imgs/page/about1/team.png"
                                  alt="Ecom"
                                />
                                <a className="font-heading text-brand" href="#">
                                  Brenna
                                </a>
                              </div>
                              <div className="desc">
                                <div className="d-flex justify-content-between mb-10">
                                  <div className="d-flex align-items-center">
                                    <span className="font-xs color-gray-700">
                                      December 4, 2023 at 3:12 pm
                                    </span>
                                  </div>
                                  <div className="product-rate d-inline-block">
                                    <div
                                      className="product-rating"
                                      style={{ width: "80%" }}
                                    ></div>
                                  </div>
                                </div>
                                <p className="mb-10 font-sm color-gray-900">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Delectus, suscipit
                                  exercitationem accusantium obcaecati quos
                                  voluptate nesciunt facilis itaque modi commodi
                                  dignissimos sequi repudiandae minus ab
                                  deleniti totam officia id incidunt?
                                  <a className="reply" href="#">
                                    {" "}
                                    Reply
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="single-comment justify-content-between d-flex hover-up">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb text-center">
                                <img
                                  src="/imgs/page/about1/team.png"
                                  alt="Ecom"
                                />
                                <a className="font-heading text-brand" href="#">
                                  Gemma
                                </a>
                              </div>
                              <div className="desc">
                                <div className="d-flex justify-content-between mb-10">
                                  <div className="d-flex align-items-center">
                                    <span className="font-xs color-gray-700">
                                      December 4, 2023 at 3:12 pm
                                    </span>
                                  </div>
                                  <div className="product-rate d-inline-block">
                                    <div
                                      className="product-rating"
                                      style={{ width: "80%" }}
                                    ></div>
                                  </div>
                                </div>
                                <p className="mb-10 font-sm color-gray-900">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Delectus, suscipit
                                  exercitationem accusantium obcaecati quos
                                  voluptate nesciunt facilis itaque modi commodi
                                  dignissimos sequi repudiandae minus ab
                                  deleniti totam officia id incidunt?
                                  <a className="reply" href="#">
                                    {" "}
                                    Reply
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ShopSuggestions />
      </main>
    </>
  );
};

export default Product;
