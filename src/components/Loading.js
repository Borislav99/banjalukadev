// react stuff
import React from "react";
import loading from "../assets/loading.gif";
// styled components
import styled from "styled-components";
const Loading = () => {
  return (
    <Wrapper>
      <img src={loading} alt="" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
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
