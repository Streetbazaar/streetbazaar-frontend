import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./sidebar/SideBar";
import { ProfileOutletDiv } from "./styles/styledComponents";

export default function ProfileLayout() {
	return (
		<>
			<Header />
			<div style={{ display: "flex" }}>
				<SideBar />
				<ProfileOutletDiv>
					<Outlet />
				</ProfileOutletDiv>
			</div>
		</>
	);
}
