import { InlineIcon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ButtonFilter } from "../advert/advert.styled";
import { FeedBackContainer } from "./feedback.styled";
import FeedbackCard from "../../../components/feedback/FeedbackCard";
import EmptyFeedback from "../../../components/feedback/EmptyFeedback";
import Pagination from "@mui/material/Pagination";
import FeedbackCardLoader from "../../../components/feedback/FeedbackCardLoader";

export default function FeedBack() {
	const { userProfile } = useSelector((store) => store.user);
	const { feedbacks } = useSelector((store) => store.feedback);
	const [active, setActive] = useState("Sent");
	const [isLoading, setIsLoading] = useState(false);
	const [meta, setMeta] = useState({
		currentPage: 1,
		totalPage: 5,
	});

	const handleButtonClick = (val) => {
		setActive(val);
	};
	const buttonData = [
		{ icon: "lucide:message-circle", label: "Reviews" },
		{ icon: "iconamoon:edit-duotone", label: "Sent" },
	];

	const handlePageChange = (_, value) => {
		setMeta((prev) => {
			return {
				...prev,
				currentPage: value,
			};
		});
	};

	return (
		<FeedBackContainer>
			<h3 className="feedbackMainHeading">Feedback</h3>

			<div className="contentContainer">
				<div className="userProfile">
					<div className="imageWrapper">
						<img
							src={
								userProfile?.profile_image_url
									? userProfile?.profile_image_url
									: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
							}
							alt="profile"
						/>
					</div>
					<h3>{`${userProfile?.first_name} ${userProfile?.last_name}`}</h3>
				</div>
				<div className="buttonFilterList">
					{buttonData.map((button, index) => (
						<ButtonFilter
							key={button.label}
							isActive={button.label === active}
							onClick={() => handleButtonClick(button.label)}
						>
							<InlineIcon icon={button.icon} />
							{button.label}
						</ButtonFilter>
					))}
				</div>
				<h3 style={{ color: "#8e97a1" }}>Coming soon 🚧 </h3>

				{/* {feedbacks.length > 0 && !isLoading && (
					<div>
						<div className="feedbackWrapper">
							{feedbacks?.map((feedback) => {
								return <FeedbackCard key={feedback.id} feedback={feedback} />;
							})}
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								margin: "15px 0",
							}}
						>
							<Pagination
								page={meta.currentPage}
								onChange={handlePageChange}
								hideNextButton={
									meta.currentPage === meta.totalPage ? true : false
								}
								hidePrevButton={meta.currentPage === 1 ? true : false}
								color="primary"
								count={5}
							/>
						</div>
					</div>
				)} */}

				{!isLoading && feedbacks.length < 1 && <EmptyFeedback />}
				<div className="feedbackWrapper">
					{isLoading &&
						["", "", "", "", "", ""].map((_, i) => {
							return <FeedbackCardLoader key={i} />;
						})}
				</div>
			</div>
		</FeedBackContainer>
	);
}
