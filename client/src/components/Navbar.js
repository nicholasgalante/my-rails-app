import React, { useState, useEffect, useContext } from "react";
import { Button, NavWrapper, Logo, Nav } from "../styles";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const [buttonText, setButtonText] = useState("");
  const [hovered, setHovered] = useState(false);
  const [user, setUser] = useContext(UserContext)


  useEffect(() => {
    if (user && user.username) {
      setButtonText(user.username);
    } 
  }, [user]);

  const handleHover = () => {
    setHovered(!hovered);
    setButtonText("Sign Out");
  };

  const handleUnHover = () => {
    setHovered(false);
    setButtonText(user.username);
  };

   //sign out
   function handleSignOut() {
    fetch("/signout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <NavWrapper>
      <Link to="/causes">
        <Logo>ClassAid</Logo>
      </Link>
      <Nav>
        {user ? (
          <Link to="/new">
            <Button>Create a Cause</Button>
          </Link>
        ) : null}
        {user ? (
          <Link to="/causes">
            <Button
              onClick={handleSignOut}
              onMouseEnter={handleHover}
              onMouseLeave={handleUnHover}
            >
              {buttonText}
            </Button>
          </Link>
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

// import React, { useState } from 'react';
// import './Button.css'; // Import your CSS file for styling

// const MyButton = () => {
//   const [buttonText, setButtonText] = useState('Default Text');
//   const [hovered, setHovered] = useState(false);

//   const handleHover = () => {
//     setHovered(!hovered);
//     setButtonText(hovered ? 'Default Text' : 'New Text On Hover');
//   };

//   return (
//     <button className="custom-button" onMouseEnter={handleHover} onMouseLeave={handleHover}>
//       {buttonText}
//     </button>
//   );
// };

// export default MyButton;
