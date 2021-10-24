import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/authorization/index";
// import style from "./RegForm.module.css";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Regform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };
  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            onChange={handleChange}
            margin="normal"
            name="name"
            required
            fullWidth
            id="name"
            label="Name"
            autoFocus
          />

          <TextField
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />

          <TextField
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>

    // <div className={style.formWrapper}>
    //   <h2 className={style.formName}>Registration form</h2>
    //   <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
    //     <label className={style.formLabel}>
    //       Name
    //       <input
    //         className={style.formInput}
    //         type="text"
    //         name="name"
    //         value={name}
    //         onChange={handleChange}
    //       />
    //     </label>

    //     <label className={style.formLabel}>
    //       Email
    //       <input
    //         className={style.formInput}
    //         type="email"
    //         name="email"
    //         value={email}
    //         onChange={handleChange}
    //       />
    //     </label>

    //     <label className={style.formLabel}>
    //       Password
    //       <input
    //         className={style.formInput}
    //         type="password"
    //         name="password"
    //         value={password}
    //         onChange={handleChange}
    //       />
    //     </label>

    //     <button className={style.formBtn} type="submit">
    //       Sign up
    //     </button>
    //   </form>
    // </div>
  );
}
