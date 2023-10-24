import React, { useState, useContext } from "react";
import { FormField, Box, Button, Input } from "../styles";
import { UserContext } from "../context/UserContext";
import { CauseContext } from "../context/CauseContext";
import { Wrapper } from "../styles";

function MyDonationCard({ donation }) {
  const { user, setUser } = useContext(UserContext);
  const { setCauses} = useContext(CauseContext);
  const [updating, setUpdating] = useState(false);
  const [amount, setAmount] = useState([donation.amount]);

  function handleEdit() {
    setUpdating(!updating);
  }

  function causeName(){ 
    const cause = user.causes.find((cause) => { 
      return cause.id === donation.cause_id 
    })
    return cause.title
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setUpdating(true);
  
    try {
      const response = await fetch(`/donations/${donation.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
        }),
      });
  
      if (response.ok) {
        const updatedDonation = await response.json();
        onUpdateUserDonation(updatedDonation);
        onUpdateCauseDonation(updatedDonation);
      } else {
        throw new Error("Failed to update donation");
      }
    } catch (error) {
      console.error("Error updating donation:", error);
    } finally {
      setUpdating(false);
    }
  }
  
  function onUpdateCauseDonation(updatedDonation) {
    const causeId = updatedDonation.cause_id;
    setCauses((prevCauses) =>
      prevCauses.map((cause) =>
        cause.id === causeId
          ? {
              ...cause,
              donations: cause.donations.map((causeDonation) =>
                causeDonation.id === updatedDonation.id ? updatedDonation : causeDonation
              ),
            }
          : cause
      )
    );
  }
  
  function onUpdateUserDonation(updatedDonation) {
    setUser((prevUser) => ({
      ...prevUser,
      donations: prevUser.donations.map((donation) =>
        donation.id === updatedDonation.id ? updatedDonation : donation
      ),
    }));
  }

  async function handleDelete() {
    try {
      await fetch(`/donations/${donation.id}`, {
        method: "DELETE",
      });
  
      onDeleteUserDonation(donation);
      onDeleteCauseDonation(donation.cause_id);
    } catch (error) {
      console.error("Error deleting donation:", error);
    }
  }
  
  function onDeleteUserDonation(deletedDonation) {
    setUser((prevUser) => ({
      ...prevUser,
      donations: prevUser.donations.filter((donation) => donation.id !== deletedDonation.id),
    }));
  }
  
  function onDeleteCauseDonation(causeId) {
    setCauses((prevCauses) =>
      prevCauses.map((cause) =>
        cause.id === causeId
          ? {
              ...cause,
              donations: cause.donations.filter((causeDonation) => causeDonation.id !== donation.id),
            }
          : cause
      )
    );
  }



  return (
    <Wrapper>
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
          ${donation.amount}
          <br/>
          {causeName()}
          <br/>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </Box>
      )}
    </Wrapper>
  );
}

export default MyDonationCard;
