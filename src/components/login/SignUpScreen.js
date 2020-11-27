import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { toast } from 'react-toastify';

// Authentication
import { auth } from '../../firebase-config';

const SignUp = ({ history }) => {

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      await auth
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      toast.error('hay un error 👽',{
        hideProgressBar: false,
      });
      console.log(error);
    }
  }, [history]);

  return (
    <div className="col-md-6">
      <h1>Sign up</h1>
      <form className="card card-body" onSubmit={ handleSignUp }>
        <div className="form-group input-group">
          <label>
            Email
            <input 
              name="email" 
              type="email" 
              placeholder="Email" 
              className="form-control" 
            />
          </label>
        </div>
        <div className="form-group input-group">
          <label>
            Password
            <input 
              name="password" 
              type="password" 
              placeholder="Password" 
              className="form-control" 
            />
          </label>
        </div>
          <button className="btn btn-primary" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
