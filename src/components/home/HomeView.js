import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/authorization";
import style from "./HomeView.module.css";

export default function HomePage() {
  const userName = useSelector(authSelectors.getUserName);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? (
    <h2 className={style.title}> Wellcome {userName}</h2>
  ) : (
    <h2 className={style.title}>Please log in or sign up</h2>
  );
}
