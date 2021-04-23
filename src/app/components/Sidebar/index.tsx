import { Link } from "react-router-dom";
import {
  AccountingIcon,
  AdminIcon,
  DashboardIcon,
  HelpIcon,
  MaintenanceIcon,
  ReportIcon,
  ShippingIcon,
} from "../../assets/images";

const Sidebar = () => {
  return (
      /* Start Sidebar */
    <div id="Sidebar" className="sidenav sidenav-toggle">
      <div className="sidebar-list">
        <Link to="/dashboard">
          <div className="row">
            <div className="col-2">
              <img
                src={DashboardIcon}
                alt="dashboard"
                className="sidebar-logo"
              />
            </div>
            <div className="col-10">Dashboard</div>
          </div>
        </Link>
        <Link to="#">
          <div className="row">
            <div className="col-2">
              <img src={AdminIcon} alt="admin" className="sidebar-logo" />
            </div>
            <div className="col-10">Admin</div>
          </div>
        </Link>
        <Link to="#">
          <div className="row">
            <div className="col-2">
              <img
                src={MaintenanceIcon}
                alt="maintenance"
                className="sidebar-logo"
              />
            </div>
            <div className="col-10">Maintanance</div>
          </div>
        </Link>
        <Link to="#">
          <div className="row">
            <div className="col-2">
              <img
                src={AccountingIcon}
                alt="accounting"
                className="sidebar-logo"
              />
            </div>
            <div className="col-10">Accounting</div>
          </div>
        </Link>
        <Link to="#">
          <div className="row">
            <div className="col-2">
              <img src={ShippingIcon} alt="shipping" className="sidebar-logo" />
            </div>
            <div className="col-10">Shipping</div>
          </div>
        </Link>
        <Link to="#">
          <div className="row">
            <div className="col-2">
              <img src={HelpIcon} alt="help" className="sidebar-logo" />
            </div>
            <div className="col-10">Help</div>
          </div>
        </Link>
        <Link to="#">
          <div className="row">
            <div className="col-2">
              <img src={ReportIcon} alt="report" className="sidebar-logo" />
            </div>
            <div className="col-10">Report</div>
          </div>
        </Link>
      </div>
    </div>
     /* End Sidebar */
  );
};

export default Sidebar;
