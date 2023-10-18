import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SignIn from "../pages/SignIn";
import CauseList from "../pages/CauseList";
import MyCauses from "../pages/MyCauses";
import DonationsList from "../pages/MyDonationsList";
import { Wrapper } from "../styles";
import NewCause from "../pages/NewCause";
import CauseDetail from "../pages/CauseDetail";
import { UserProvider } from "../context/UserContext";
import { CauseProvider } from "../context/CauseContext";

function App() {

  function handleAddNewCause(newCause) {
    // setCauses([...causes, newCause]);
  }

  return (
    <UserProvider>
      <CauseProvider>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/causes" element={<CauseList />} />
            <Route path="/mydonations" element={<DonationsList />} />
            <Route path="/mycauses" element={<MyCauses />} />
            <Route
              path="/new"
              element={<NewCause handleAddNewCause={handleAddNewCause} />}
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/causes/:causeId" element={<CauseDetail />} />
          </Routes>
        </Wrapper>
      </CauseProvider>
    </UserProvider>
  );
}

export default App;
