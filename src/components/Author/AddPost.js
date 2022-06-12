// react stuff
import { React, useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
// context stuff
import { useAuthorContext } from "../../context/author_context";
// router
import { useNavigate } from "react-router-dom";
// styled components
import styled from "styled-components";
const AddCategory = () => {
  // router
  const history = useNavigate();
  // context stuff
  const { categories, createNewPost, addError } = useAuthorContext();
  // state
  const [name, setName] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [category, setCategory] = useState(categories[0].name);
  const [thumbnail, setThumbnail] = useState("");
  const [otherImages, setOtherImages] = useState("");
  const [youtube, setYoutube] = useState("");
  return (
    <Wrapper>
      {/* <!-- section title --> */}
      <div className="section-title">
        <h2>
          dodavanje
          <span> objave</span>
        </h2>
        <div className="divider"></div>
      </div>
      {/* <!-- end of section title -->
    <!-- add category form container --> */}
      <div className="add-category-form-container">
        <div
          className={
            addError ? "add-error-container show-error" : "add-error-container"
          }
        >
          <p>unesite validne podatke</p>
        </div>
        {/* <!-- form --> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createNewPost(
              name,
              category,
              thumbnail,
              otherImages,
              youtube,
              markdown
            );
            history(-1);
          }}
          className="add-post-form"
        >
          <div className="form-control">
            <label className="form-control__label" htmlFor="name">
              naslov
            </label>
            <input
              type="text"
              name="name"
              className="form-control__input"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category" className="form-control__label">
              kategorija
            </label>
            <select
              name="category"
              id="category"
              className="form-control__select"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {categories.map((item) => {
                const { _id, name } = item;
                return (
                  <option
                    key={_id}
                    value={name}
                    className="form-control__select-option"
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-control file-input">
            <label className="file-input__label" htmlFor="thumbnail">
              naslovna slika
            </label>
            <input
              type="file"
              name="thumbnail"
              id="thumbnail"
              className="file-input__input"
              onChange={(e) => {
                const file = e.target.files;
                setThumbnail(file);
              }}
            />
          </div>
          <div className="form-control file-input">
            <label className="file-input__label" htmlFor="otherImages">
              Dodatne slike
            </label>
            <input
              type="file"
              multiple
              className="file-input__input"
              onChange={(e) => {
                const files = e.target.files;
                setOtherImages(files);
              }}
            />
          </div>
          <div className="form-control">
            <label className="form-control__label" htmlFor="youtube">
              youtube link
            </label>
            <input
              type="text"
              name="youtube"
              id="youtube"
              className="form-control__input"
              onChange={(e) => {
                setYoutube(e.target.value);
              }}
            />
          </div>
          <MarkdownEditor
            className="markdown-editor"
            height={"20rem"}
            value={markdown}
            onChange={(editor, data, value) => setMarkdown(value)}
          />
          <input className="btn btn--form-btn" type="submit" value="posalji" />
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
  .form-control__label,
  .file-input__label {
    text-transform: uppercase;
    font-weight: 999;
    color: var(--clr-black-1);
    font-size: 1.5rem;
    display: block;
  }
  .form-control__input,
  .file-input__input,
  .form-control__select,
  .markdown-editor {
    width: 100%;
    padding: calc(var(--padding-small) / 2);
  }
  .markdown-editor {
    margin: 0 auto;
    margin-bottom: var(--margin-small);
  }
  .btn--form-btn {
    width: 100%;
  }
  .file-input__input {
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: var(--radius);
  }
  @media only screen and (min-width: 500px) {
    .form-control input,
    .form-control select,
    .markdown-editor {
      width: 50%;
    }
    .btn--form-btn {
      width: 50%;
    }
  }
  @media only screen and (min-width: 800px) {
    flex: 0 0 75%;
  }
`;
export default AddCategory;
