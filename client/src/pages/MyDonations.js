import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import MyDonationCard from "../components/MyDonationCard";

function MyDonations() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please sign in.</div>;
  }

  return user.donations.map((donation) => (
    <MyDonationCard key={donation.id} donation={donation}/>
  ));
}

export default MyDonations;
