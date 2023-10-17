import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import MyDonationCard from "../components/MyDonationCard";

function MyDonationsList() {
  const [user, setUser] = useContext(UserContext);

  if (!user) {
    return <div>Please sign in.</div>;
  }

  function onUpdateDonation(updatedDonation) {
    const updatedDonations = user.donations.map((donation) => {
      return donation.id === updatedDonation.id ? updatedDonation : donation;
    });
    setUser((prevUser) => ({
      ...prevUser,
      donations: updatedDonations,
    }));
  }

  function onDeleteDonation(deletedDonation) {
    const updatedDonations = user.donations.filter((donation) => {
      return donation.id !== deletedDonation.id;
    });
    setUser((prevUser) => ({
      ...prevUser,
      donations: updatedDonations,
    }));
  }

  return user.donations.map((donation) => (
    <MyDonationCard
      donation={donation}
      onUpdateDonation={onUpdateDonation}
      onDeleteDonation={onDeleteDonation}
    />
  ));
}

export default MyDonationsList;
