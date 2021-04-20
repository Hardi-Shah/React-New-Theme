import { FormGroup, Grid, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/images";
import Footer from "../../components/Footer";

const Login = () => {
  return (
    <main className="main-content">
      <Grid container>
        <Grid item xl={5} md={6}  className="login-left">
          <div className="login-header">
            <Link to="#">
              <img src={Logo} alt="" className="img-responsive logo" />
            </Link>
          </div>

          <div className="login-form">
            <h3 className="login-text">Login</h3>

            <FormGroup>
              <TextField id="uname" label="Username" />
            </FormGroup>
            <FormGroup>
              <TextField id="Password" type="password" label="Password" />
            </FormGroup>

            <Grid container>
              <Grid item xs={12} sm={6}>
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  className="btn-login"
                  disableRipple={true}
                >
                  Login
                </Button>{" "}
              </Grid>

              <Grid item xs={12} sm={6} className="forgot-password">
                <Link to="#">Forgot Password?</Link>
              </Grid>
            </Grid>
            <div className="signup-account">
              <span className="account">Don't have an account?</span>
              <span>
                <Link to="#" className="signup">
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
          <Footer />
        </Grid>

        <Grid item xl={7} md={6} >
          <div className="login-right"></div>
        </Grid>
      </Grid>
    </main>
  );
};

export default Login;
