// react stuff
import React from "react";
// router
import { Link } from "react-router-dom";
// context
import { useAuthorContext } from "../../context/author_context";
// assets
import { logoutIcon, barsIcon } from "../../utils/fontawesome";
// styled components
import styled from "styled-components";
const Header = () => {
  // context
  const {
    logoutAuthor,
    author: { gender, username },
    sidebarFunction,
  } = useAuthorContext();
  const { changeActiveLink } = useAuthorContext();
  return (
    <Wrapper className="header">
      <Link to={"/autor"} className="header__logo">
        banjaluka<span className="header__logo-blue">dev</span>
      </Link>
      <div className="header__logout-container logout-container">
        {gender === "m" ? (
          <span className="logout-container__icon">dobrodosao {username}</span>
        ) : (
          <span className="logout-container__icon">dobrodosla {username}</span>
        )}
        <span
          className="logout-container__icon author-bars-icon"
          onClick={() => {
            sidebarFunction(true);
          }}
        >
          Meni
          <i className="fontawesome">{barsIcon}</i>
        </span>
        <span
          className="logout-container__icon"
          onClick={() => {
            logoutAuthor();
            changeActiveLink("pocetna");
          }}
        >
          Odjava
          <i className="fontawesome">{logoutIcon}</i>
        </span>
      </div>
    </Wrapper>
  );
};
// styled components
const Wrapper = styled.header`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: var(--clr-white);
  padding: var(--padding-small) var(--padding-small);
  position: sticky;
  top: 0;
  z-index: 999;
  -webkit-box-shadow: 1px 1px 15px 4px #000000;
  box-shadow: 1px 1px 15px 4px #000000;
  .header__logo {
    font-size: 1rem;
    align-items: center;
    text-transform: uppercase;
    color: var(--clr-grey-5);
    transition: var(--transition);
    font-weight: 999;
  }
  .header__logo--blue {
    color: var(--clr-primary-5);
  }
  hover {
    color: var(--clr-black-1);
  }
  .logout-container__icon {
    text-transform: capitalize;
    transition: var(--transition);
  }
  .logout-container__icon:hover {
    color: var(--clr-primary-5);
    cursor: pointer;
  }
  .logout-container__icon:first-child {
    margin-right: calc(var(--margin-small) / 2);
    display: none;
  }
  .author-bars-icon {
    margin-right: calc(var(--margin-small) / 4);
  }
  @media only screen and (min-width: 800px) {
    padding: var(--padding-small) calc(var(--padding-small) / 2);
    .logout-container__icon:first-child {
      margin-right: calc(var(--margin-small) / 2);
      display: inline-block;
    }
    .author-bars-icon {
      display: none;
    }
  }
`;
export default Header;
