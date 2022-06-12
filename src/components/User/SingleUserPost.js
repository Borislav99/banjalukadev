// react stuff
import React, { useEffect, useState } from "react";
// context stuff
import { useUserContext } from "../../context/user_context";
// assets
import { calendar, news, userIcon } from "../../utils/fontawesome";
import ImageGallery from "react-image-gallery";
import MDEditor from "@uiw/react-md-editor";
// router
import { Link } from "react-router-dom";
// styled componets
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const SingleUserPost = () => {
  // hooks
  const history = useNavigate();
  const [componentMounted, setComponentMounted] = useState(false);
  // context stuff
  const { changeActiveLink, singleProduct, setTutorial } = useUserContext();
  // use effect
  useEffect(() => {
    setComponentMounted(true);
    if (componentMounted) {
      if (!singleProduct.id) {
        history("/");
      }
    }
    changeActiveLink("objave");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleProduct]);
  // single post data
  const { title, categoryName, main_img, gallery, text, authorName, date } =
    singleProduct;
  const images = [];
  if (gallery) {
    gallery.forEach((item) => {
      images.push({
        original: item.url,
        thumbnail: item.url,
      });
    });
  }
  return (
    <Wrapper className="section">
      {/* section center */}
      <div className="section-center">
        {/* news container */}
        <div className="news-container">
          {/* posts container */}
          <article className="posts-container">
            {/* single post */}
            <div className="single-post">
              <h3 className="single-post__title">{title}</h3>
              <div className="information-container">
                <span className="information-container__text">
                  <i>{calendar}</i>
                  <span className="fontawesome">{date}</span>
                </span>
                <span className="information-container__text">
                  <i>{news}</i>
                  <span className="fontawesome">{categoryName}</span>
                </span>
                <span className="information-container__text">
                  <i>{userIcon}</i>
                  <span className="fontawesome">{authorName}</span>
                </span>
              </div>
              <div className="divider"></div>
              <div className="single-post__image-container">
                <img src={main_img} alt="" className="single-post__image" />
              </div>
              <div className="single-post__text">
                <MDEditor.Markdown className="markdown" source={text} />
              </div>
              {/* img gallery */}
              <div className="img-gallery-container">
                <h3>galerija slika</h3>
                <ImageGallery
                  items={images}
                  showFullscreenButton={false}
                  showPlayButton={false}
                />
              </div>
              {/* end of img gallery */}
              <div className="single-post__button-container">
                <Link
                  to={"/"}
                  className="btn btn--single-post-btn"
                  onClick={() => {
                    changeActiveLink("pocetna");
                  }}
                >
                  nazad
                </Link>
                <button
                  className="btn btn--single-post-btn"
                  onClick={() => {
                    setTutorial(true);
                  }}
                >
                  klip
                </button>
              </div>
              <div className="divider"></div>
            </div>
            {/* end of single post */}
          </article>
          {/* end of posts container */}
        </div>
        {/* end of news container */}
      </div>
      {/* end of section center */}
    </Wrapper>
  );
};
// styled componets
const Wrapper = styled.section`
  /* ----- POSTS SECTION ----- */
  min-height: 100vh;
  .news-container > article {
    margin-bottom: var(--margin-small);
  }
  .information-container__text {
    color: var(--clr-grey-5);
  }
  .information-container__text:not(:last-child) {
    margin-right: calc(var(--margin-small) / 2);
  }
  .single-post:not(:last-child) {
    margin-bottom: var(--margin-small);
  }
  .btn--single-post-btn {
    color: var(--clr-primary-5);
    text-transform: uppercase;
    font-weight: 999;
    transition: var(--transition);
  }
  .btn--single-post-btn:hover {
    color: var(--clr-black-1);
  }
  .image-gallery-image {
    height: 15rem;
    object-fit: cover;
  }
  .markdown ul {
    list-style-type: disc;
  }
  @media only screen and (min-width: 500px) {
    .news-container {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
    }
    .news-container > article {
      margin-bottom: 0;
    }
    .posts-container {
      flex: 0 0 calc(70% - 2rem);
    }
    .image-gallery-image {
      height: 25rem;
    }
  }
  /* ----- POSTS SECTION ----- */
  /* ----- SINGLE POST ----- */
  .single-post__image-container {
    margin-bottom: var(--margin-small);
  }
  .single-post__text {
    margin-bottom: var(--margin-small);
  }
  .single-post__button-container {
    text-align: center;
  }
  .btn--single-post-btn {
    color: var(--clr-white);
    border-radius: var(--radius);
  }
  .btn--single-post-btn:first-child {
    margin-right: var(--margin-small);
  }
`;
export default SingleUserPost;
