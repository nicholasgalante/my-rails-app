import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SignIn from "../pages/SignIn";
import CauseList from "../pages/CauseList";
import MyDonations from "../pages/MyDonations";
import { Wrapper } from "../styles";
import NewCause from "../pages/NewCause";
import CauseDetail from "../pages/CauseDetail";
import { UserProvider } from "../context/UserContext";
import { CauseProvider } from "../context/CauseContext";

function App() {
  return (
    <UserProvider>
      <CauseProvider>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/causes" element={<CauseList />} />
            <Route path="/mydonations" element={<MyDonations />} />
            <Route path="/new" element={<NewCause />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/causes/:causeId" element={<CauseDetail />} />
          </Routes>
        </Wrapper>
      </CauseProvider>
    </UserProvider>
  );
}

export default App;
