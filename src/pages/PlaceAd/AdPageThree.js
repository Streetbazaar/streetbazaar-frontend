import { InlineIcon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import toast from "react-hot-toast";
import { usePaystackPayment } from "react-paystack";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PAY_FOR_ADVERT } from "../../components/api";
import Spinner from "../../components/spinner/Spiner";
import { clearFields, fetchPackages } from "../../features/inputSlice";
import { addCommas } from "../../functions";
import {
	AdItem,
	AdItemCustomPriceButton,
	AdPricesContainer,
	ModalContent,
	ModalOverlay,
} from "./PlaceAd.styled";

// you can call this function anything

export const ConfirmationModal = ({ isOpen, onClose, url }) => {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<>
			<ModalOverlay onClick={onClose}></ModalOverlay>
			<ModalContent>
				<button className="closeButton" onClick={onClose}>
					X
				</button>
				<p>Please wait while we verify your transaction....</p>
			</ModalContent>
		</>,
		document.body
	);
};

export default function AdPageThree() {
	const [priceType, setPriceType] = useState({});
	const { packages, packageStatus, adId } = useSelector((state) => state.input);
	const { token, userProfile } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const [amountVal, setAmountVal] = useState(0);
	const [selectedPackage, setSelectedPackage] = useState("");
	const [selectedPackageId, setSelectedPackageId] = useState("");
	const navigate = useNavigate();

	const payForAd = async (adId, packageId, packageType, reference, token) => {
		try {
			const response = await PAY_FOR_ADVERT(
				adId,
				packageId,
				packageType,
				reference,
				token
			);
			if (response.status === "successful") {
				toast.success("Advert submitted for review");
				closeModal();
				dispatch(clearFields());
				navigate("/");
			} else if (response.status === "pending") {
				toast.success("Your transaction is pending");
				closeModal();
				dispatch(clearFields());
				navigate("/");
			} else {
				toast.error(`Your transaction ${response.status}`);
				closeModal();
			}
		} catch (err) {
			toast.error(err.message);
			closeModal();
		}
	};

	const config = {
		email: userProfile?.email,
		amount: amountVal * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
		// publicKey: process.env.REACT_APP_PAYSTACK_LIVE_KEY,
		publicKey: process.env.REACT_APP_PAYSTACK_TEST_KEY,
	};
	const initializePayment = usePaystackPayment(config);

	const [isModalOpen, setModalOpen] = useState(false);
	const [externalUrl, setExternalUrl] = ""; // Replace with your URL

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	const onSuccess = (reference) => {

    console.log("CALLED")
		// Implementation for whatever you want to do with reference and after success call.

		console.log(
			reference?.reference,
			selectedPackage,
			selectedPackageId,
			amountVal
		);

		payForAd(
			adId,
			selectedPackageId,
			selectedPackage,
			reference?.reference,
			token
		);
		openModal();
	};

	// you can call this function anything
	const onClose = (reference) => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log("closed", reference);
	};

	useEffect(() => {
		dispatch(fetchPackages(token));
	}, []);

	useEffect(() => {
		initializePayment(onSuccess, onClose);
	}, [amountVal, selectedPackage]);

	const togglePriceType = (itemId, type) => {
		setPriceType((prevState) => ({
			...prevState,
			[itemId]: type,
		}));
	};

	return (
		<motion.main
			className="main__container"
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			exit={{ x: "100%", opacity: 0 }}
			transition={{ duration: 10, type: "spring", stiffness: 100 }}
		>
			{" "}
			<AdPricesContainer>
				{packageStatus === "loading" ? (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Spinner />
					</div>
				) : (
					<>
						{packages &&
							[...packages] // Create a shallow copy of the packages array
								.sort((a, b) => {
									const priceTypeA = priceType[a.id] || "weekly";
									const priceTypeB = priceType[b.id] || "weekly";
									// console.log(priceTypeA, priceTypeB, "from line 163", a, b);

									return Number(a?.weekly_amount) - Number(b.weekly_amount);
								})
								?.map((item, i) => {
									const isActive = item.title === "Standard Plan";
									const currentPriceType = priceType[item.id] || "weekly"; // Default to weekly if not set
									// Debugging: Log the raw content of item.description
									// console.log("Raw item.description:", item.description);
									const price =
										currentPriceType === "weekly"
											? item.weekly_amount
											: item.monthly_amount;
									const descriptionArray = item.description.split("/\r?\n/");
									// console.log(descriptionArray)

									return (
										<AdItem isActive={isActive} key={item.id}>
											{isActive && (
												<p className="recommendedItem">Recommended</p>
											)}
											<h3 className="adTitle">{item.title}</h3>
											<div className="priceContainer">
												<h2 className="priceTitle">₦ {addCommas(price)}</h2>
												<div className="priceSelectors">
													<AdItemCustomPriceButton
														isActive={isActive}
														isSelected={currentPriceType === "weekly"}
														onClick={() => togglePriceType(item.id, "weekly")}
														className="priceSelector"
													>
														Weekly
													</AdItemCustomPriceButton>
													<AdItemCustomPriceButton
														isActive={isActive}
														isSelected={currentPriceType === "monthly"}
														onClick={() => togglePriceType(item.id, "monthly")}
														className="priceSelector"
													>
														Monthly
													</AdItemCustomPriceButton>
												</div>
											</div>
											<div className="featuresContainer">
												<h3 className="featuresHeading">Features</h3>
												<p className="featuresSubCaption">
													Everything in our basic plan plus
												</p>
												{descriptionArray.map((description, i) => (
													<div key={i} className="descriptionText">
														<InlineIcon icon="lucide:check-circle" />
														<p>{description}</p>
													</div>
												))}
											</div>
											<button
												className="paymentButton"
												onClick={() => {
													setAmountVal(price);
													setSelectedPackage(currentPriceType);
													setSelectedPackageId(item.id);

													// console.log(currentPriceType, item.id, price);
												}}
											>
												Proceed to payment
											</button>
										</AdItem>
									);
								})}
					</>
				)}
				<ConfirmationModal
					isOpen={isModalOpen}
					onClose={closeModal}
					url={externalUrl}
				/>
			</AdPricesContainer>
		</motion.main>
	);
}
