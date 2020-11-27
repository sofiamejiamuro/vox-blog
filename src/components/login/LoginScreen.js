import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";

// Authentication
import { auth } from '../../firebase-config';
import { AuthContext } from "../../Auth";

const LoginScreen = ({ history }) => {

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await auth
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="col-md-6">
      <h1>Log in</h1>
      <form className="card card-body" onSubmit={handleLogin}>

          <div className="form-group input-group">
            <label>
              Email
              <input 
                className="form-control" 
                name="email" 
                type="email" 
                placeholder="Email" 
              />
            </label>
          </div>
          <div className="form-group input-group">
            <label>
              Password
              <input 
                className="form-control" 
                name="password" 
                type="password" 
                placeholder="Password"
              />
            </label>
          </div>
          <button className="btn btn-primary" type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(LoginScreen);
