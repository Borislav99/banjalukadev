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
    <Wrapper className="header">
      <Link
        className="header__logo"
        to={"/"}
        onClick={() => {
          changeActiveLink("pocetna");
        }}
      >
        banjaluka<span className="header__logo--dev">dev</span>
      </Link>
      <span
        className="header__menu burger-menu"
        onClick={() => {
          sidebarFunction(true);
        }}
      >
        <i className="fontawesome">{barsIcon}</i>
      </span>
      <ul className="navigation">
        {userHeaderLinks.map((item, index) => {
          const { title, url } = item;
          return (
            <li key={index} className="navigation__item">
              {/* add active link */}
              <Link
                className={
                  activeLink === title
                    ? "active-link navigation__link"
                    : "navigation__link"
                }
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
  .header__logo,
  .navigation__link {
    font-size: 1rem;
    align-items: center;
    text-transform: uppercase;
    color: var(--clr-grey-5);
    transition: var(--transition);
    font-weight: 999;
  }
  .header__logo--dev {
    color: var(--clr-primary-5);
  }
  .header__logo:hover,
  .navigation__link:hover {
    color: var(--clr-black-1);
  }
  .navigation {
    list-style-type: none;
    display: none;
  }
  .navigation__item {
    display: inline-block;
    margin-right: calc(var(--margin-small) / 2);
  }
  .navigation__link {
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
    .navigation {
      display: block;
    }
    .burger-menu {
      display: none;
    }
  }
`;
export default Header;
