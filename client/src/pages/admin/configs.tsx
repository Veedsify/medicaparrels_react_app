import { LucideMailQuestion, LucideSettings2 } from "lucide-react";
import { Link } from "react-router-dom";

const Configs = () => {
  return (
    <div className="configs">
      <h2 className="welcome-message">Configurations</h2>
      <div className="menus">
        <Link to="/admin/configs/pages" className="menu">
          <LucideSettings2 size={30} />
          <h4 className="title">Configure Pages</h4>
        </Link>
        <Link to="/admin/configs/smtp" className="menu">
          <LucideMailQuestion size={30} />
          <h4 className="title">Configure SMTP Emails / Hosts</h4>
        </Link>
      </div>
    </div>
  );
};

export default Configs;
