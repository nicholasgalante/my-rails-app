import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import MyDonationCard from "../components/MyDonationCard";

function MyDonationsList() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please sign in.</div>;
  }

  return user.donations.map((donation) => (
    <MyDonationCard donation={donation}/>
  ));
}

export default MyDonationsList;
