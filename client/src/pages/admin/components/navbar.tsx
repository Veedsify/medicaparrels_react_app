import { LucideBell, LucideLogOut, LucideSettings, LucideUser } from "lucide-react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <>
      <header>
        <nav className="admin-nav">
          <img src="/" alt="" className="logo" />
          <Link to="/admin" className="buttons">
            Dashboard
          </Link>
          <div className="notifications">
            <div>
              <LucideBell />
            </div>
            <ul>
              <li>
                <Link to="/admin/notifications">

                </Link>
              </li>
              <li>
                <Link to="/admin/notifications">

                </Link>
              </li>
              <li>
                <Link to="/admin/notifications">

                </Link>
              </li>
              <li>
                <Link to="/admin/notifications">

                </Link>
              </li>
              <li>
                <Link to="/admin/notifications">

                </Link>
              </li>
              <li>
                <Link to="/admin/notifications">

                </Link>
              </li>
              <li>
                <Link to="/admin/notifications">

                </Link>
              </li>
            </ul>
          </div>
          <div className="quick_actions">
            <img
              className="avatar"
              src="/imgs/page/blog/avatar.png"
              alt=""
            />
            <ul>
              <li>
                <Link to="/admin/profile">
                  <LucideUser/>
                  Profile</Link>
              </li>
              <li>
                <Link to="/admin/settings">
                  <LucideSettings/>
                  Settings</Link>
              </li>
              <li>
                <Link to="/logout">
                  <LucideLogOut/>
                  Logout</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default AdminNavbar;



