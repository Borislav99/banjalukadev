// react stuff
import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar, Main, AdminSidebar } from "../../components/Author";
const UserSharedLayout = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <Main>
        <AdminSidebar />
        <Outlet />
      </Main>
    </>
  );
};

export default UserSharedLayout;
