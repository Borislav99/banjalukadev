// react stuff
import React from "react";
// components
import { AddCategory } from "../../components/Author";
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
      <AddCategory />
    </>
  );
};

export default AuthorHomepage;
