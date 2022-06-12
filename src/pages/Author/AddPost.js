// react stuff
import React from "react";
// components
import {
  Header,
  Main,
  AdminSidebar,
  AddPost,
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
  }
  return (
    <>
      <AddPost />
    </>
  );
};

export default AuthorHomepage;
