// react stuff
import React from "react";
// context stuff
import { useAuthorContext } from "../../context/author_context";
// router
import { Link } from "react-router-dom";
// assets
import { convertDate } from "../../utils/helpers";
import { plus, trash, edit } from "../../utils/fontawesome";
// styled components
import styled from "styled-components";
const AllCategories = () => {
  // context stuff
  const { categories, deleteCategory, getSingleCategory } = useAuthorContext();
  return (
    <Wrapper>
      {/* add category */}
      <div className="add-category-container">
        <span>dodaj kategoriju</span>
        <span>
          {/* <i>{plus}</i> */}
          <Link
            to={"/autor/kategorije/dodaj-kategoriju"}
            className="span-link-add"
          >
            <i>{plus}</i>
          </Link>
        </span>
      </div>
      {/* end of add category */}
      {/* category fields table */}
      <div className="category-fields-table">
        <p>ime</p>
        <p className="show-on-pc">autor</p>
        <p className="show-on-pc">datum</p>
        <p>obrisi</p>
        <p>uredi</p>
      </div>
      {/* end of category fields table */}
      {/* all categories table */}
      <div className="all-categories-table">
        {categories.map((item) => {
          const { _id, name, author, createdAt } = item;
          return (
            <div
              key={_id}
              className="category-fields-table single-category-field"
            >
              <p>{name}</p>
              <p className="show-on-pc">{author}</p>
              <p className="show-on-pc">{convertDate(createdAt)}</p>
              <p
                className="delete-icon"
                onClick={() => {
                  deleteCategory(_id);
                }}
              >
                <i>{trash}</i>
              </p>
              <p className="edit-icon">
                <Link
                  className="span-link-delete"
                  to={`/autor/kategorije/uredi-kategoriju/${_id}`}
                  onClick={() => {
                    getSingleCategory(_id);
                  }}
                >
                  <i>{edit}</i>
                </Link>
              </p>
            </div>
          );
        })}
      </div>
      {/* <!-- end of all categories table --> */}
    </Wrapper>
  );
};
const Wrapper = styled.article`
  padding: var(--padding-medium);
  .add-category-container {
    text-align: center;
  }
  .add-category-container span {
    text-transform: uppercase;
    padding: calc(var(--padding-small) / 4) calc(var(--padding-small) / 2);
    transition: var(--transition);
  }
  .add-category-container span:last-child {
    background-color: var(--clr-primary-5);
    border-radius: 50%;
  }
  .span-link-add {
    color: var(--black-1);
    transition: var(--transition);
  }
  .span-link-add:hover {
    color: var(--white);
    transition: var(--transition);
  }
  .span-link-delete {
    color: var(--black-1);
    transition: var(--transition);
  }
  .span-link-delete:hover {
    color: var(--red);
    transition: var(--transition);
  }
  .span-link-edit {
    color: var(--black-1);
    transition: var(--transition);
  }
  .span-link-edit:hover {
    color: var(--clr-primary-5);
    transition: var(--transition);
  }
  .add-category-container span:last-child:hover {
    cursor: pointer;
    background-color: var(--clr-black-1);
    color: var(--clr-white);
  }
  .category-fields-table {
    margin-top: var(--margin-small);
    border: 0.25rem solid var(--clr-black-1);
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
    padding: var(--padding-small);
  }
  .category-fields-table p {
    text-align: center;
    margin-bottom: 0px;
    text-transform: uppercase;
    font-weight: 999;
    color: var(--clr-black-1);
  }
  .show-on-pc {
    display: none;
  }
  .all-categories-table {
    margin-top: var(--margin-small);
  }
  .single-category-field {
    border: 1px solid var(--clr-primary-5);
    padding: calc(var(--padding-small) / 2);
  }
  .delete-icon,
  .edit-icon {
    transition: var(--transition);
    cursor: pointer;
  }
  .delete-icon:hover {
    color: var(--clr-red);
  }
  .edit-icon:hover {
    color: var(--clr-primary-5);
  }
  @media only screen and (min-width: 800px) {
    flex: 0 0 75%;
    .show-on-pc {
      display: block;
    }
    .category-fields-table {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;
export default AllCategories;
