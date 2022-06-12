// react stuff
import React from "react";
// assets
import { authorLinks } from "../../utils/constants";
// context
import { useAuthorContext } from "../../context/author_context";
// router
import { Link } from "react-router-dom";
// styled components
import styled from "styled-components";
const AdminSidebar = () => {
  // context
  const { activeLink, changeActiveLink } = useAuthorContext();
  return (
    <Wrapper>
      <h3>servisi</h3>
      <div className="admin-sidebar-services">
        <ul className="admin-navigation">
          {/* single service */}
          {authorLinks.map((item, index) => {
            const { title, url, icon } = item;
            return (
              <li
                key={index}
                className={
                  activeLink === title
                    ? "admin-navigation__item active-service"
                    : "admin-navigation__item"
                }
              >
                <Link
                  className="admin-navigation__link"
                  to={url}
                  onClick={() => {
                    changeActiveLink(title);
                  }}
                >
                  {title}
                  <span className="admin-navigation__item-icon">
                    <i className="fontawesome">{icon}</i>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};
// styled components
const Wrapper = styled.article`
  display: none;
  border-right: 0.2rem solid var(--clr-black-1);
  border-bottom: 0.2rem solid var(--clr-black-1);
  padding: var(--padding-medium);
  background-color: var(--clr-primary-5);
  .admin-navigation__item {
    margin-bottom: var(--margin-small);
    transition: var(--transition);
  }
  .admin-navigation__link {
    transition: var(--transition);
    color: var(--clr-black-1);
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    text-transform: uppercase;
  }
  .admin-navigation__link:hover {
    color: var(--clr-white);
    cursor: pointer;
  }
  .admin-navigation__item-icon {
    margin-left: calc(var(--margin-small) / 4);
  }
  .active-service {
    border-bottom: 0.15rem solid var(--clr-white);
  }
  @media only screen and (min-width: 800px) {
    flex: 0 0 25%;
    display: block;
  }
`;
export default AdminSidebar;
