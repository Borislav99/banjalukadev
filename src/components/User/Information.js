// react stuff
import React from "react";
// assets
import { portalInformation } from "../../utils/constants";
// styled components
import styled from "styled-components";
const Information = () => {
  return (
    // portal section
    <Wrapper className="section" id="portal-section">
      <div className="section-center">
        {/* section title */}
        <div className="section-title">
          <h2>
            banjaluka <span>dev</span>
          </h2>
          <div className="section-title-divider"></div>
        </div>
        {/* end of section title */}
        <div className="portal-section__container">
          {portalInformation.map((item, index) => {
            const { title, text } = item;
            return (
              <article key={index} className="single-portal">
                <h4 className="single-portal__title">{title}</h4>
                <p className="single-portal__text">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
    // end of portal section
  );
};
const Wrapper = styled.section`
  background-color: var(--clr-grey-10);
  .single-portal__title {
    text-align: center;
    font-size: 1rem;
  }
  @media only screen and (min-width: 500px) {
    .single-portal__title {
      font-size: 1.5rem;
    }
  }
  @media only screen and (min-width: 800px) {
    .portal-section__container {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
    }

    .portal-section__container > article {
      flex: 0 0 calc(33.33% - var(--margin-small));
    }
    .single-portal__title {
      font-size: 2rem;
    }
  }
`;
export default Information;
