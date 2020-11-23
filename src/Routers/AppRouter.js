import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
  
// Components
import { LoginScreen } from '../components/login/LoginScreen';
import { HomeScreen } from '../components/home/HomeScreen';

export const AppRouter = () => {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={ LoginScreen }/>
            <Route exact path="/" component={ HomeScreen }/>
          </Switch>
        </div>
      </Router>
    </>
  )
}
