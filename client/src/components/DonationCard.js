import React from "react";
import { Box } from "../styles";

function DonationCard({ donation }) {

  return <><Box>${donation.amount}</Box></>;
}

export default DonationCard;
