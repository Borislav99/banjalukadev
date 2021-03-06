// react stuff
import React from "react";
// assets
import { authorLinks } from "../../utils/constants";
import { closeIcon } from "../../utils/fontawesome";
// router
import { Link } from "react-router-dom";
// context stuff
import { useAuthorContext } from "../../context/author_context";
// styled components
import styled from "styled-components";
const Sidebar = () => {
  const { sidebarActive, sidebarFunction, activeLink, changeActiveLink } =
    useAuthorContext();
  return (
    <Wrapper value={sidebarActive ? "0%" : "-100%"}>
      {/* aside header */}
      <div className="aside-header">
        <Link className="aside-header__logo" to={"/autor"}>
          banjaluka<span className="aside-header__logo--blue">dev</span>
        </Link>
        <span
          className="aside-header__close sidebar-burger-menu"
          onClick={() => {
            sidebarFunction(false);
          }}
        >
          <i className="fontawesome">{closeIcon}</i>
        </span>
      </div>
      {/* end of aside header */}
      <ul className="aside-links">
        {authorLinks.map((item, index) => {
          const { title, url } = item;
          return (
            <li key={index} className="aside-links__item">
              <Link
                to={url}
                className={
                  activeLink === title
                    ? "aside-links__link active-aside-item"
                    : "aside-links__link"
                }
                onClick={() => {
                  sidebarFunction(false);
                  changeActiveLink(title);
                }}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.aside`
  background-color: var(--clr-primary-5);
  position: fixed;
  z-index: 9999;
  inset: 0;
  overflow: hidden;
  transform: translateX(${(props) => props.value});
  transition: var(--transition);
  padding: var(--padding-small) var(--padding-small);
  .aside-header {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .aside-links__link,
  .aside-header__logo {
    font-size: 1rem;
    align-items: center;
    text-transform: uppercase;
    color: var(--clr-black-1);
    transition: var(--transition);
    font-weight: 999;
  }
  .sidebar-burger-menu {
    display: block;
    color: var(--clr-red);
  }
  .aside-header__logo--blue {
    color: var(--clr-white);
  }
  .aside-links {
    margin-top: var(--margin-small);
  }
  .aside-links__item {
    display: block !important;
  }
  .aside-links__link {
    text-transform: capitalize;
  }
  .aside-links__item:not(:last-child) {
    margin-bottom: var(--margin-small);
  }
  .active-aside-item {
    color: var(--clr-white);
  }
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;
export default Sidebar;
