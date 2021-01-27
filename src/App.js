// import './App.css';
import { makeStyles } from "@material-ui/core";
import Header from "./components/header/Header";
import ReleaseContainer from "./components/maincontainer/ReleaseContainer";
import LeftNavBar from "./components/navbar/Navigator";

const useStyle = makeStyles({
  wrapper: {
    display: "flex",
  },
});

function App() {
  const classes = useStyle();
  return (
    <>
      <Header />
      <div className={classes.wrapper}>
        <LeftNavBar />
        <ReleaseContainer />
      </div>
    </>
  );
}

export default App;
