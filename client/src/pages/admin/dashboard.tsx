import {
  LucideBarChart,
  LucideBook,
  LucideDollarSign,
  LucideGroup,
  LucideHammer,
  LucidePackage,
  LucideSettings,
  LucideUserCheck,
  LucideUsers,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="welcome-message">Welcome: Nkechi</h2>
      <div className="menus">
        <Link to="/admin/analytics" className="menu">
          <LucideBarChart size={30} />
          <h4 className="title">Analytics</h4>
        </Link>
        <Link to="/admin/products" className="menu">
          <LucidePackage size={30} />
          <h4 className="title">Products</h4>
        </Link>
        <Link to="/admin/orders" className="menu">
          <LucideDollarSign size={30} />
          <h4 className="title">Orders</h4>
        </Link>
        <Link to="/admin/categories" className="menu">
          <LucideGroup size={30} />
          <h4 className="title">Categories</h4>
        </Link>
        <Link to="/admin/blogs" className="menu">
          <LucideBook size={30} />
          <h4 className="title">Blogs</h4>
        </Link>
        <Link to="/admin/users" className="menu">
          <LucideUsers size={30} />
          <h4 className="title">Users</h4>
        </Link>
        <Link to="/admin/configs" className="menu">
          <LucideHammer size={30} />
          <h4 className="title">Configurations</h4>
        </Link>
        <Link to="/admin/profile" className="menu">
          <LucideUserCheck size={30} />
          <h4 className="title">Profile</h4>
        </Link>
        <Link to="/admin/settings" className="menu">
          <LucideSettings size={30} />
          <h4 className="title">Settings</h4>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
