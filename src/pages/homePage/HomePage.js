import HomeView from "../../components/home/HomeView";

export default function homePage() {
  return (
    <>
      <HomeView />
    </>
  );
}

// import { useSelector } from "react-redux";
// import { authSelectors } from "../../redux/authorization";

// export default function HomePage() {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

//   return isLoggedIn ? <h2> Wellcome </h2> : <h2>Please log in or sign up</h2>;
// }
