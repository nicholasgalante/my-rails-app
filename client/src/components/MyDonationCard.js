import React, { useState } from "react";
import { FormField, Box, Button, Input } from "../styles";

function MyDonationCard({ donation, onUpdateDonation, onDeleteDonation }) {
  const [updating, setUpdating] = useState(false);
  const [amount, setAmount] = useState(donation.amount);

  function handleEdit() {
    setUpdating(!updating);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUpdating(!updating);
    fetch(`/donations/${donation.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
      }),
    })
      .then((res) => res.json())
      .then((updatedDonation) => onUpdateDonation(updatedDonation));
  }

  function handleDelete() {
    fetch(`/donations/${donation.id}`, {
      method: "DELETE",
    })
    .then(() => onDeleteDonation(donation))
  }

  return (
    <>
      {updating ? (
        <Box>
          <form onSubmit={handleSubmit}>
            <FormField>
              <Input
                type="text"
                id="amount"
                autoComplete="off"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </FormField>
            <FormField>
              <Button variant="fill" color="primary" type="submit">
                Save
              </Button>
            </FormField>
          </form>
        </Box>
      ) : (
        <Box>
          {donation.amount}
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </Box>
      )}
    </>
  );
}

export default MyDonationCard;
