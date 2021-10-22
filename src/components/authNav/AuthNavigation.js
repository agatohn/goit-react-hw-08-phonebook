import { NavLink } from "react-router-dom";
import style from "./AuthNavigation.module.css";

const AuthNavigation = () => {
  return (
    <>
      <NavLink
        className={style.nav}
        activeClassName={style.activeNav}
        to="/register"
        exact
      >
        register
      </NavLink>
      <NavLink
        className={style.nav}
        activeClassName={style.activeNav}
        to="/login"
        exact
      >
        login
      </NavLink>
    </>
  );
};

export default AuthNavigation;
