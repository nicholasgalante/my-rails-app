import React, { useState, useEffect, useContext } from "react";
import { Button, NavWrapper, Logo, RightNav, LeftNav } from "../styles";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const [buttonText, setButtonText] = useState("");
  const [hovered, setHovered] = useState(false);
  const [user, setUser] = useContext(UserContext);

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

  function handleSignOut() {
    fetch("/signout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <NavWrapper>
      <LeftNav>
        {user ? (
          <>
            <Link to="/new">
              <Button>Create a Cause</Button>
            </Link>
            <Link to="/mydonations">
              <Button>{"My Donations"}</Button>
            </Link>
            <Link to="/mycauses">
              <Button>{"My Causes"}</Button>
            </Link>
          </>
        ) : null}
      </LeftNav>
      <Link to="/causes">
        <Logo>ClassAid</Logo>
      </Link>
      <RightNav>
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
      </RightNav>
    </NavWrapper>
  );
}

export default Navbar;
