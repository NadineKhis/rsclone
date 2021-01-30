import React from "react";
import * as ROUTES from './constants/routes'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Browse from './pages/browse'
import Signin from './pages/signin'
import Signup from "./pages/signup";

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
    </BrowserRouter>

  );
}
