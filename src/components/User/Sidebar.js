// react stuff
import React from "react";
// assets
import { userHeaderLinks } from "../../utils/constants";
import { closeIcon } from "../../utils/fontawesome";
// router
import { Link } from "react-router-dom";
// context stuff
import { useUserContext } from "../../context/user_context";
// styled components
import styled from "styled-components";
const Sidebar = () => {
  const { sidebarActive, sidebarFunction, activeLink, changeActiveLink } =
    useUserContext();
  return (
    <Wrapper value={sidebarActive ? "0%" : "-100%"}>
      {/* aside header */}
      <div className="aside-header">
        <Link to={"/"}>
          banjaluka<span>dev</span>
        </Link>
        <span
          className="sidebar-burger-menu"
          onClick={() => {
            sidebarFunction(false);
          }}
        >
          <i className="fontawesome">{closeIcon}</i>
        </span>
      </div>
      {/* end of aside header */}
      <ul className="aside-links">
        {userHeaderLinks.map((item, index) => {
          const { title, url } = item;
          return (
            <li key={index} className="aside-list-item">
              <Link
                to={url}
                className={activeLink === title ? "active-aside-item" : null}
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
  a {
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
  a span {
    color: var(--clr-white);
  }
  .aside-links {
    margin-top: var(--margin-small);
  }
  .aside-list-item {
    display: block !important;
  }
  .aside-list-item a {
    text-transform: capitalize;
  }
  .aside-list-item:not(:last-child) {
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
