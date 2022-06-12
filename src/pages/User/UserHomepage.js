import React, { useEffect } from "react";
// general components
import { Loading } from "../../components/";
// components
import {
  Header,
  Banner,
  Information,
  Parralax,
  RecentPosts,
  Footer,
  Sidebar,
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
