// react stuff
import React from "react";
// router
import { Link } from "react-router-dom";
// context stuff
import { useUserContext } from "../../context/user_context";
// assets
import { down } from "../../utils/fontawesome";
import banner from "../../assets/banner.jpg";
// styled components
import styled from "styled-components";
const Banner = () => {
  // context stuff
  const { changeActiveLink } = useUserContext();
  return (
    <Wrapper className="banner">
      <div className="banner-text-container">
        <h3 className="banner-text-container__title">
          banjalucki web dev portal
        </h3>
        <p className="banner-text-container__text">
          Prvi banjalucki web dev portal. Od programera za programere.
          Procitajte novosti iz dev svijeta.{" "}
        </p>
        <Link
          className="btn btn--banner-btn"
          to={"/objave"}
          onClick={() => {
            changeActiveLink("objave");
          }}
        >
          procitaj vise
        </Link>
      </div>
      <a href="#portal-section" className="btn--banner-section">
        <i className="fontawesome">{down}</i>
      </a>
    </Wrapper>
  );
};
// styled components
const Wrapper = styled.div`
  min-height: calc(100vh - 56px);
  background: var(--clr-primary-5);
  display: flex;
  justify-content: center;
  align-items: center;
  .banner-text-container {
    color: var(--clr-white);
    text-align: center;
  }
  .banner-text-container__title {
    text-transform: uppercase;
  }
  .banner-text-container__text {
    color: var(--clr-white);
  }
  .btn--banner-btn {
    background-color: var(--clr-white);
    border-radius: var(--radius);
    color: var(--clr-primary-5);
    font-weight: 999;
  }
  .btn--banner-section {
    position: absolute;
    bottom: var(--margin-small);
    background-color: transparent;
    border: none;
    color: var(--clr-white);
    font-size: 2rem;
    animation: bannerBtn 1s infinite;
    animation-fill-mode: forwards;
  }
  @media only screen and (min-width: 800px) {
    background-image: url(${banner});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  @keyframes bannerBtn {
    100% {
      transform: translateY(0.5rem);
    }
  }
`;
export default Banner;
