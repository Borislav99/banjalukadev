// react stuff
import React from "react";
// assets
import parralax from "../../assets/parallax.jpg";
// styled components
import styled from "styled-components";
const Parralax = () => {
  return (
    <Wrapper className="section">
      <div className="parallax-text-container">
        <h3 className="parallax-text-container__title">
          sta je za vas tehnologija?{" "}
        </h3>
        <p className="parallax-text-container__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          distinctio temporibus tempora quibusdam nisi debitis odio velit
          voluptatibus deleniti aut?
        </p>
        <div className="section-title-divider"></div>
      </div>
    </Wrapper>
  );
};
// styled components
const Wrapper = styled.section`
  background: var(--clr-primary-5);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;
  .parallax-text-container {
    text-align: center;
  }
  .parallax-text-container__title {
    text-transform: uppercase;
    color: var(--clr-white);
  }
  .parallax-text-container__text {
    color: var(--clr-white);
  }
  @media only screen and (min-width: 800px) {
    background-image: url(${parralax});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;
export default Parralax;
