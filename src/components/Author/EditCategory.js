// react stuff
import { React, useEffect, useState } from "react";
// context stuff
import { useAuthorContext } from "../../context/author_context";
// router
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// styled components
import styled from "styled-components";
const AddCategory = () => {
  // router
  const history = useNavigate();
  // context stuff
  const {
    updateCategory,
    addError,
    author: { username },
    singleCategory: { _id, name },
  } = useAuthorContext();
  // state
  const [categoryName, setCategoryName] = useState(name);
  return (
    <Wrapper>
      {/* section title */}
      <div className="section-title">
        <h2>
          uredjivanje
          <span> kategorije</span>
        </h2>
        <div className="divider"></div>
      </div>
      {/* end of section title */}
      {/* <!-- add category form container --> */}
      <div className="add-category-form-container">
        {/* add error container */}
        <div
          className={
            addError ? "add-error-container show-error" : "add-error-container"
          }
        >
          <p>unesite validne podatke</p>
        </div>
        {/* end of add error container */}
        {/* <!-- form --> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateCategory(categoryName, username, _id);
            history(-1);
            // history("/sr/autor/kategorije");
          }}
        >
          <div className="form-control">
            <label htmlFor="name">ime kategorije</label>
            <input
              type="text"
              name="name"
              id=""
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
              value={categoryName}
            />
          </div>
          <input
            className="btn form-btn"
            type="submit"
            value="uredi kategoriju"
            disabled={addError ? true : false}
          />
        </form>
        {/* <!-- end of form --> */}
      </div>
      {/* <!-- end of add category form container --> */}
    </Wrapper>
  );
};
const Wrapper = styled.article`
  padding: var(--padding-medium);
  .add-category-form-container {
    text-align: center;
  }
  .form-control {
    margin-bottom: var(--margin-small);
  }
  .form-control label {
    text-transform: uppercase;
    font-weight: 999;
    color: var(--clr-black-1);
    font-size: 1.5rem;
    display: block;
  }
  .form-control input {
    width: 100%;
    padding: calc(var(--padding-small) / 2);
  }
  .form-btn {
    width: 100%;
  }
  @media only screen and (min-width: 500px) {
    .form-control input {
      width: 50%;
    }
    .form-btn {
      width: 50%;
    }
  }
  @media only screen and (min-width: 800px) {
    flex: 0 0 75%;
  }
`;
export default AddCategory;