import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./routes/PrivateRoute";

import Home from "./pages/Home";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/auth/password/forgot" component={ForgotPassword} />
          <Route path="/auth/password/reset" component={ResetPassword} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
