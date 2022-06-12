// react stuff
import { React, useEffect, useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
// context stuff
import { useAuthorContext } from "../../context/author_context";
// router
import { useParams, useNavigate } from "react-router-dom";
// styled components
import styled from "styled-components";
const AddCategory = () => {
  // router
  const history = useNavigate();
  const { id } = useParams();
  // context stuff
  const {
    categories,
    editSinglePost,
    addError,
    singlePost: { title, youtube: video_link, text },
  } = useAuthorContext();
  // state
  const [name, setName] = useState(title);
  const [markdown, setMarkdown] = useState(text);
  const [category, setCategory] = useState(categories[0].name);
  const [thumbnail, setThumbnail] = useState("");
  const [otherImages, setOtherImages] = useState("");
  const [youtube, setYoutube] = useState(video_link);
  return (
    <Wrapper>
      {/* <!-- section title --> */}
      <div className="section-title">
        <h2>
          uredjivanje
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
            editSinglePost(
              id,
              name,
              category,
              thumbnail,
              otherImages,
              youtube,
              markdown
            );
            history(-1);
          }}
        >
          <div className="form-control">
            <label htmlFor="name">naslov</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">kategorija</label>
            <select
              name="category"
              id="category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {categories.map((item) => {
                const { _id, name } = item;
                return (
                  <option key={_id} value={name}>
                    {name}
                  </option>
                );
              })}
            </select>
            {/* <input type="text" name="author" id="" /> */}
          </div>
          <div className="form-control file-input">
            <label htmlFor="thumbnail">naslovna slika</label>
            <input
              type="file"
              name="thumbnail"
              id="thumbnail"
              onChange={(e) => {
                const file = e.target.files;
                setThumbnail(file);
              }}
            />
          </div>
          <div className="form-control file-input">
            <label htmlFor="otherImages">Dodatne slike</label>
            <input
              type="file"
              multiple
              onChange={(e) => {
                const files = e.target.files;
                // const form = new FormData();
                // for (let i = 0; files.length > i; i++) {
                //   form.append("files", files[i], files[i].name);
                // }
                setOtherImages(files);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="youtube">youtube link</label>
            <input
              type="text"
              name="youtube"
              id="youtube"
              value={youtube}
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
          <input className="btn form-btn" type="submit" value="uredi objavu" />
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
  .form-control input,
  .form-control select,
  .markdown-editor {
    width: 100%;
    padding: calc(var(--padding-small) / 2);
  }
  .markdown-editor {
    margin: 0 auto;
    margin-bottom: var(--margin-small);
  }
  .form-btn {
    width: 100%;
  }
  .file-input input {
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: var(--radius);
  }
  @media only screen and (min-width: 500px) {
    .form-control input,
    .form-control select,
    .markdown-editor {
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
