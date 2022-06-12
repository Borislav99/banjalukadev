import React from "react";
// general components
import { Loading } from "../../components/";
// components
import {
  Banner,
  Information,
  Parralax,
  RecentPosts,
} from "../../components/User";
// context stuff
import { useUserContext } from "../../context/user_context";
const Homepage = () => {
  const { loading } = useUserContext();
  // use effect
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Banner />
        <Information />
        <Parralax />
        <RecentPosts />
      </>
    );
  }
};

export default Homepage;
