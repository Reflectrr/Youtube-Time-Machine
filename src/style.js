import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
export const customTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#4c4c4c",
      main: "#202020",
      dark: "#161616",
      contrastText: "#fff",
    },
    secondary: {
      light: "#993333",
      main: "#800000",
      dark: "#590000",
      contrastText: "#000",
    },
    background: {
      default: "#202020",
    },
  },
});
export const useStyles = makeStyles((theme) => ({
  swiperButtonLeft: {
    position: "absolute",
    color: "#fff",
    fontSize: "6em",
    background: "rgb(0, 0, 0)",
    width: "80px",

    // &:nth-of-type(1) {
    //   top:0; bottom:0; left:0;
    //   background: linear-gradient(-90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
    // }
    // &:nth-of-type(2) {
    //   top:0; bottom:0; right: 0;
    //   background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
    // }
  },
  paddingRight: {
    paddingRight: theme.spacing(2),
  },
  buttonLink: {
    color: "#FFF",
    textDecoration: "none",
  },
  whiteText: {
    color: "#FFF",
    textDecoration: "none",
  },
  flexGrow: {
    flexGrow: "1",
  },
  navbar: {
    height: "100px",
  },
  // root: {
  //   display: "flex",
  // },
  iframe: {
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
    maxWidth: "960px",
    maxHeight: "540px",
  },
  iframeContainer: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    paddingTop: "56.25%",
    overflow: "hidden",
  },
  aspectRatio: {
    paddingTop: "56.25%",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  toolbarButtons: {
    color: "white",
    fontSize: "18px",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  bigPadding: {
    padding: theme.spacing(3),
  },
  videoListItem: {
    padding: "10px 0",
    fontFamily: "IBM Plex Sans, sans serif",
    fontSize: "16px",
    listStyleType: "none",
    "&::before": {
      content: '"-"',
    },
  },
  centeredText: {
    textAlign: "center",
  },
}));
