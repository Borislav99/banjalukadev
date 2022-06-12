// react stuff
import React from "react";
// styled components
import styled from "styled-components";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Wrapper className="section footer">
      <div className="footer-text-container">
        <p className="footer-text-container__text">
          &copy; {year}{" "}
          <span className="footer-text-container__text--blue">
            banjalukadev
          </span>{" "}
          sva prava zadrzana
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
  .footer-text-container__text {
    font-size: 0.75rem;
    color: var(--clr-white);
  }
  .footer-text-container__text--blue {
    color: var(--clr-primary-5);
  }
  @media only screen and (min-width: 500px) {
    .footer-text-container__text {
      font-size: 1rem;
    }
  }
`;
export default Footer;
