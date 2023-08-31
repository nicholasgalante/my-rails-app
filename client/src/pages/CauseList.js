import React from "react";
import { useState, useEffect } from "react";
import CauseCard from "../components/CauseCard";

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
      {causes.length > 0
        ? causes.map((cause) => <CauseCard key={cause.id} cause={cause}/>)
        : "No causes found! Sign up to create one."}
    </>
  );
}

export default CauseList;
