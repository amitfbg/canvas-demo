import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import theme from "./theme/MUI_theme";
import Header from "./components/header/Header";
import ReleaseContainer from "./components/release-container/ReleaseContainer";
import LeftNavBar from "./components/navbar/LeftNavBar";

const useStyle = makeStyles({
  wrapper: {
    display: "flex",
  },
});

function App() {
  const classes = useStyle();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="/overview/release" />
            </Route>
            <Route path="*">
              <div className={classes.wrapper}>
                <LeftNavBar />
                <ReleaseContainer />
              </div>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
