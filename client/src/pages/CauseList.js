import React from "react";
import CauseCard from "../components/CauseCard";
import { Button } from "../styles/Button";
import styled from "styled-components";

function CauseList({ causes }) {
  return (
    <Wrapper>
      {causes.length > 0 ? (
        causes.map((cause) => <CauseCard key={cause.id} cause={cause} />)
      ) : (
        <>
          <h2>No Causes Found. Sign in to create one!</h2>
          <Button>Sign In</Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default CauseList;
