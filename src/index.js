import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./context/user_context";
import { AuthorProvider } from "./context/author_context";
ReactDOM.render(
  <React.StrictMode>
    <AuthorProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthorProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
