import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import MyDonationCard from "../components/MyDonationCard";
import { Wrapper } from "../styles";

function MyDonations() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please sign in to view your donations!</div>;
  } else if (user.donations.length == 0) {
    return <div>Visit the causes page to make your first donation!</div>;
  }

  return (
    <Wrapper>
      {user.donations.map((donation) => (
        <MyDonationCard key={donation.id} donation={donation} />
      ))}
    </Wrapper>
  );
}

export default MyDonations;
