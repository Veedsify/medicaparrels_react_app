import { HelpingHand, Info, Shield, Truck, Webhook } from "lucide-react";
import { Link } from "react-router-dom";

const ConfigPages = () => {
  return (
    <div className="configs">
      <h2 className="welcome-message">Configure Pages</h2>
      <div className="menus">
        <Link to="/admin/configs/page/general" className="menu">
          <Webhook size={30} />
          <h4 className="title">General Settings</h4>
        </Link>
        <Link to="/admin/configs/page/about" className="menu">
          <Info size={30} />
          <h4 className="title">About Page</h4>
        </Link>
        <Link to="/admin/configs/page/privacy" className="menu">
          <Shield size={30} />
          <h4 className="title">Privacy Page</h4>
        </Link>
        <Link to="/admin/configs/page/terms" className="menu">
          <HelpingHand size={30} />
          <h4 className="title">Terms & Conditions Page</h4>
        </Link>
        <Link to="/admin/configs/page/shipping" className="menu">
          <Truck size={30} />
          <h4 className="title">Shipping & Returns Page</h4>
        </Link>
      </div>
    </div>
  );
};

export default ConfigPages;
