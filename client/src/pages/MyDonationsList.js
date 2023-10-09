import React, { useState, useEffect } from "react";
import MyDonationCard from "../components/MyDonationCard";

function MyDonationsList() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("/mydonations").then((r) => {
      if (r.ok) {
        r.json().then((donations) => setDonations(donations));
      }
    });
  }, []);

  function onUpdateDonation(updatedDonation) {
    const updatedDonations = donations.map((donation) => {
      return donation.id == updatedDonation.id ? updatedDonation : donation;
    });
    setDonations(updatedDonations);
  }

  function onDeleteDonation(deletedDonation){
    const updatedDonations = donations.filter((donation) => {
      return donation.id !== deletedDonation.id;
    })
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
