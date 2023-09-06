import React from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../styles";


function CauseDetail({ causes }) {
   let { causeId } = useParams();

   console.log("CAUSES: ", causes)
   console.log("causeID: ", causeId)

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
      </Wrapper>
  )
}

export default CauseDetail;
