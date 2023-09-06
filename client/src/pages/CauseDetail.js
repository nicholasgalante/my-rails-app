import React from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../styles";
import DonationForm from "../components/DonationForm";
import DonationCard from "../components/DonationCard";

function CauseDetail({ causes, user }) {
  let { causeId } = useParams();

  const selectedCause = causes.find((cause) => cause.id === parseInt(causeId));

  console.log("SELECTED CAUSE: ", selectedCause);

  if (!selectedCause) {
    return <div>Cause not found</div>;
  }

  const { title, school_name, city, state, description, imgURL, goal } =
    selectedCause;

  const donations = selectedCause.donations.map(donation => console.log(donation)) 

  console.log("DONATIONS: ", donations)

  return (
    <Wrapper>
      {title}
      {school_name}
      <DonationForm user={user} selectedCause={selectedCause}/>
      {selectedCause.donations.map(donation => <DonationCard key={donation.id} donation={donation}/>)}
    </Wrapper>
  );
}

export default CauseDetail;