import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// general components
import { Loading } from "../../components/index";
// user components
import { PageHero, SingleUserPost, Video } from "../../components/User";
// context
import { useUserContext } from "../../context/user_context";
const SinglePost = () => {
  const { id } = useParams();
  const { getSinglePost, singlePost } = useUserContext();
  useEffect(() => {
    getSinglePost(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
