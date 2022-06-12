import React from "react";
// components
import {
  Header,
  PageHero,
  PostsSection,
  Sidebar,
  Footer,
} from "../../components/User";
const Posts = () => {
  return (
    <>
      <PageHero title={"objave"} />
      <PostsSection />
    </>
  );
};

export default Posts;
