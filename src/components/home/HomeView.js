import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/authorization";
// import style from "./HomeView.module.css";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import img from "../../img/Phonebook.png";

export default function HomePage() {
  const userName = useSelector(authSelectors.getUserName);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <img src={img} alt={"phonebook"} width="400" />
      <Typography
        align="center"
        component="h2"
        variant="h5"
        color="primary"
        gutterBottom
      >
        Wellcome {userName}
      </Typography>
    </Container>
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <img src={img} alt={"phonebook"} width="370" />
      <Typography
        align="center"
        component="h2"
        variant="h5"
        color="primary"
        gutterBottom
      >
        Please log in or sign up
      </Typography>
    </Container>
  );
}
