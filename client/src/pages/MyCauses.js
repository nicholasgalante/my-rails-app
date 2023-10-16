import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import CauseCard from "../components/CauseCard";

function MyCauses() {
   const [user, setUser] = useContext(UserContext);
   const [causes, setCauses] = useState([]);

   useEffect(() => {
      if (user != null) {
        setCauses(user.causes);
      }
    }, [user]);

  return causes.map((cause) => {
   <CauseCard cause={cause}/>
  })
}

export default MyCauses;
