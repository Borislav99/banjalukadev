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
        <ul>
          {/* single service */}
          {authorLinks.map((item, index) => {
            const { title, url, icon } = item;
            return (
              <li
                key={index}
                className={
                  activeLink === title
                    ? "single-service active-service"
                    : "single-service"
                }
              >
                <Link
                  to={url}
                  onClick={() => {
                    changeActiveLink(title);
                  }}
                >
                  {title}
                  <span className="single-service-icon">
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
  .single-service {
    margin-bottom: var(--margin-small);
    transition: var(--transition);
  }
  .single-service a {
    transition: var(--transition);
    color: var(--clr-black-1);
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .single-service a:hover {
    color: var(--clr-white);
    cursor: pointer;
  }
  .single-service a {
    text-transform: uppercase;
  }
  .single-service a span {
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
