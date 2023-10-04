import React from "react";
import { Box, Button } from "../styles";

function MyDonationCard({ donation }) {
  console.log(donation);

  return (
    <>
      <Box>
        {donation.amount}
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Box>
    </>
  );
}

export default MyDonationCard;
