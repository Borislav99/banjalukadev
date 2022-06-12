// react stuff
import { React, useState, useEffect } from "react";
// assets
import { userIcon, lockIcon } from "../utils/fontawesome";
// context stuff
import { useAuthorContext } from "../context/author_context";
// router
import { Link, useNavigate } from "react-router-dom";
// styled components
import styled from "styled-components";
const Error = () => {
  const history = useNavigate();
  // context stuff
  const { loginAuthor, loginLoading, loginError, isAuth } = useAuthorContext();
  // states
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // check if auth
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (isAuth) {
      history("/autor");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);
  return (
    <Body>
      <Wrapper>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginAuthor(name, password);
          }}
        >
          {loginError ? (
            <div className="feedback-container">
              <p>Unesite validne podatke u formu. </p>
            </div>
          ) : null}
          <div className="form-input">
            <label className="input-icon" htmlFor="username">
              <i className="fontawesome">{userIcon}</i>
            </label>
            <input
              type="text"
              name=""
              id="username"
              placeholder="korisnicko ime"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-input">
            <label className="input-icon" htmlFor="password">
              <i className="fontawesome">{lockIcon}</i>
            </label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="lozinka"
              required="required"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <input
            type="submit"
            className="btn login-btn"
            value={loginLoading ? "ucitavanje..." : "prijava"}
            disabled={loginLoading ? true : false}
          />
        </form>
        <p>
          Dobrodosli autore! <Link to={"/sr"}>Nazad na pocetnu. </Link>
        </p>
      </Wrapper>
    </Body>
  );
};
// styled components
const Wrapper = styled.div`
  /* ---------- LOGIN PAGE ---------- */
  transition: var(--transition);
  opacity: 0;
  transform: translateY(5rem);
  animation: moveIn 2s 1;
  animation-fill-mode: forwards;
  padding: 0rem calc(var(--padding-small) / 2);
  form {
    margin-bottom: var(--margin-small);
  }
  .form-input {
    display: flex;
  }
  .form-input:not(:last-child) {
    margin-bottom: calc(var(--margin-small) / 2);
  }
  .form-input input {
    background-color: var(--clr-primary-3);
    border: none;
    outline: none;
    border-top-right-radius: calc(var(--radius) / 2);
    border-bottom-right-radius: calc(var(--radius) / 2);
    font-size: 1rem;
    width: 100%;
    color: var(--clr-white);
    padding: calc(var(--padding-small) / 4) calc(var(--padding-small) / 2);
    transition: var(--transition);
  }
  .form-input input:hover {
    background-color: var(--clr-primary-4);
  }
  .form-input input::placeholder {
    color: var(--clr-black-1);
    text-transform: capitalize;
  }
  .input-icon {
    background-color: var(--clr-primary-1);
    color: white;
    padding: calc(var(--padding-small) / 2) var(--padding-small);
    font-size: 0.5rem;
    border-top-left-radius: calc(var(--radius) / 2);
    border-bottom-left-radius: calc(var(--radius) / 2);
  }
  .login-btn {
    border-radius: calc(var(--radius) / 2);
    width: 100%;
  }
  p {
    text-align: center;
    font-size: 0.75rem;
    font-weight: lighter;
  }
  p a {
    color: var(--clr-white);
  }
  .feedback-container {
    animation-fill-mode: forwards;
    animation: error 1s 1 !important;
  }
  .feedback-container p {
    font-size: 1rem;
    color: var(--clr-red);
  }
  @media screen and (min-width: 567px) {
    .form-input input {
      font-size: 1.5rem;
    }
    .input-icon {
      font-size: 0.75rem;
    }
    p {
      font-size: 1.25rem;
    }
    .login-btn {
      font-size: 1.5rem;
    }
  }
  @keyframes moveIn {
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes error {
    0% {
      opacity: 1;
      transform: translateX(-1rem);
    }
    20% {
      transform: translateX(1rem);
    }
    60% {
      transform: translateX(-1rem);
    }
    80% {
      transform: translateX(1rem);
    }
    100% {
      transform: translateX(0);
    }
  }
  .disabled-btn {
    pointer-events: none;
  }
  .disabled-btn:hover {
    cursor: not-allowed;
  }
`;
const Body = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-black-1);
`;
export default Error;
