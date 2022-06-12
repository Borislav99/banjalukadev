// react stuff
import React from "react";
// components
import { EditCategory } from "../../components/Author";
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
        <EditCategory />
      </>
    );
  }
};

export default AuthorHomepage;
