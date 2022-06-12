// react stuff
import React from "react";
// general components
import { Loading } from "../../components/Author";
// components
import { AllPosts } from "../../components/Author";
// context
import { useAuthorContext } from "../../context/author_context";
const AuthorPosts = () => {
  // context
  const { loading } = useAuthorContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <AllPosts />
    </>
  );
};

export default AuthorPosts;
