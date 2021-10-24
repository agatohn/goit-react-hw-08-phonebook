import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/authorization";
import AuthNavigation from "../authNav/AuthNavigation";
import Navigation from "../navigation/Navigation";
import Menu from "../menu/Menu";
// import style from "./Header.module.css";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
// import Grid from "@mui/material/Grid";
// import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
// import GlobalStyles from "@mui/material/GlobalStyles";
// import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Toolbar sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
            <Navigation /> {isLoggedIn ? <Menu /> : <AuthNavigation />}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
