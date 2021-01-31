import React from "react";
import * as ROUTES from './constants/routes'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Browse from './pages/browse'
import Signin from './pages/signin'
import Signup from "./pages/signup";
import firebase from 'firebase/app'
import { firebaseConfig } from './constants/firebaseConfig'

export default function App() {
  firebase.initializeApp(firebaseConfig)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.BROWSE} component={Browse} />
        <Route path={ROUTES.SIGN_IN} component={Signin} />
        <Route path={ROUTES.SIGN_UP} component={Signup} />
      </Switch>
    </BrowserRouter>

  );
}
