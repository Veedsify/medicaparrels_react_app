import { MouseEvent, useState } from "react";
import ProductItem from "../components/sub/product_item";

const Shop = () => {
  const [shopFilter, setShopFilter] = useState(false);
  const [defaultSorting, setDefaultSorting] = useState<string>("grid-col-3");

  const sortProducts = (e: MouseEvent<HTMLSpanElement>) => {
    const columnCount = e?.currentTarget?.getAttribute("data-col");
    setDefaultSorting(`grid-col-${columnCount}`);
  };

  return (
    <>
      <main className="main">
        <section className="section block-content-shop">
          <div className="container">
            <div className="row">
              {/* FILTER STARTS */}
              <div className="col-lg-3">
                <div
                  className="wrapper-overlay"
                  onClick={() => setShopFilter(false)}
                  style={{ display: shopFilter ? "block" : "none" }}
                ></div>
                <div
                  className={`box-filters-sidebar ${
                    shopFilter ? "active" : ""
                  }`}
                >
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
                        </li>
                        <li>
                          <label className="cb-container">
                            <input type="checkbox" />
                            <span className="text-small">
                              Mens <span className="neutral-medium">(9)</span>
                            </span>
                            <span className="checkmark"></span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block-filter">
                    <h6 className="item-collapse">Colors </h6>
                    <div className="box-collapse scrollFilter">
                      <ul className="list-colors">
                        <li className="">
                          <div className="box-colors">
                            <div className="item-color color-4"></div>
                            <label>Blue</label>
                          </div>
                        </li>
                        <li className="active">
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
                          <span className="item-size active text-danger">
                            S{" "}
                          </span>
                          <span className="item-size">M </span>
                          <span className="item-size">XL </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* FILTER ENDS */}
              <div className="col-lg-9">
                <div className="banner-shop">
                  <div className="box-text-banner">
                    <h3 className="text-34-semibold mb-10">
                      Premium Quality Aparrels
                    </h3>
                    <p className="text-20 mb-25">On Medic Apparels</p>
                    <a className="btn btn-border" href="#">
                      Bulk Order
                    </a>
                  </div>
                </div>
                <div className="box-filter-top">
                  <div className="show-sm">
                    <button
                      className="btn-open-filter border-0"
                      onClick={() => setShopFilter(true)}
                    >
                      Filter
                    </button>
                  </div>
                  <div className="number-product">
                    <p className="body-p2 neutral-medium-dark">
                      Showing 9 of 18 products
                    </p>
                  </div>
                  <div className="box-sort">
                    <div className="box-sortby d-flex align-items-center">
                      <div className="dropdown dropdown-sort">
                        <button
                          className="btn dropdown-toggle"
                          id="dropdownSort"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Default Sorting
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu-light"
                          aria-labelledby="dropdownSort"
                          style={{ margin: "0px" }}
                        >
                          <li>
                            <a className="dropdown-item active" href="#">
                              Default Sorting
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Oldest products
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Comments products
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="box-view-style">
                      <span
                        className={`view-type view-2 cursor-pointer ${
                          defaultSorting == "grid-col-2" ? "active" : ""
                        }`}
                        data-col="2"
                        onClick={sortProducts}
                      ></span>
                      <span
                        className={`view-type view-3 cursor-pointer ${
                          defaultSorting == "grid-col-3" ? "active" : ""
                        }`}
                        data-col="3"
                        onClick={sortProducts}
                      ></span>
                      <span
                        onClick={sortProducts}
                        className={`view-type view-4 cursor-pointer
                        ${defaultSorting == "grid-col-4" ? "active" : ""}`}
                        data-col="4"
                      ></span>
                      <span
                        onClick={sortProducts}
                        className={`view-type view-5 cursor-pointer
                        ${defaultSorting == "grid-col-5" ? "active" : ""}`}
                        data-col="5"
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="box-your-filter">
                  <div className="block-text-filter">
                    <span className="body-p2 neutral-medium-dark">
                      Your filter
                    </span>
                  </div>
                  <div className="block-ele-filter">
                    <a className="btn btn-tag-filter" href="#">
                      XS<span className="close-tag"></span>
                    </a>
                    <a className="btn btn-tag-filter" href="#">
                      Women<span className="close-tag"></span>
                    </a>
                    <a className="clear-filter link-underline" href="#">
                      Clear All
                    </a>
                  </div>
                </div>
                <div className={` box-list-products ${defaultSorting}`}>
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </div>
                <div className="text-center mt-50">
                  <a className="btn btn-border" href="#">
                    Load More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Shop;
