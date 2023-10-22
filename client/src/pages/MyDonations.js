import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import MyDonationCard from "../components/MyDonationCard";
import { Wrapper } from "../styles";

function MyDonations() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please sign in.</div>;
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
