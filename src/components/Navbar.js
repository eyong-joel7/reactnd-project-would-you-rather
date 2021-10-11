import React from "react";
import { connect } from "react-redux";
import { signOut } from "../actions/authedUser";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  const { user } = props;
  const handleSignOut = () => {
    props.dispatch(signOut());
  };
  return (
    <div className = 'nav-wrapper'>
 <nav className="nav">
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeClassName="active">
            Leader Board
          </NavLink>
        </li>
      </ul>
      {user ? (
        <ul className="user-profile">
          <li>
            <h3 className = 'text'>{`Hello, ${user.name}`}</h3>
          </li>

          <li>
            <img
              className="avatar"
              src={user.avatarURL}
              alt={user.name}
            />
          </li>
          <li>
            <h3 className = 'text' onClick={() => handleSignOut()}>Logout</h3>
          </li>
        </ul>
      ):(
        <ul>
           <li>
          <NavLink to="/signup" activeClassName="active">
            Sign Up
          </NavLink>
        </li>
          </ul>
      )
      }
    </nav>
    </div>
   
  );
}


export default connect()(NavBar);
