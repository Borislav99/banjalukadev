// react stuff
import React from "react";
// context
import { useAuthorContext } from "../../context/author_context";
// components
import { AllCategories } from "../../components/Author";
import { Loading } from "../../components/Author";
const AuthorCategories = () => {
  // context
  const { loading } = useAuthorContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <AllCategories />
    </>
  );
};

export default AuthorCategories;
