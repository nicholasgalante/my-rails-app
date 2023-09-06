import React from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../styles";
import DonationForm from "../components/DonationForm";


function CauseDetail({ causes, user }) {
   let { causeId } = useParams();

   const selectedCause = causes.find(cause => cause.id === parseInt(causeId));

   if (!selectedCause) {
     return <div>Cause not found</div>;
   }

   console.log(selectedCause)

   const { title, school_name, city, state, description, imgURL, goal } = selectedCause

  return (
      <Wrapper>
      {title}
      {school_name}
      <DonationForm user={user} />
      </Wrapper>
  )
}

export default CauseDetail;
