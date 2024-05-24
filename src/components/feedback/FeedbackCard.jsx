import React from "react";
import Stars from "./Stars";
import { InlineIcon } from "@iconify/react";
import { FeedbackItem } from "../../pages/Profile/feedback/feedback.styled";

const FeedbackCard = ({ feedback }) => {
	// console.log(feedback);
	return (
		<FeedbackItem>
			<div className="user-detail">
				<img src={feedback.userPhoto} alt="User display" />
				<h3>{feedback.userName}</h3>
				<div className="datetime">
					<span>{feedback.date}</span>
					<InlineIcon color="#9EA6AF" icon="mdi:dot" />
					<span>{feedback.time}</span>
				</div>
			</div>
			<div className="content">
				<h4>{feedback.productName}</h4>
				<p>{feedback.comment}</p>
				<div className="images">
					{feedback.images.map((img, index) => {
						return <img key={index} src={img} alt="product" />;
					})}
				</div>
			</div>
			<div className="rating">
				<Stars rating={feedback.rating} />
				<span>{feedback.rating} Ratings</span>
			</div>
		</FeedbackItem>
	);
};

export default FeedbackCard;
