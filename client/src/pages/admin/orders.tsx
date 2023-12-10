import {
  CircleDashed,
  LucideLoader,
  MailCheck,
  RailSymbol,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders">
      <h2 className="welcome-message">Orders</h2>
      <div className="menus">
        <Link to="/admin/orders/pending" className="menu">
          <LucideLoader size={30} />
          <h4 className="title">Pending Orders</h4>
        </Link>
        <Link to="/admin/orders/processing" className="menu">
          <CircleDashed size={30} />
          <h4 className="title">Processing Orders</h4>
        </Link>
        <Link to="/admin/orders/ready" className="menu">
          <Truck size={30} />
          <h4 className="title">Ready for Shipping</h4>
        </Link>
        <Link to="/admin/orders/shipped" className="menu">
          <RailSymbol size={30} />
          <h4 className="title">Shipped Orders</h4>
        </Link>
        <Link to="/admin/orders/delivered" className="menu">
          <MailCheck size={30} />
          <h4 className="title">Delivered Orders</h4>
        </Link>
      </div>
    </div>
  );
};

export default Orders;
