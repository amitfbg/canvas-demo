// import './App.css';
import { makeStyles, ThemeProvider } from "@material-ui/core";
import theme from "./theme/MUI_theme";

import Header from "./components/header/Header";
import ReleaseContainer from "./components/maincontainer/ReleaseContainer";
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
        <Header />
        <div className={classes.wrapper}>
          <LeftNavBar />
          <ReleaseContainer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
