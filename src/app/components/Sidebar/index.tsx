import { NavLink } from "react-router-dom";
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
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/dashboard">
              <img src={DashboardIcon} alt="dashboard" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/">
              <img src={AdminIcon} alt="admin" />
              <span>Admin</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/innerpage">
              <img src={MaintenanceIcon} alt="maintenance" />
              <span>Maintanance</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/">
              <img src={AccountingIcon} alt="accounting" />
              <span>Accounting</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/">
              <img src={ShippingIcon} alt="shipping" />
              <span>Shipping</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/">
              <img src={HelpIcon} alt="help" />
              <span>Help</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/">
              <img src={ReportIcon} alt="report" />
              <span>Report</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    /* End Sidebar */
  );
};

export default Sidebar;
