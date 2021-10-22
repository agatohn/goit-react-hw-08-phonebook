// import React from "react";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../redux/authorization";
import PublicRoute from "../pages/PublicRoute";
import PrivateRoute from "../pages/PrivateRoute";
import { Switch } from "react-router";
import Header from "./header/Header";

const HomePage = lazy(
  () => import("../pages/homePage/HomePage") /*webpackChunkName: 'HomePage' */
);
const RegPage = lazy(
  () => import("../pages/regPage/RegPage") /*webpackChunkName: 'RegPage' */
);
const LoginPage = lazy(
  () =>
    import("../pages/loginPage/LoginPage") /*webpackChunkName: 'LoginPage' */
);
const PhonebookPage = lazy(() =>
  import("../pages/phonebookPage/PhonebookPage")
);

export default function App() {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingUser && (
      <>
        <Header />
        <Switch>
          <Suspense fallback={<span>... smth loading</span>}>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <RegPage />
            </PublicRoute>

            <PublicRoute path="/login" restricted redirectTo="/phonebook">
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path="/phonebook" restricted redirectTo="/login">
              <PhonebookPage />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </>
    )
  );
}
