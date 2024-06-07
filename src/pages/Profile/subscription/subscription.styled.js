import styled from "styled-components";
import { Colors } from "../../../utils/colors";

export const AdItem = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 20px;
	border: ${({ isActive }) =>
		isActive ? "none" : `1px solid ${Colors.neutral_color.color200}`};
	background-color: ${({ isActive }) =>
		isActive ? `${Colors.primary_color.color600}` : "none"};
	border-radius: 8px;
	position: relative;
	overflow: hidden;
	width: 300px;
	// width: 100%;

	p.recommendedItem {
		background-color: ${Colors.primary_color.color500};
		padding: 10px 14px 10px 10px;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		color: ${Colors.white};
		font-size: 10px;
		position: absolute;
		top: 15px;
		right: -12px;
	}

	h3.adTitle {
		font-size: 17px;
		color: ${({ isActive }) =>
			isActive
				? `${Colors.primary_color.color500}`
				: `${Colors.neutral_color.color800}`};
	}

	div.priceContainer {
		display: flex;
		flex-direction: column;
		gap: 20px;
		border-bottom: 1px solid ${Colors.neutral_color.color100};
		padding-bottom: 20px;

		h2.priceTitle {
			font-size: 26px;
			color: ${({ isActive }) =>
				isActive
					? `${Colors.primary_color.color100}`
					: `${Colors.neutral_color.color800}`};
		}
	}

	div.priceSelectors {
		display: flex;
		gap: 10px;
	}

	div.featuresContainer {
		display: flex;
		flex-direction: column;
		gap: 20px;

		h3.featuresHeading {
			color: ${({ isActive }) =>
				isActive
					? `${Colors.primary_color.color100}`
					: `${Colors.neutral_color.color800}`};
			font-size: 15px;
		}

		p.featuresSubCaption {
			color: ${({ isActive }) =>
				isActive
					? `${Colors.primary_color.color100}`
					: `${Colors.neutral_color.color800}`};
			font-size: 12px;
		}

		div.descriptionText {
			color: ${({ isActive }) =>
				isActive
					? `${Colors.primary_color.color100}`
					: `${Colors.neutral_color.color800}`};
			font-size: 10px;
			display: flex;
			gap: 10px;
		}
	}

	div.paymentButtonsWrapper {
		display: flex;
		margin-top: auto;
		gap: 20px;
	}

	button.paymentButton {
		cursor: pointer;
		flex: 1;
		border: none;
		background: none;
		outline: none;
		color: ${({ isActive }) =>
			isActive
				? `${Colors.primary_color.color100}`
				: `${Colors.neutral_color.color800}`};
		border: ${({ isActive }) =>
			isActive ? "none" : `1px solid ${Colors.neutral_color.color200}`};
		background-color: ${({ isActive }) =>
			isActive ? `${Colors.primary_color.color500}` : "none"};
		padding: 15px;
		border-radius: 7px;
	}

	@media (max-width: 780px) {
		width: 100%;
	}
`;

export const AdItemCustomPriceButton = styled.button`
	border: none;
	background: none;
	outline: none;
	cursor: pointer;
	padding: 8px;
	border-radius: 20px;
	background-color: ${({ isSelected }) =>
		isSelected
			? `${Colors.primary_color.color500}`
			: `${Colors.primary_color.color100}`};
	color: ${({ isSelected }) =>
		isSelected ? `${Colors.white}` : `${Colors.neutral_color.color800}`};
	border: ${({ isSelected }) =>
		isSelected ? "none" : `1px solid ${Colors.neutral_color.color200}`};
	font-size: 10px;
`;

export const AdPricesContainer = styled.div`
	gap: 20px;
	padding: 0 20px;
	margin-top: 20px;
	justify-content: center;
	// place-content: center;
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 780px) {
		width: 100%;
	}
`;

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
	z-index: 1000; /* Make sure it's above other content */
`;

export const ModalContent = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	padding: 20px;
	width: 80%;
	max-width: 500px;
	z-index: 1001; /* Make sure it's above the overlay */
	height: f200px;
	border-radius: 10px;
	display: flex;
	gap: 20px;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	p {
		text-align: center;
		font-size: 20px;
		margin-top: 10px;
	}

	.closeButton {
		position: absolute;
		top: 2px;
		right: 2px;
		outline: none;
		border: none;
		background: noen;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 30px;
		height: 30px;
		border: 1px solid red;
		color: red;
		border-radius: 30px;
	}

	div {
		display: flex;
		gap: 10px;
		justify-content: flex-end;

		button {
			outline: none;
			border: none;
			background: noen;
			display: flex;
			padding: 20px;
			border-radius: 7px;
		}

		button.deleteBtn {
			color: ${Colors.white};
			background-color: ${Colors.error_color.color500};

			&:disabled {
				opacity: 0.5;
			}
		}
		button.exitBtn {
			border: 1px solid ${Colors.neutral_color.color700};

			&:disabled {
				opacity: 0.5;
			}
		}
	}
`;

export const PaymentWrapper = styled.div`
	margin: 120px 0 40px 0;

	h3.paymentHeading {
		padding: 20px;
		color: ${Colors.neutral_color.color900};
	}
`;


