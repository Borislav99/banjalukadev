// react stuff
import React from "react";
import loading from "../../assets/loading.gif";
// styled components
import styled from "styled-components";
const Loading = () => {
  return (
    <Wrapper className="loading">
      <img className="loading__img" src={loading} alt="loading" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .loading__img {
    width: 25%;
    max-width: 10rem;
  }
  &::before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--black-1);
  }
`;
export default Loading;
