import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Auth from "./routes/Auth";
import Home from "./routes/Home";
import Profile from "./routes/Profile";

interface AppRouterProps {
  isLoggedIn: boolean;
  userInfo: {
    uid: string;
  };
}
const AppRouter: React.FC<AppRouterProps> = ({ isLoggedIn, userInfo }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userInfo={userInfo} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};
export default AppRouter;
