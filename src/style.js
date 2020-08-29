import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  navbar: {
    height: "100px",
  },
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  iframe: {
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
    maxWidth: "560px",
    maxHeight: "315px",
  },
  iframeContainer: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    paddingBottom: "56.25%",
    paddingTop: "35px",
    height: "0",
    overflow: "hidden",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
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
}));

export default useStyles;
