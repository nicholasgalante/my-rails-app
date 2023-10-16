import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import MyDonationCard from "../components/MyDonationCard";

function MyDonationsList() {
  const [user, setUser] = useContext(UserContext);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    if (user != null) {
      setDonations(user.donations);
    }
  }, [user]);

  function onUpdateDonation(updatedDonation) {
    const updatedDonations = donations.map((donation) => {
      return donation.id === updatedDonation.id ? updatedDonation : donation;
    });
    setDonations(updatedDonations);
  }

  function onDeleteDonation(deletedDonation) {
    const updatedDonations = donations.filter((donation) => {
      return donation.id !== deletedDonation.id;
    });
    setDonations(updatedDonations);
  }

  return donations.map((donation) => (
    <MyDonationCard
      donation={donation}
      onUpdateDonation={onUpdateDonation}
      onDeleteDonation={onDeleteDonation}
    />
  ));
}

export default MyDonationsList;
