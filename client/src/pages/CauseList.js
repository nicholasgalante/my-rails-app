import React from "react";
import { useState, useEffect } from "react";
import CauseCard from "../components/CauseCard";
// import { Link } from "react-router-dom";
import { Button } from "../styles/Button";

function CauseList() {
  const [causes, setCauses] = useState([]);

  useEffect(() => {
    fetch("/causes")
      .then((r) => r.json())
      .then(setCauses);
  }, []);

  console.log(causes);

  return (
    <>
      {causes.length > 0 ? (
        causes.map((cause) => <CauseCard key={cause.id} cause={cause} />)
      ) : (
        <>
          <h2>No Causes Found. Sign in to create one!</h2>
          <Button>
            Sign In
          </Button>
        </>
      )}
    </>
  );
}

export default CauseList;
