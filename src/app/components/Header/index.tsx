import { Menu, Divider, ListItem, ListItemText, Grid } from "@material-ui/core";
import React from "react";
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

  function toggleNav() {
    document.getElementById("Sidebar")!.classList.toggle("sidenav-toggle");
    document.getElementById("main")!.classList.toggle("main-toggle");
    document
      .getElementById("overlay")!
      .classList.toggle("display-block-toggle");
  }
  return (
    /* Start Header */
    <nav className="navbar navbar-expand navbar-light fixed-top">
      <div className="horizontal-logo-div">
        <img src={Logo} alt="logo" className="horizontal-logo" />
      </div>
      <span>
        <img src={LogoIcon} alt="logo" className="horizontal-logo-mobile" />
      </span>
      <Link className="navbar-brand d-flex w-50 mr-auto" to="#">
        <span id="openNav" className="toggle-nav" onClick={() => toggleNav()}>
          <img src={NavigationButtonIcon} alt="toggle" className="menu-logo" />
        </span>
      </Link>
      <div className="navbar-collapse w-100" id="collapsingNavbar">
        <ul className="navbar-nav ml-auto navbar-user-details">
          <li
            id="notification-icon"
            className="nav-item bell-icon"
            onClick={handleClick}
          >
            <img
              src={NotificationGreyButtonIcon}
              alt="notification"
              className="bell-logo"
            />
          </li>
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
                <img alt="user-01" className="founder-logo" src={User1Icon} />
                <ListItemText>
                  <div className="notification-message">
                    Suzzeth Bungaos tagged you and 18 others in a post
                  </div>
                  <div className="notification-time">Oct 3, 2017 9:00 PM</div>
                </ListItemText>
              </Link>
            </ListItem>
            <Divider component="li" />

            <ListItem alignItems="flex-start" className="notification-link">
              <Link className="notification-dropdown" to="#">
                <img alt="user-02" className="founder-logo" src={User2Icon} />
                <ListItemText>
                  <div className="notification-message">
                    Suzzeth Bungaos tagged you and 18 others in a post
                  </div>
                  <div className="notification-time">Oct 3, 2017 9:00 PM</div>
                </ListItemText>
              </Link>
            </ListItem>
            <Divider component="li" />

            <ListItem alignItems="flex-start" className="notification-link">
              <Link className="notification-dropdown" to="#">
                <img alt="user-03" className="founder-logo" src={User3Icon} />
                <ListItemText>
                  <div className="notification-message">
                    Suzzeth Bungaos tagged you and 18 others in a post
                  </div>
                  <div className="notification-time">Oct 3, 2017 9:00 PM</div>
                </ListItemText>
              </Link>
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start" className="notification-link">
              <Link className="notification-dropdown" to="#">
                <img alt="user-04" className="founder-logo" src={User4Icon} />
                <ListItemText>
                  <div className="notification-message">
                    Suzzeth Bungaos tagged you and 18 others in a post
                  </div>
                  <div className="notification-time">Oct 3, 2017 9:00 PM</div>
                </ListItemText>
              </Link>
            </ListItem>
            <Divider component="li" />

            <div className="view-all">
              Show All
              <span>
                <img
                  src={FormDropdownArrowIcon}
                  alt="dropdown"
                  className="chevron-down-logo"
                />
              </span>
            </div>
          </Menu>
          <li className="nav-item">
            <img
              src={UserProfile}
              alt="user-profile"
              className="user-profile-logo"
            />
          </li>
          <li className="nav-item nav-item-mobile">
            <div className="founder-name"> Hello John</div>
            <span className="founder">
              <img
                src={DropdownIcon}
                alt="dropdown"
                onClick={handleUserClick}
                className="down-arrow"
              />
            </span>
            <Menu
              anchorEl={user}
              keepMounted
              className="user-notification"
              open={Boolean(user)}
              onClose={handleUserClose}
            >
              <Grid container>
                <ListItem alignItems="flex-start" className="notification-link">
                  <Link className="user-dropdown" to="#">
                    <Grid item className="col-2">
                      <img src={UserProfileIcon} alt="user-profile" />
                    </Grid>
                    <Grid item className="col-10">
                      Profile
                    </Grid>
                  </Link>
                </ListItem>
                <ListItem alignItems="flex-start" className="notification-link">
                  <Link className="user-dropdown" to="#">
                    <Grid item className="col-2">
                      <img src={SettingIcon} alt="user-profile-seting" />
                    </Grid>
                    <Grid item className="col-10">
                      Settings
                    </Grid>
                  </Link>
                </ListItem>
                <ListItem alignItems="flex-start" className="notification-link">
                  <Link className="user-dropdown" to="#">
                    <Grid item className="col-2">
                      <img
                        src={ChangePasswordIcon}
                        alt="user-profile-password"
                      />
                    </Grid>
                    <Grid item className="col-10 password">
                      Change Password
                    </Grid>
                  </Link>
                </ListItem>
                <ListItem alignItems="flex-start" className="notification-link">
                  <Link className="user-dropdown" to="/">
                    <Grid item className="col-2">
                      <img src={LogoutIcon} alt="user-profile-logout" />
                    </Grid>
                    <Grid item className="col-10">
                      Logout
                    </Grid>
                  </Link>
                </ListItem>
              </Grid>
            </Menu>
          </li>
        </ul>
      </div>
    </nav>
    /* End Header */

  );
};

export default Header;
