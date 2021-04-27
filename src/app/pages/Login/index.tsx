import { FormGroup, Grid, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/images";
import { Helmet } from "react-helmet";

const Login = () => {
  return (
    /* Start Main */
    <main className="main-content">
      <Helmet>
        <title>Login | Theme</title>
      </Helmet>
      <div className="login-container">
        <div className="login-left">
          <div className="login-header">
            <Link to="#" title="logo">
              <img src={Logo} alt="Logo"/>
            </Link>
          </div>

          <div className="login-form">
            <h3>Login</h3>

            <FormGroup>
              <TextField id="Username" label="Username" />
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
                  component={Link}
                  to='/dashboard'
                >
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm={6} className="forgot-password">
                <Link to="#">Forgot Password?</Link>
              </Grid>
            </Grid>
            <div className="signup-account">
              Don't have an account?
              <Link to="#" title="sign up">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="login-footer">
            &copy; 2021 Company.All rights reserved.
          </div>
        </div>
      </div>
    </main>
    /* End Main */
  );
};

export default Login;
