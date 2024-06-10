import { InlineIcon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AdPageOne from "./AdPageOne";
import AdPageTwo from "./AdPageTwo";
import {
	PlaceAdContainer,
	PlaceAdWrapper,
	StepItem,
	StepLabel,
	StepLine,
	StepNumber,
	StepsContainer,
} from "./PlaceAd.styled";

const steps = [
	{ id: 1, label: "About Ad" },
	{ id: 2, label: "Product Information" },
];

export default function PlaceAd() {
	const { userProfile } = useSelector((state) => state.user);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const pageParam = searchParams.get("page");
		const initialPage = parseInt(pageParam, 10) || 1;
		setCurrentPage(initialPage);
	}, []);

	const navigateToNextPage = () => {
		if (currentPage < 3) {
			const searchParams = new URLSearchParams(window.location.search);
			searchParams.set("page", (currentPage + 1).toString());
			window.history.pushState({}, "", `?${searchParams.toString()}`);
			setCurrentPage(currentPage + 1);
			if (userProfile?.is_staff) return;
		}
	};

	const navigateToPreviousPage = () => {
		if (currentPage > 1) {
			const searchParams = new URLSearchParams(window.location.search);
			searchParams.set("page", (currentPage - 1).toString());
			window.history.pushState({}, "", `?${searchParams.toString()}`);
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<PlaceAdContainer>
			{currentPage > 1 && (
				<button className="goBack" onClick={navigateToPreviousPage}>
					<InlineIcon icon="ion:chevron-back-outline" />
					Back to previous page
				</button>
			)}

			<PlaceAdWrapper>
				<div className="headingContainer">
					<h3 className="postAdHeading">Post Ad</h3>
					<p className="postAdCaptionText">
						This will just take 5 mins of your time
					</p>
				</div>

				<StepsContainer>
					{steps.map(({ label, id }, index) => {
						const isActive = currentPage === id;
						const isStaff = userProfile.is_staff;

						return (
							<>
								{isStaff && id === 3 ? null : (
									<StepItem>
										<StepNumber isActive={isActive}>{id}</StepNumber>
										<StepLabel isActive={isActive}>{label}</StepLabel>
									</StepItem>
								)}
								{index === 0 && <StepLine />}
							</>
						);
					})}
				</StepsContainer>

				{currentPage === 1 && <AdPageOne onNextPage={navigateToNextPage} />}
				{currentPage === 2 && <AdPageTwo onNextPage={navigateToNextPage} />}
			</PlaceAdWrapper>
		</PlaceAdContainer>
	);
}
