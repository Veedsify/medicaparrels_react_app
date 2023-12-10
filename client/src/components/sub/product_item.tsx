import { LucideGitCompare, LucideHeart, LucideSearch } from "lucide-react";
import { Link } from "react-router-dom";

const ProductItem = () => {
  return (
    <div className="product-item">
      <div className="cardProduct wow fadeInUp">
        <div className="cardImage">
          <Link to="/product/1">
            <img
              className="imageMain"
              src="/imgs/page/homepage1/product1.png"
              alt="guza"
            />
            <img
              className="imageHover"
              src="/imgs/page/homepage1/product1-hover.png"
              alt="guza"
            />
          </Link>
          <div className="box-quick-button">
            <Link className="btn" to="#">
              <LucideHeart className="fill-white" />
            </Link>
            <Link className="btn" to="#">
              <LucideGitCompare />
            </Link>
            <Link className="btn preview-product" to="#">
              <LucideSearch className="fill-white" />
            </Link>
          </div>
        </div>
        <div className="cardInfo">
          <Link to="#">
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

export default ProductItem;
