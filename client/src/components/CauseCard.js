import React from "react";

function CauseCard({cause}){

   const { title, school_name, city, state, description, image_url } = cause
   
   return (
      <>
      {title}
      {school_name}
      {city}
      {state}
      </>
   )

}

export default CauseCard;