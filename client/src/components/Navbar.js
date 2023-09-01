import React from "react";
import { Button, Wrapper, Logo, Nav } from "../styles"

function Navbar({ user }) {
  return (
    <Wrapper>
      <Logo>App Name</Logo>
      <Nav>
         {user ? <Button>Create a Cause</Button> : null }
         {user ? <Button>Sign out</Button> : <Button>Sign in</Button>}
      </Nav>
    </Wrapper>
  );
}

export default Navbar;
