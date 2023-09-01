import React, { useState } from "react";
import { FormField, Label, Input, Button } from "../styles";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  console.log("Username: ", username);
  console.log("Password: ", password);

  return (
    <form>
      <FormField>
        <Label>Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label>Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button></Button>
      </FormField>
      <FormField></FormField>
    </form>
  );
}

export default SignInForm;
