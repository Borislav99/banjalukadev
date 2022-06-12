// react stuff
import React from "react";
// components
import {
  Header,
  Main,
  AdminSidebar,
  EditPost,
  Sidebar,
} from "../../components/Author";
// context
import { useAuthorContext } from "../../context/author_context";
// assets
import { Loading } from "../../components/Author";
const AuthorHomepage = () => {
  const { loading } = useAuthorContext();
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <EditPost />
      </>
    );
  }
};

export default AuthorHomepage;
