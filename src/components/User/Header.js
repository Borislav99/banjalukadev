// react stuff
import React from "react";
// router
import { Link } from "react-router-dom";
// context
import { useUserContext } from "../../context/user_context";
// assets
import { userHeaderLinks } from "../../utils/constants";
import { barsIcon } from "../../utils/fontawesome";
// styled components
import styled from "styled-components";
const Header = () => {
  // sidebar function
  const { sidebarFunction, activeLink, changeActiveLink } = useUserContext();
  return (
    // Header
    <Wrapper>
      <Link
        to={"/"}
        onClick={() => {
          changeActiveLink("pocetna");
        }}
      >
        banjaluka<span>dev</span>
      </Link>
      <span
        className="burger-menu"
        onClick={() => {
          sidebarFunction(true);
        }}
      >
        <i className="fontawesome">{barsIcon}</i>
      </span>
      <ul>
        {userHeaderLinks.map((item, index) => {
          const { title, url } = item;
          return (
            <li key={index}>
              {/* dodaj aktivni link */}
              <Link
                className={activeLink === title ? "active-link" : null}
                onClick={() => {
                  changeActiveLink(title);
                }}
                to={url}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
    // End of Header
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
  a {
    font-size: 1rem;
    align-items: center;
    text-transform: uppercase;
    color: var(--clr-grey-5);
    transition: var(--transition);
    font-weight: 999;
  }
  a span {
    color: var(--clr-primary-5);
  }
  a:hover {
    color: var(--clr-black-1);
  }
  ul {
    list-style-type: none;
    display: none;
  }
  ul li {
    display: inline-block;
    margin-right: calc(var(--margin-small) / 2);
  }
  ul li a {
    text-transform: capitalize;
  }
  .burger-menu {
    transition: var(--transition);
  }
  .burger-menu:hover {
    cursor: pointer;
    color: var(--clr-black-1);
  }
  .active-link {
    color: var(--clr-primary-5);
  }
  @media only screen and (min-width: 800px) {
    padding: var(--padding-small) calc(var(--padding-small) / 2);
    ul {
      display: block;
    }
    .burger-menu {
      display: none;
    }
  }
`;
export default Header;
