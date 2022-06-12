// react stuff
import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, Sidebar } from "../../components/User";
const UserSharedLayout = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserSharedLayout;
