// react stuff
import React from "react";
// styled components
import styled from "styled-components";
const Main = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
// styled components
const Wrapper = styled.main`
  min-height: calc(100vh - 56px);
  @media only screen and (min-width: 800px) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;
export default Main;
