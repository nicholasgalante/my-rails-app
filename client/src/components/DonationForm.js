import React, { useState, useContext } from "react";
import { FormField, Label, Input, Button, Error } from "../styles";
import { UserContext } from "../context/UserContext";


function DonationForm({ selectedCause, handleAddNewDonation}) {
  const [amount, setAmount] = useState(0.00);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useContext(UserContext);

  function handleSubmit(e){
   e.preventDefault();
   setIsLoading(true);

   fetch("/donations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         cause_id: selectedCause.id,
         amount
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((donation) => {
          handleAddNewDonation(donation)
          setUser((prevUser) => addDonationToUser(prevUser, donation)); //make update directly to user state
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function addDonationToUser(user, newDonation) {
    const updatedUser = { ...user };
    if (!updatedUser.donations) {
      updatedUser.donations = [];
    }
    updatedUser.donations.push(newDonation);
    return updatedUser;
  }

  return (
   <form onSubmit={handleSubmit}>
   <FormField>
     <Label>Donation Amount</Label>
     <Input
       type="number"
       id="amount"
       autoComplete="off"
       value={amount}
       onChange={(e) => setAmount(e.target.value)}
     />
   </FormField>
   <FormField>
        <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Donate"}
        </Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
 </form>
  );
}

export default DonationForm;
