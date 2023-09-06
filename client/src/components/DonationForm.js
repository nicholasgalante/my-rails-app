import React, { useState } from "react";
import { FormField, Label, Input, Button, Error } from "../styles";

function DonationForm() {
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  function handleSubmit(e){
   e.preventDefault();
   console.log("Submitted!")
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
