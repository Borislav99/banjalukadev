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
          <h4>{title}</h4>
          <Link
            to={"/"}
            onClick={() => {
              changeActiveLink("pocetna");
            }}
          >
            <span>pocetna</span>
          </Link>
          <span> / {title}</span>
        </div>
        {/* end of hero text container */}
      </div>
    </Wrapper>
  );
};
// styled components
const Wrapper = styled.section`
  background-color: var(--clr-grey-10);
  .hero-text-container a,
  .hero-text-container span {
    text-transform: capitalize;
    color: var(--clr-black-1);
    font-weight: 999;
  }
  .hero-text-container a span {
    color: var(--clr-primary-5);
  }
`;
export default PageHero;
