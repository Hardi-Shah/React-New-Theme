import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import InnerPage from "./pages/InnerPage";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: `"Comfortaa", sans-serif`,
      fontSize: 14,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/innerpage" component={InnerPage} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
