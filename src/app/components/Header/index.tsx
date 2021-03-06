import {
  Menu,
  Divider,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";
import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Logo,
  LogoIcon,
  UserProfileIcon,
  User1Icon,
  User2Icon,
  User3Icon,
  User4Icon,
  LogoutIcon,
  ChangePasswordIcon,
  SettingIcon,
  FormDropdownArrowIcon,
  UserProfile,
  DropdownIcon,
  NavigationButtonIcon,
  NotificationGreyButtonIcon,
} from "../../assets/images";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [user, setUser] = React.useState<null | HTMLElement>(null);

  const handleUserClick = (event: React.MouseEvent<HTMLElement>) => {
    setUser(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUserClose = () => {
    setUser(null);
  };
  const toggleNav = () => {
    document.body.classList.toggle("toggle-nav");
  };

  return (
    /* Start Header */
    <Navbar className="navbar navbar-expand-md fixed-top">
      <div className="horizontal-logo">
        <img src={Logo} alt="logo" />
      </div>
      <img
        src={LogoIcon}
        alt="logo-mobile"
        className="horizontal-logo-mobile"
      />

      <div className="navbar-brand d-flex mr-auto">
        <Button
          id="openNav"
          className="toggle-nav"
          title="Menu"
          onClick={() => toggleNav()}
        >
          <img src={NavigationButtonIcon} alt="toggle" className="menu-logo" />
        </Button>
      </div>
      <Button
        id="notification-icon"
        className="bell-icon"
        onClick={handleClick}
        title="Notification"
      >
        <img src={NotificationGreyButtonIcon} alt="notification" />
      </Button>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        className="notifications"
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="notification-heading">Notifications</div>

        <ListItem alignItems="flex-start" className="notification-link">
          <Link className="notification-dropdown" to="#">
            <img alt="" className="user-icon" src={User1Icon} />
            <ListItemText className="notification-content">
              <h3>Suzzeth Bungaos tagged you and 18 others in a post</h3>
              <span>Oct 3, 2017 9:00 PM</span>
            </ListItemText>
          </Link>
        </ListItem>
        <Divider component="li" />

        <ListItem alignItems="flex-start" className="notification-link">
          <Link className="notification-dropdown" to="#">
            <img alt="" className="user-icon" src={User2Icon} />
            <ListItemText className="notification-content">
              <h3>Suzzeth Bungaos tagged you and 18 others in a post</h3>
              <span>Oct 3, 2017 9:00 PM</span>
            </ListItemText>
          </Link>
        </ListItem>
        <Divider component="li" />

        <ListItem alignItems="flex-start" className="notification-link">
          <Link className="notification-dropdown" to="#">
            <img alt="" className="user-icon" src={User3Icon} />
            <ListItemText className="notification-content">
              <h3>Suzzeth Bungaos tagged you and 18 others in a post</h3>
              <span>Oct 3, 2017 9:00 PM</span>
            </ListItemText>
          </Link>
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start" className="notification-link">
          <Link className="notification-dropdown" to="#">
            <img alt="" className="user-icon" src={User4Icon} />
            <ListItemText className="notification-content">
              <h3>Suzzeth Bungaos tagged you and 18 others in a post</h3>
              <span>Oct 3, 2017 9:00 PM</span>
            </ListItemText>
          </Link>
        </ListItem>
        <Divider component="li" />

        <div className="view-all">
          <Button className="show-btn" title="Show All">
            Show All
            <img src={FormDropdownArrowIcon} alt="dropdown-icon" />
          </Button>
        </div>
      </Menu>
      <Button className="user-dropdown" onClick={handleUserClick}>
        <div className="user-image">
          <img
            src={UserProfile}
            alt="user-profile"
            className="user-profile-logo"
          />
        </div>
        <div className="founder-name nav-item-mobile">
          Hello John
          <img src={DropdownIcon} alt="dropdown" onClick={handleUserClick} />
        </div>
      </Button>

      <Menu
        anchorEl={user}
        keepMounted
        className="user-notification"
        open={Boolean(user)}
        onClose={handleUserClose}
      >
        <ListItem alignItems="flex-start" className="notification-link">
          <Link className="profile-name" to="#">
            <img src={UserProfileIcon} alt="user-profile" />
            <span>Profile</span>
          </Link>
        </ListItem>
        <ListItem alignItems="flex-start" className="notification-link">
          <Link className="profile-name" to="#">
            <img src={SettingIcon} alt="user-profile-seting" />
            <span>Settings</span>
          </Link>
        </ListItem>
        <ListItem alignItems="flex-start" className="notification-link">
          <Link className="profile-name" to="#">
            <img src={ChangePasswordIcon} alt="user-profile-password" />
            <span>Change Password</span>
          </Link>
        </ListItem>
        <ListItem alignItems="flex-start" className="notification-link">
          <Link className="profile-name" to="/">
            <img src={LogoutIcon} alt="user-profile-logout" />
            <span>Logout</span>
          </Link>
        </ListItem>
      </Menu>
    </Navbar>
    /* End Header */
  );
};

export default Header;
