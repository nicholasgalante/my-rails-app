import React, { useContext } from "react";
import CauseCard from "../components/CauseCard";
import { Button } from "../styles/Button";
import styled from "styled-components";
import { CauseContext } from "../context/CauseContext";

function CauseList() {
  const { causes } = useContext(CauseContext);

  if (!causes) {
    return <div>Please sign in to create a cause.</div>;
  }

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
