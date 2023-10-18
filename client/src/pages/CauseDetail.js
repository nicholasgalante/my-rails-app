import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Wrapper, Image } from "../styles";
import DonationForm from "../components/DonationForm";
import DonationCard from "../components/DonationCard";
import { CauseContext } from "../context/CauseContext";

function CauseDetail() {
  const { causes } = useContext(CauseContext);
  let { causeId } = useParams();

  if (!causes) {
    return <div>Cause not found</div>;
  }

  const selectedCause = causes.find((cause) => cause.id === parseInt(causeId));

  if (!selectedCause) {
    return <div>Cause not found</div>;
  }

  const { title, school_name, city, state, description, image_url, goal } =
    selectedCause;

  return (
    <Wrapper>
      <h1>{title}</h1>
      <h3>
        {school_name}, {city}, {state}
      </h3>
      {description}
      <h1>Goal Amount:</h1>${goal}
      <br />
      <br />
      <Image src={image_url} />
      <h1>Donate to this Cause</h1>
      <DonationForm selectedCause={selectedCause} />
      <h1>Previous Donations</h1>
      {selectedCause.donations.map((donation) => (
        <DonationCard key={donation.id} donation={donation} />
      ))}
    </Wrapper>
  );
}

export default CauseDetail;
