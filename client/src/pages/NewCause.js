import React from "react";
import { useState } from "react";
import { Button, Error, Input, FormField, Label, Wrapper } from "../styles";

function NewCause() {
  const [title, setTitle] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [goal, setGoal] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/causes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cause: {
          title,
          school_name: schoolName,
          city,
          state,
          goal,
          description,
          image_url: imageURL,
        },
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((res) => console.log(res));
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }

  console.log("ERRORS: ", errors);

  console.log({
    title,
    school_name: schoolName,
    city,
    state,
    description,
    image_url: imageURL,
  });

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            autoComplete="off"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="school-name">School Name</Label>
          <Input
            type="text"
            id="school-name"
            autoComplete="off"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="city">City</Label>
          <Input
            type="city"
            id="city"
            autoComplete="off"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="state">State</Label>
          <Input
            type="text"
            id="state"
            autoComplete="off"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="goal">Goal Amount</Label>
          <Input
            type="text"
            id="goal"
            autoComplete="off"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="description">Description</Label>
          <Input
            type="text"
            id="description"
            autoComplete="off"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="image-url">Image URL</Label>
          <Input
            type="text"
            id="image-url"
            autoComplete="off"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </FormField>
        <FormField>
          <Button type="submit">
            {isLoading ? "Loading..." : "Create a Cause"}
          </Button>
        </FormField>
        <FormField>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField>
      </form>
    </Wrapper>
  );
}

export default NewCause;
