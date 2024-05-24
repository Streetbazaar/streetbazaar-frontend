import React from "react";
import { FeedbackEmpty } from "../../pages/Profile/feedback/feedback.styled";
import trashImg from "../../assets/images/CharcoDeleteTrash.png";
import { useNavigate } from "react-router-dom";

const EmptyFeedback = () => {
	const navigate = useNavigate();
	return (
		<FeedbackEmpty>
			<img src={trashImg} alt="error" />
			<div>
				<p>You currently do not have any ads in review</p>
				<span>We reivew ads before posting</span>
			</div>
			<div className="buttonGroup">
				<button onClick={() => navigate("/")}>Go to Home</button>
				<button onClick={() => navigate("/sell-your-product/post-advert")}>
					Post Ad
				</button>
			</div>
		</FeedbackEmpty>
	);
};

export default EmptyFeedback;
