import React from "react";
import { Box, Thumbnail } from "../styles";
import { Link } from "react-router-dom";


function CauseCard({ cause }) {
  const { title, school_name, city, state, image_url } = cause;

  return (
    <Box>
      <Link to={`/causes/${cause.id}`}><h1>{title}</h1></Link>
      <h3>{school_name}</h3>
      <h3>{city}, {state}.</h3>
      <Thumbnail src={image_url}/>
    </Box>
  );
}

export default CauseCard;
