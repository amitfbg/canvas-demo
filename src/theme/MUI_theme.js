import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  //   props: {
  //     MuiAppBar: {
  //       style: {
  //         zIndex: 2000,
  //       },
  //     },
  //   },
  //   zIndex: {
  //     appBar: 2000,
  //   },
  overrides: {
    MuiStepIcon: {
      root: {
        width: 25,
        height: 25,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      active: {
        backgroundImage:
          "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
      },
      completed: {
        backgroundColor: "rgb(242,113,33)",
        color: "rgb(242,113,33)",
      },
    },
  },
});

export default theme;
