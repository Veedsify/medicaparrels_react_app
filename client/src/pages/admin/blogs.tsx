import { LucideBook, LucideBookPlus } from "lucide-react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="blogs">
      <h2 className="welcome-message">Blogs</h2>
      <div className="menus">
        <Link to="/admin/blogs/new" className="menu">
          <LucideBookPlus size={30} />
          <h4 className="title">New Article</h4>
        </Link>
        <Link to="/admin/blogs/all" className="menu">
          <LucideBook size={30} />
          <h4 className="title">My Articles</h4>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
