import React from "react";
import { Outlet } from "react-router-dom";
import PageNav from "./PageNav";

function AppLayout() {
  return (
    <>
      <PageNav />
      <Outlet />
    </>
  );
}

export default AppLayout;
