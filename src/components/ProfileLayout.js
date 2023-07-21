import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./sidebar/SideBar";

export default function ProfileLayout() {
  return (
    <>
      <Header />
      <div style={{display: "flex"}}>
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}
