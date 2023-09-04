import React from "react";
import { Button, NavWrapper, Logo, Nav } from "../styles"

function Navbar({ user, handleSignOut }) {
  return (
    <NavWrapper>
      <Logo>App Name</Logo>
      <Nav>
         {user ? <Button>Create a Cause</Button> : null }
         {user ? <Button>{user.username}</Button> : null }
         {user ? <Button onClick={handleSignOut}>Sign out</Button> : <Button>Sign in</Button>}
      </Nav>
    </NavWrapper>
  );
}

export default Navbar;
