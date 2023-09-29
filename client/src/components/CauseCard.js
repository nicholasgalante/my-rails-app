import React from "react";
import { Box, Thumbnail } from "../styles";

function CauseCard({ cause }) {
  const { title, school_name, city, state, description, image_url } = cause;

  return (
    <Box>
      <h1>{title}</h1>
      <h3>{school_name}</h3>
      <h3>{city}, {state}.</h3>
      <Thumbnail src={image_url}/>
    </Box>
  );
}

export default CauseCard;
