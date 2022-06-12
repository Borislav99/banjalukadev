import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Error = () => {
  return (
    <Main className="body">
      <div className="login">
        <Wrapper>
          <h1>404</h1>
          <h3>stranica koju ste izabrali ne postoji</h3>
          <Link to={"/"} className="btn">
            pocetna
          </Link>
        </Wrapper>
      </div>
    </Main>
  );
};
const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-black-1);
`;
const Wrapper = styled.section`
  text-align: center;
  h1,
  h3 {
    color: var(--clr-white);
  }
  a {
    border-radius: var(--radius);
  }
`;
export default Error;
