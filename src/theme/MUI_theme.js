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
        color:"#e20074",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
      },
      completed: {
        backgroundColor: "#e20074",
      },
    },
  },
});

export default theme;
