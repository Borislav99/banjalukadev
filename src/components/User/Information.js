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
        <div className="portal-section-container">
          {portalInformation.map((item, index) => {
            const { title, text } = item;
            return (
              <article key={index} className="single-portal">
                <h4>{title}</h4>
                <p>{text}</p>
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
  .portal-section-container h4 {
    text-align: center;
    font-size: 1rem;
  }
  @media only screen and (min-width: 500px) {
    .portal-section-container h4 {
      font-size: 1.5rem;
    }
  }
  @media only screen and (min-width: 800px) {
    .portal-section-container {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
    }

    .portal-section-container > article {
      flex: 0 0 calc(33.33% - var(--margin-small));
    }
    .portal-section-container h4 {
      font-size: 2rem;
    }
  }
`;
export default Information;
