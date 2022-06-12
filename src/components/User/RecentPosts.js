// react stuff
import React from "react";
// router
import { Link } from "react-router-dom";
// context
import { useUserContext } from "../../context/user_context";
// assets
import { copy } from "../../utils/fontawesome";
// styled components
import styled from "styled-components";
const RecentPosts = () => {
  // context
  const { posts } = useUserContext();
  const myPosts = posts.slice(0, 3);
  return (
    <Wrapper className="section">
      {/* section title */}
      <div className="section-title">
        <h2>
          posljednje <span>objave</span>
        </h2>
        <div className="section-title-divider"></div>
      </div>
      {/* end of section title */}
      {/* posts container */}
      <div className="posts-container">
        {myPosts.map((item) => {
          const { categoryName, authorName, id, main_img, title } = item;
          return (
            <article key={id} className="single-post">
              <div className="single-post-img-container">
                <img className="single-post-image" src={main_img} alt={title} />
                <Link to={`/objava/${id}`} className="single-post-img-link">
                  <i className="fontawesome">{copy}</i>
                </Link>
              </div>
              {/* single post footer */}
              <div className="single-post-footer">
                <span className="post-date">{title}</span> /
                <span className="post-date">{categoryName}</span> /
                <span className="post-date">{authorName}</span>
              </div>
              {/* end of single post footer */}
            </article>
          );
        })}
      </div>
      {/* end of posts container */}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: var(--clr-grey-10);
  /* border: 1px solid red; */
  .posts-container {
    padding: 0 var(--margin-small);
  }
  .single-post {
    margin-bottom: var(--margin-medium);
    transition: var(--transition);
  }
  .single-post:hover .single-post-img-link {
    opacity: 1;
    top: 50%;
  }
  .single-post:hover {
    opacity: 0.8;
  }
  .posts-container article img {
    border-radius: var(--radius);
  }
  .single-post-img-container {
    position: relative;
  }
  .single-post-img-link {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: calc(var(--padding-small) / 2) var(--padding-small);
    border-radius: 50%;
    background-color: var(--clr-primary-5);
    color: var(--clr-white);
    font-size: 1.5rem;
    transition: var(--transition);
    opacity: 0;
  }
  .single-post-footer {
    text-align: center;
    margin-top: var(--margin-small);
  }
  .single-post-footer span {
    font-weight: 999;
    color: var(--clr-grey-5);
    font-style: italic;
  }
  .single-post-image {
    height: 15rem;
    object-fit: cover;
  }
  @media only screen and (min-width: 800px) {
    .parallax-section {
      background: url("./assets/parallax.jpg") center/cover no-repeat fixed;
    }
    .posts-container {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      padding: 0 var(--margin-small);
    }
    .posts-container > article {
      flex: 0 0 calc(30% - 2rem);
    }
    .single-post {
      margin-bottom: 0;
    }
    .single-post-image {
      height: 20rem;
      object-fit: cover;
    }
  }
`;
export default RecentPosts;
