// react stuff
import React from "react";
// styled components
import styled from "styled-components";
const UserAbout = () => {
  return (
    <Wrapper className="section">
      <div className="map-container">
        <iframe
          className="map-container__map"
          title="random"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.1465196129298!2d17.18051111580294!3d44.7574264883435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e032f79611053%3A0x709d8f0ddd973d28!2sVojvode%20Pere%20Krece%2C%20Banja%20Luka%2078000!5e0!3m2!1sen!2sba!4v1651759758286!5m2!1sen!2sba"
          width="600"
          height="450"
          style={{
            border: 0,
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="section-center contact-container">
        {/* email */}
        <article className="email-container">
          <h4 className="email-container__title">posalji nam mejl</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="email-container__form"
          >
            <div className="email-container__form-control">
              <label className="email-container__form-label" htmlFor="name">
                vase ime
              </label>
              <input
                className="email-container__form-input"
                type="text"
                name="name"
                id=""
              />
            </div>
            <div className="email-container__form-control">
              <label className="email-container__form-label" htmlFor="email">
                vase email
              </label>
              <input
                className="email-container__form-input"
                type="text"
                name="email"
                id=""
              />
            </div>
            <div className="email-container__form-control">
              <label className="email-container__form-label" htmlFor="msg">
                vasa poruka
              </label>
              <input
                className="email-container__form-input"
                type="text"
                name="msg"
                id=""
              />
            </div>
            <input className="btn" type="submit" value="posalji" />
          </form>
        </article>
        {/* end of email */}
        {/* how to */}
        <article className="how-to">
          <h4 className="how-to__title">kako ces nas kontaktirati? </h4>
          <p className="how-to__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            quibusdam quaerat, quasi rerum modi molestias fugiat quod impedit
            odio expedita.
          </p>
          <p className="how-to__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            dolor. Facere reprehenderit non dolorum magnam debitis itaque
            blanditiis incidunt voluptatibus.
          </p>
        </article>
        {/* end of how to */}
        {/* details */}
        <article className="details">
          <h4>detalji</h4>
          <p className="single-details">
            sjediste :{" "}
            <span className="single-details__text">Pere Krece 11</span>
          </p>
          <p className="single-details">
            telefon : <span className="single-details__text">066066066</span>
          </p>
          <p className="single-details">
            email : <span className="single-details__text">info@info.com</span>
          </p>
        </article>
        {/* end of details */}
      </div>
    </Wrapper>
  );
};
// styled components
const Wrapper = styled.section`
  min-height: 100vh;
  .map-container__map {
    width: 100%;
  }
  .contact-container {
    margin-top: var(--margin-small);
  }
  .contact-container > article:not(:last-child) {
    margin-bottom: var(--margin-small);
  }
  .email-container__form-control:not(:last-child) {
    margin-bottom: var(--margin-small);
  }
  .email-container__form-label {
    display: block;
    text-transform: uppercase;
    font-weight: 999;
    color: var(--clr-black-1);
    margin-bottom: calc(var(--padding-small) / 4);
  }
  .email-container__form-input {
    width: 100%;
    padding: calc(var(--padding-small) / 4);
  }
  .single-details {
    text-transform: uppercase;
    color: var(--clr-black-1);
    font-weight: 999;
  }
  .single-details__text {
    color: var(--clr-grey-5);
    text-transform: none;
    font-weight: 500;
  }
  @media only screen and (min-width: 800px) {
    .contact-container {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
    }
    .contact-container > article {
      flex: 0 0 calc(33.33% - 2rem);
      align-self: center;
    }
    .contact-container > article:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;
export default UserAbout;
