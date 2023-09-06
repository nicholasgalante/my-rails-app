import React, { useState } from "react";
import { FormField, Label, Input, Button, Error } from "../styles";


function DonationForm({user, selectedCause}) {
  const [amount, setAmount] = useState(0.00);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  console.log(amount)

  function handleSubmit(e){
   e.preventDefault();
   fetch("/donations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // donation: {
         cause_id: selectedCause.id,
         amount
        // },
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((donation) => console.log(donation));
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
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
