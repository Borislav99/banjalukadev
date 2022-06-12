// react stuff
import React from "react";
// styled components
import styled from "styled-components";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Wrapper className="section">
      <div className="footer-text-container">
        <p>
          &copy; {year} <span>banjalukadev</span> sva prava zadrzana
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  background-color: var(--clr-black-1);
  .footer-text-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 999;
  }
  .footer-text-container p {
    font-size: 0.75rem;
    color: var(--clr-white);
  }
  .footer-text-container p span {
    color: var(--clr-primary-5);
  }
  @media only screen and (min-width: 500px) {
    .footer-text-container p {
      font-size: 1rem;
    }
  }
`;
export default Footer;
