import React from "react";
import { Button, NavWrapper, Logo, Nav } from "../styles";
import { Link } from "react-router-dom";

function Navbar({ user, handleSignOut }) {
  return (
    <NavWrapper>
      <Link to="/">
        <Logo>ClassAid</Logo>
      </Link>
      <Nav>
        {user ? (
          <Link to="/new">
            <Button>Create a Cause</Button>
          </Link>
        ) : null}
        {user ? <Button>{user.username}</Button> : null}
        {user ? (
          <Link to="/"><Button onClick={handleSignOut}>Sign out</Button></Link>
        ) : (
          <Link to="/signin">
            <Button>Sign in</Button>
          </Link>
        )}
      </Nav>
    </NavWrapper>
  );
}

export default Navbar;
