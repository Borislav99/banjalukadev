// react stuff
import React from "react";
// context
import { useUserContext } from "../../context/user_context";
// router
import { Link } from "react-router-dom";
// styled components
import styled from "styled-components";
const PageHero = ({ title }) => {
  const { changeActiveLink } = useUserContext();
  return (
    <Wrapper className="section">
      <div className="section-center">
        {/* hero text container */}
        <div className="hero-text-container">
          <h4 className="hero-text-container__title">{title}</h4>
          <Link
            to={"/"}
            className="hero-text-container--home-link"
            onClick={() => {
              changeActiveLink("pocetna");
            }}
          >
            <span>pocetna</span>
          </Link>
          <span className="hero-text-container--current-link"> / {title}</span>
        </div>
        {/* end of hero text container */}
      </div>
    </Wrapper>
  );
};
// styled components
const Wrapper = styled.section`
  background-color: var(--clr-grey-10);
  .hero-text-container--home-link,
  .hero-text-container span {
    text-transform: capitalize;
    color: var(--clr-black-1);
    font-weight: 999;
  }
  .hero-text-container--home-link span {
    color: var(--clr-primary-5);
  }
`;
export default PageHero;
