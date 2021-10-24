import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../redux/authorization";
import style from "./Menu.module.css";

const Menu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const logout = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <div className={style.userWrapper}>
      <span className={style.userName}>Log in as: {userName}</span>
      <button className={style.logBtn} type="button" onClick={logout}>
        logout
      </button>
    </div>
  );
};

export default Menu;
