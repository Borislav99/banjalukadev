// react stuff
import React from "react";
// router
import { Link } from "react-router-dom";
// context
import { useUserContext } from "../../context/user_context";
// assets
import { calendar, news, userIcon } from "../../utils/fontawesome";
import removeMarkdown from "remove-markdown";
// styled components
import styled from "styled-components";
const PostsSection = () => {
  const { posts, filteredPosts, categories, filterPosts } = useUserContext();
  return (
    <Wrapper className="section">
      {/* section center */}
      <div className="section-center">
        {/* news container */}
        <div className="news-container">
          {/* posts container */}
          <article className="posts-container">
            {/* single post */}
            {filteredPosts.map((item) => {
              const { authorName, categoryName, date, text, title, id } = item;
              return (
                <div key={id} className="single-post">
                  <h3>{title}</h3>
                  <div className="information-container">
                    <span>
                      <i>{calendar}</i>
                      <span className="fontawesome">{date}</span>
                    </span>
                    <span>
                      <i>{news}</i>
                      <span className="fontawesome">{categoryName}</span>
                    </span>
                    <span>
                      <i>{userIcon}</i>
                      <span className="fontawesome">{authorName}</span>
                    </span>
                  </div>
                  <p className="single-post-text">{removeMarkdown(text)}.</p>
                  <Link to={`/objava/${id}`} className="single-post-btn">
                    procitaj
                  </Link>
                </div>
              );
            })}
          </article>
          {/* end of posts container */}
          {/* categories container */}
          <article className="categories-container">
            <h3>kategorije</h3>
            {/* categories list */}
            <ul className="categories-list">
              <li
                className="single-category"
                onClick={() => {
                  filterPosts("sve");
                }}
              >
                <span className="category-name" href="#">
                  sve
                </span>
                <span>&nbsp; ({posts.length})</span>
              </li>
              {categories.map((item) => {
                const { id, name, counter } = item;
                if (counter > 0) {
                  return (
                    <li
                      key={id}
                      className="single-category"
                      onClick={() => {
                        filterPosts(name);
                      }}
                    >
                      <span className="category-name" href="#">
                        {name}
                      </span>
                      <span>&nbsp; ({counter})</span>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            {/* end of categories list */}
            <p>
              Filtrirajte novosti po kategorijama. Potrebno je samo izabrati
              zeljenu kategoriju.
            </p>
          </article>
          {/* end of categories container */}
        </div>
        {/* end of new container */}
      </div>
      {/* end of section center */}
    </Wrapper>
  );
};
// styled components
const Wrapper = styled.section`
  min-height: 100vh;
  .news-container > article {
    margin-bottom: var(--margin-small);
  }
  .information-container span {
    color: var(--clr-grey-5);
  }
  .information-container span:not(:last-child) {
    margin-right: calc(var(--margin-small) / 2);
  }
  .single-post:not(:last-child) {
    margin-bottom: var(--margin-small);
  }
  .single-post-btn {
    color: var(--clr-primary-5);
    text-transform: uppercase;
    font-weight: 999;
    transition: var(--transition);
  }
  .single-post-btn:hover {
    color: var(--clr-black-1);
  }
  .categories-container p {
    margin-top: var(--margin-small);
    font-weight: 999;
  }
  .categories-list {
    display: block;
  }
  .categories-list li {
    display: block;
  }
  .categories-list li a {
    color: var(--clr-primary-5);
  }
  .single-category .category-name {
    color: var(--clr-primary-5);
  }
  .single-category .category-name:hover {
    cursor: pointer;
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
    .categories-container {
      flex: 0 0 calc(30% - 2rem);
    }
  }
`;
export default PostsSection;
