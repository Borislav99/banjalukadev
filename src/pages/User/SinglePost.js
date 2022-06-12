import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// general components
import { Loading } from "../../components/index";
// user components
import {
  Header,
  PageHero,
  SingleUserPost,
  Sidebar,
  Footer,
  Video,
} from "../../components/User";
// context
import { useUserContext } from "../../context/user_context";
const SinglePost = () => {
  const { id } = useParams();
  const { getSinglePost, singlePost } = useUserContext();
  useEffect(() => {
    getSinglePost(id);
  }, [id]);
  if (singlePost) {
    return <Loading />;
  } else {
    return (
      <>
        <Video />
        <PageHero title={"objava"} />
        <SingleUserPost />
      </>
    );
  }
};

export default SinglePost;
