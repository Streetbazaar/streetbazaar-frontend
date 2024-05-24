import styled from "styled-components";
import { Colors } from "../../../utils/colors";

export const FeedBackContainer = styled.div`
	max-width: 1440px;
	margin-top: 120px;

	h3.feedbackMainHeading {
		padding: 20px;
		color: ${Colors.neutral_color.color900};
	}

	div.contentContainer {
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;

		div.userProfile {
			display: none;
			margin-top: 20px;
			gap: 10px;
			align-items: center;

			div.imageWrapper {
				display: flex;
				height: 50px;
				width: 50px;
				border-radius: 50px;
				border: 2px solid ${Colors.primary_color.color200};
				align-items: center;
				justify-content: center;

				img {
					height: 40px;
					width: 40px;
					border-radius: 50px;
				}
			}

			h3 {
				font-size: 16px;
				font-weight: 400;
				color: ${Colors.neutral_color.color700};
				text-transform: capitalize;
			}
		}

		div.buttonFilterList {
			display: flex;
			gap: 20px;
		}

		div.feedbackWrapper {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
			gap: 15px;
		}
	}

	@media (max-width: 780px) {
		div.contentContainer {
			// background-color: ${Colors.neutral_color.color100};
			div.userProfile {
				display: flex;
			}
		}
	}
`;
// 	display: flex;
// 	flex-direction: column;
// 	gap: 15px;
// 	padding: 10px;
// 	border: 1px solid ${Colors.neutral_color.color200};
// 	width: 350px;
// 	height: auto;
// 	border-radius: 8px;
// 	justify-content: center;

// 	img.userPhoto {
// 		width: 50px;
// 		height: 50px;
// 		border-radius: 50px;
// 	}

// 	h4.userName {
// 		font-size: 19px;
// 		color: ${Colors.neutral_color.color900};
// 	}

// 	div.dateTimeWrapper {
// 		display: flex;
// 		gap: 5px;
// 		align-items: center;
// 		color: ${Colors.neutral_color.color600};
// 		font-size: 12px;
// 	}

// 	h3.productName {
// 		color: ${Colors.neutral_color.color900};
// 		font-size: 16px;
// 	}

// 	article.productComment {
// 		font-size: 12px;
// 		line-height: 17px;
// 		color: ${Colors.neutral_color.color800};
// 	}

// 	div.productImagesWrapper {
// 		display: flex;
// 		flex-wrap: wrap;
// 		gap: 8px;

// 		img.productImage {
// 			width: 35px;
// 			height: 35px;
// 		}
// 	}

// 	div.ratingWrapper {
// 		display: flex;
// 		gap: 10px;
// 		align-items: center;

// 		div.starRating {
// 			display: flex;
// 			gap: 4px;
// 		}
// 		p.ratingText {
// 			color: ${Colors.neutral_color.color800};
// 			font-size: 12px;
// 		}
// 	}

// 	@media (max-width: 780px) {
// 		width: 47%;
// 		height: auto;
// 		background-color: ${Colors.white};

// 		div.dateTimeWrapper {
// 			font-size: 10px;
// 			gap: 2px;
// 		}

// 		article.productComment {
// 			font-size: 10px;
// 		}

// 		div.productImagesWrapper {
// 			img.productImage {
// 				width: 30px;
// 				height: 30px;
// 			}
// 		}

// 		div.ratingWrapper {
// 			div.starRating {
// 				display: none;
// 			}
// 			p.ratingText {
// 				font-size: 10px;
// 			}
// 		}
// 	}
// `;

export const FeedbackItem = styled.div`
	border: 1px solid ${Colors.neutral_color.color100};
	border-radius: 4px;
	padding: 16px;

	.user-detail {
		margin-bottom: 10px;
		img {
			width: 40px;
			height: 40px;
			object-fit: "cover";
			object-position: "center";
			border-radius: 50%;
			margin-bottom: 10px;
		}
		h3 {
			font-weight: 700;
			line-height: 19.36px;
			font-size: 1rem;
			color: ${Colors.neutral_color.color900};
		}
		.datetime {
			display: flex;
			align-items: center;
			gap: 5px;
			padding: 8px 0;
			span {
				color: ${Colors.neutral_color.color500};
				font-weight: 500;
				font-size: 0.625rem;
				line-height: 12.1px;
			}
		}
	}
	.content {
		margin-bottom: 10px;
		h4 {
			font-weight: 700;
			font-size: 0.8125rem;
			line-height: 15.73px;
			color: ${Colors.neutral_color.color900};
		}
		p {
			font-size: 0.625rem;
			font-weight: 500;
			color: ${Colors.neutral_color.color900};
			line-height: 16px;
			padding: 5px 0;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
		.images {
			display: inline-flex;
			gap: 5px;
			img {
				width: 40px;
				height: 40px;
				object-fit: "cover";
				object-position: "center";
			}
		}
	}

	.rating {
		display: flex;
		align-items: center;
		gap: 5px;
		span {
			font-size: 0.625rem;
			font-weight: 500;
			line-height: 16px;
			color: ${Colors.neutral_color.color900};
		}
	}
`;

export const FeedbackEmpty = styled.div`
	background: #f7f8fa;
	padding: 90px 0;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
	text-align: center;
	height: 100%;

	img {
		margin: 0 auto;
	}

	p {
		color: ${Colors.neutral_color.color900};
		font-weight: 600;
		font-size: 1rem;
		line-height: 19.36px;
		padding-bottom: 10px;
	}
	span {
		color: ${Colors.neutral_color.color900};
		font-weight: 400;
		font-size: 0.8125rem;
		line-height: 15.73px;
	}

	.buttonGroup {
		display: flex;
		justify-content: center;
		gap: 20px;

		button {
			border: none;
			outline: none;
			background: none;
			font-size: 17px;
			padding: 15px 20px;
			border-radius: 8px;
			cursor: pointer;

			&:nth-child(1) {
				background-color: ${Colors.primary_color.color500};
				color: white;
			}
			&:nth-child(2) {
				border: 1px solid ${Colors.neutral_color.color500};
				color: ${Colors.neutral_color.color700};
			}
		}
	}

	@media (max-width: 780px) {
		padding: 40px 10px;
	}
`;
