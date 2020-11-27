import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
  
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer />
        </div>
      </Router>
    </>
  )
}
