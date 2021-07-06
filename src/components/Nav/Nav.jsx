import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/dashboard';
    loginLinkData.text = 'Dashboard';
  }

  return (
    <div className="nav">
      <Link to="/dashboard">
        <h2 className="nav-title">MN Brew</h2>
      </Link>
      <div>
        <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>

        {user.id && (
          <>
            <Link className="navLink" to="/supplies">
              Supplies
            </Link>
            <Link className="navLink" to="/recipes">
              Recipes
            </Link>
            <Link className="navLink" to="/add">
              Add Recipe
            </Link>
            <Link className="navLink" to="/created">
              Created Brew
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
