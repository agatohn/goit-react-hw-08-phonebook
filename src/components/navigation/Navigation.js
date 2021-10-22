import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../redux/authorization";
import style from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        className={style.nav}
        activeClassName={style.activeNav}
        to="/"
        exact
      >
        home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={style.nav}
          activeClassName={style.activeNav}
          to="/phonebook"
          exact
        >
          phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
