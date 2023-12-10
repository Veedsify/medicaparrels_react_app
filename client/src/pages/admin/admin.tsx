import "../../assets/css/admin.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import AdminNavbar from "./components/navbar";
import Products from "./products";
import Orders from "./orders";
import Blogs from "./blogs";
import ConfigPages from "./configs_pages";
import Configs from "./configs";
import Users from "./users";
import BlogAdd from "./blog_add";
import MyArticles from './my_articles';

const Admin = () => {
  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/configs" element={<Configs />} />
        <Route path="/users" element={<Users />} />
        <Route path="/configs/pages" element={<ConfigPages />} />
        <Route path="/blogs/new" element={<BlogAdd />} />
        <Route path="/blogs/all" element={<MyArticles />} />
      </Routes>
    </div>
  );
};

export default Admin;
