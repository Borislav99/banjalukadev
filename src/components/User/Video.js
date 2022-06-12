// react stuff
import React from "react";
import { closeIcon } from "../../utils/fontawesome";
import ReactPlayer from "react-player";
// context stuff
import { useUserContext } from "../../context/user_context";
// styled components
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
const Youtube = () => {
  const { tutorial } = useUserContext();
  if (tutorial) {
    return (
      <ThemeProvider theme={theme}>
        <Video />
      </ThemeProvider>
    );
  } else {
    return <Video />;
  }
};
const Video = () => {
  const {
    setTutorial,
    singleProduct: { youtube },
  } = useUserContext();
  return (
    <Wrapper>
      <article className="youtube-container">
        {/* header */}
        <div className="youtube-container-header">
          <div>
            <span>kurs</span>
            menadzer
          </div>
          <span
            className="close-youtube-btn"
            onClick={() => {
              setTutorial(false);
            }}
          >
            <i>{closeIcon}</i>
          </span>
        </div>
        {/* end of header */}
        {/* video container */}
        <ReactPlayer
          className="react-player"
          controls
          width="100%"
          height="100%"
          url={youtube}
        />
        {/* end of video container */}
      </article>
    </Wrapper>
  );
};
// styled components
const theme = {
  show: "flex !important",
};
const Wrapper = styled.section`
  /* ---------- FILE UPLOAD ---------- */
  position: fixed;
  height: 100%;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: none;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100000;
  display: ${(props) => props.theme.show};
  .youtube-container {
    position: absolute;
    height: 50vh;
    width: 80vw;
    opacity: 0;
    background: var(--clr-black-1);
    border-radius: var(--radius);
    transform: translateY(10rem);
    transition: var(--transition);
    animation: youtubeAnimation 1s 0.5s 1;
    animation-fill-mode: forwards;
  }
  .youtube-container-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: calc(var(--padding-small) / 2);
  }
  .youtube-container-header span {
    font-size: 1.25rem;
    transition: var(--transition);
    color: var(--clr-white);
  }
  .close-youtube-btn:hover {
    color: var(--clr-red);
    cursor: pointer;
  }
  .youtube-container-header div {
    margin-right: var(--margin-medium);
    text-transform: uppercase;
    font-size: 1.25rem;
    color: var(--clr-white);
    transition: var(--transition);
  }
  .youtube-container-header div span {
    color: var(--clr-primary-5);
  }
  @media screen and (min-width: 567px) {
    .youtube-container {
      height: 60vh;
    }
    .youtube-container-header span {
      font-size: 1.5rem;
    }
    .youtube-container-header div {
      margin-right: calc(var(--margin-big) * 2);
      text-transform: uppercase;
      font-size: 1.5rem;
      color: var(--clr-white);
    }
  }
  @media screen and (min-width: 1170px) {
    .youtube-container {
      height: 80vh;
    }
    .youtube-container-header span {
      font-size: 2rem;
    }
    .youtube-container-header div {
      margin-right: calc(var(--margin-big) * 2);
      text-transform: uppercase;
      font-size: 2rem;
      color: var(--clr-white);
    }
  }
  @keyframes youtubeAnimation {
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  /* ---------- END OF FILE UPLOAD ---------- */
`;
export default Youtube;
