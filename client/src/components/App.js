import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SignIn from "../pages/SignIn";
import CauseList from "../pages/CauseList";
import DonationsList from "../pages/MyDonationsList";
import { Wrapper } from "../styles";
import NewCause from "../pages/NewCause";
import CauseDetail from "../pages/CauseDetail";
import { UserProvider } from "../context/UserContext";

function App() {
  const [causes, setCauses] = useState([]);

  //get causes
  useEffect(() => {
    fetch("/causes").then((r) => {
      if (r.ok) {
        r.json().then((causes) => setCauses(causes));
      }
    });
  }, []);

  function handleAddNewCause(newCause) {
    // navigate(`/causes/${newCause.id}`);
    setCauses([...causes, newCause]);
  }

  //handle add new donation
  function handleAddNewDonation(newDonation) {
    const causeIndex = causes.findIndex(
      (cause) => cause.id === newDonation.cause_id
    );
    const updatedCauses = [...causes];
    const updatedCause = { ...updatedCauses[causeIndex] };
    updatedCause.donations = [...updatedCause.donations, newDonation];
    updatedCauses[causeIndex] = updatedCause;
    setCauses(updatedCauses);
  }

  return (
    <UserProvider>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="/causes" element={<CauseList causes={causes} />} />
          <Route path="/mydonations" element={<DonationsList />} />
          <Route
            path="/new"
            element={<NewCause handleAddNewCause={handleAddNewCause} />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/causes/:causeId"
            element={
              <CauseDetail
                causes={causes}
                handleAddNewDonation={handleAddNewDonation}
              />
            }
          />
        </Routes>
      </Wrapper>
    </UserProvider>
  );
}

export default App;
