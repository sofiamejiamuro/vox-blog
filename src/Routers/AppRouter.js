import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
  
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from '../Auth';
import PrivateRoute from '../Routers/PrivateRoute';

// Components
import LoginScreen from '../components/login/LoginScreen';
import SignUpScreen  from '../components/login/SignUpScreen';
import { HomeScreen }  from '../components/home/HomeScreen';

export const AppRouter = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <div>
      
            <PrivateRoute exact path="/" component={ HomeScreen }/>
            <Route exact path="/singup" component={ SignUpScreen }/>
            <Route exact path="/login" component={ LoginScreen }/>
           
            <ToastContainer />
          </div>
        </Router>
      </AuthProvider>
    </>
  )
}
