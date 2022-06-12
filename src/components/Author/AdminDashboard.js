// react stuff
import React from "react";
// context
import { useAuthorContext } from "../../context/author_context";
// assets
import { hammer, copy } from "../../utils/fontawesome";
import Chart from "./Chart";
// styled components
import styled from "styled-components";
const AdminDashboard = () => {
  // context
  const { categories, posts } = useAuthorContext();
  return (
    <Wrapper>
      {/* admin data */}
      <div className="admin-data-container">
        {/* single data */}
        <div className="admin-single-data">
          <p>kategorije</p>
          <div className="single-data-footer">
            <span>
              <i>{hammer}</i>
            </span>
            <span className="fontawesome">{categories.length}</span>
          </div>
        </div>
        {/* end of single data */}
        {/* single data */}
        <div className="admin-single-data">
          <p>objave</p>
          <div className="single-data-footer">
            <span>
              <i>{copy}</i>
            </span>
            <span className="fontawesome">{posts.length}</span>
          </div>
        </div>
        {/* end of single data */}
      </div>
      {/* end of admin data */}
      {/* graph container */}
      <div className="admin-graph-container">
        <Chart />
      </div>
      {/* end of graph container */}
    </Wrapper>
  );
};
// styled components
const Wrapper = styled.article`
  padding: var(--padding-medium);
  .admin-data-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .admin-data-container > div {
    padding: var(--padding-small);
    border: 0.3rem solid black;
    border-radius: var(--radius);
    flex: 0 0 calc(50% - 2rem);
  }
  .admin-single-data p {
    color: var(--clr-black-1);
    text-transform: capitalize;
    font-weight: 999;
    font-size: 1rem;
  }
  .admin-graph-container {
    height: calc(100vh - 56px - 106px - 104px);
    margin-top: var(--margin-small);
  }
  @media only screen and (min-width: 800px) {
    flex: 0 0 75%;
    .admin-single-data p {
      font-size: 1.5rem;
    }
  }
`;
export default AdminDashboard;
