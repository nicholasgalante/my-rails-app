import React from "react";
import styled from "styled-components";
import { Button, Wrapper } from "../styles"

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

// const Wrapper = styled.header`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 8px;
// `;

// const Logo = styled.h1`
//   font-family: "Permanent Marker", cursive;
//   font-size: 3rem;
//   color: deeppink;
//   margin: 0;
//   line-height: 1;

//   a {
//     color: inherit;
//     text-decoration: none;
//   }
// `;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default Navbar;
