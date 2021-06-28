import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <div>
      <div className="login-image">
        <img src="images/hops.png" alt="Image of hops" />
      </div>
      <div className="login-info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra lacus
          ut ex molestie blandit. Etiam et turpis sit amet risus mollis
          interdum. Suspendisse et justo vitae metus bibendum fringilla sed
          sed justo. Aliquam sollicitudin dapibus lectus, vitae consequat odio
          elementum eget. Praesent efficitur eros vitae nunc interdum, eu
          interdum justo facilisis. Sed pulvinar nulla ac dignissim efficitur.
          Quisque eget eros metus. Vestibulum bibendum fringilla nibh a
          luctus. Duis a sapien metus.
        </p>
      </div>
      <form className="formPanel" onSubmit={login}>
        <h2>Login</h2>
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
          <input className="btn" type="submit" name="submit" value="Log In" />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
