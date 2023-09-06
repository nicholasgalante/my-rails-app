import React, { useState } from "react";
import { FormField, Label, Input, Button, Error } from "../styles";
import { useParams } from "react-router-dom";


function DonationForm({user}) {
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  let { causeId } = useParams();

  function handleSubmit(e){
   e.preventDefault();
   fetch("/donations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        donation: {
         user_id: user.id,
         cause_id: causeId,
         amount
        },
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((donation) => console.log(donation));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
   <form onSubmit={handleSubmit}>
   <FormField>
     <Label>Donation Amount</Label>
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
