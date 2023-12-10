import { LucideGitCompare, LucideHeart, LucideSearch } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="cardProduct wow fadeInUp">
        <div className="cardImage">
          <Link to="/product/prod_123">
            <img
              className="imageMain"
              src="/imgs/page/homepage1/product8.png"
              alt="guza"
            />
            <img
              className="imageHover"
              src="/imgs/page/homepage1/product7.png"
              alt="guza"
            />
          </Link>
          <div className="button-select">
            <button>Add To Cart</button>
          </div>
          <div className="box-quick-button">
            <Link className="btn" to="#">
              <LucideHeart className="fill-white" />
            </Link>
            <Link className="btn" to="/product/prod_123">
              <LucideGitCompare />
            </Link>
            <a className="btn preview-product" href="#">
              <LucideSearch className="fill-white" />
            </a>
          </div>
        </div>
        <div className="cardInfo">
          <Link to="/product/prod_123">
            <h6 className="text-16-medium cardTitle">Lace Shirt Cut II</h6>
          </Link>
          <p className="body-p2 cardDesc">$16.00</p>
          <div className="box-colors">
            <div className="item-color color-1"></div>
            <div className="item-color color-2"></div>
            <div className="item-color color-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
