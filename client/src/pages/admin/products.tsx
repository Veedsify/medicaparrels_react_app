import { LucidePackage, LucidePackageOpen, LucidePackagePlus } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
    return (
      <div className="products">
        <h2 className="welcome-message">Products</h2>
        <div className="menus">
          <Link to="/admin/products/new" className="menu">
            <LucidePackagePlus size={30} />
            <h4 className="title">New Products</h4>
          </Link>
          <Link to="/admin/products/all" className="menu">
            <LucidePackage size={30} />
            <h4 className="title">My Products</h4>
          </Link>
          <Link to="/admin/products/export" className="menu">
            <LucidePackageOpen size={30} />
            <h4 className="title">Export Products</h4>
          </Link>
        </div>
      </div>
    );
}

export default Products;