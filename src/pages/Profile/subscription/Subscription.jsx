/* eslint-disable react-hooks/exhaustive-deps */
import { InlineIcon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import toast from "react-hot-toast";
import { usePaystackPayment } from "react-paystack";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	PAY_FOR_SUBSCRIPTION,
	TRANSACTION_LIST,
} from "../../../components/api";
import Spinner from "../../../components/spinner/Spiner";
import { clearFields, fetchPackages } from "../../../features/inputSlice";
import { addCommas } from "../../../functions";
import {
	AdItem,
	AdItemCustomPriceButton,
	AdPricesContainer,
	ModalContent,
	ModalOverlay,
	PaymentWrapper,
} from "./subscription.styled";
import PaymentHistory from "../../../components/subscription/PaymentHistory";

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

export default function Subscription() {
	const [priceType, setPriceType] = useState({});
	const { packages, packageStatus } = useSelector((state) => state.input);
	const { token, userProfile } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const [amountVal, setAmountVal] = useState(0);
	const [selectedPackage, setSelectedPackage] = useState("");
	const [selectedPackageId, setSelectedPackageId] = useState("");
	const [isModalOpen, setModalOpen] = useState(false);
	const [transactions, setTransactions] = useState();
	const navigate = useNavigate();

	const [externalUrl, setExternalUrl] = ""; // Replace with your URL

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	// console.log(packages);

	const config = {
		email: userProfile?.email,
		amount: amountVal * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
		publicKey: process.env.REACT_APP_PAYSTACK_KEY,
	};

	console.log(transactions)

	const initializePayment = usePaystackPayment(config);

	const payForSubscription = async ({
		email,
		packageId,
		packageType,
		reference,
		token,
	}) => {
		// console.log({ packageId, packageType, reference, token });

		try {
			const response = await PAY_FOR_SUBSCRIPTION({
				packageId,
				packageType,
				reference,
				token,
				email,
			});

			if (response.status === "successful") {
				toast.success("Payment was successfull  🎉");
				closeModal();
				dispatch(clearFields());
				setAmountVal("");
				setSelectedPackage("");
				setSelectedPackageId("");
				getTransactions();
				// navigate("/sell-your-product/post-advert");
			} else if (response.status === "pending") {
				toast.success("Your transaction is pending");
				closeModal();
				dispatch(clearFields());
				setAmountVal("");
				setSelectedPackage("");
				setSelectedPackageId("");
				navigate("/");
			} else {
				// console.log(response);
				toast.error(`Your transaction ${response.status}`);
				closeModal();
			}
		} catch (err) {
			console.log(err);
			toast.error(err.message);
			closeModal();
		}
	};

	const onSuccess = (reference) => {
		// Implementation for whatever you want to do with reference and after success call.
		// console.log(
		// 	reference?.reference,
		// 	selectedPackage,
		// 	selectedPackageId,
		// 	amountVal
		// );
		// packageId, packageType, reference, token;
		payForSubscription({
			packageId: selectedPackageId,
			packageType: selectedPackage,
			reference: reference?.reference,
			token,
			email: userProfile?.email,
		});
		openModal();
	};

	// you can call this function anything
	const onClose = (reference) => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log("closed", reference);
	};

	const getTransactions = async () => {
		const transactionsList = await TRANSACTION_LIST(token);
		// console.log(transactionsList);
		if (transactionsList) {
			setTransactions(transactionsList);
		}
		// console.log(transactionsList)
	};

	useEffect(() => {
		dispatch(fetchPackages(token));
		getTransactions();
	}, [userProfile, token]);

	useEffect(() => {
		if (amountVal && selectedPackage) {
			initializePayment(onSuccess, onClose);
		}
	}, [amountVal, selectedPackage]);

	const togglePriceType = (itemId, type) => {
		setPriceType((prevState) => ({
			...prevState,
			[itemId]: type,
		}));
	};

	return (
		<PaymentWrapper>
			<h3 className="paymentHeading">Subscription Payment</h3>
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
					<AdPricesContainer>
						{packages &&
							[...packages] // Create a shallow copy of the packages array
								// .sort((a, b) => {
								// 	const priceTypeA = priceType[a.id] || "weekly";
								// 	const priceTypeB = priceType[b.id] || "weekly";

								// 	// console.log(priceTypeA, priceTypeB, "from line 164", a, b);

								// 	return Number(a?.weekly_amount) - Number(b.weekly_amount);
								// })
								?.map((item, i) => {
									const isActive = item.title === "Standard Plan";
									const currentPriceType = priceType[item.id] || "weekly"; // Default to weekly if not set
									// Debugging: Log the raw content of item.description
									// console.log("Raw item.description:", item.description);
									const price =
										currentPriceType === "weekly"
											? item.weekly_amount
											: item.monthly_amount;
									// const descriptionArray = item.description.split("/\r?\n/");
									// const descriptionArray =
									const descriptionArray =
										item.description.split(/\s*(?:,|and)\s*/i);
									// const descriptionArray = item.description.split(/\\r\\n/);
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
											<div className="paymentButtonsWrapper">
												<button
													className="paymentButton"
													// onClick={() => {
													// 	setAmountVal(price);
													// 	setSelectedPackage(currentPriceType);
													// 	setSelectedPackageId(item.id);

													// 	// console.log(currentPriceType, item.id, price);
													// }}
												>
													Use Wallet
												</button>
												<button
													className="paymentButton"
													onClick={() => {
														setAmountVal(price);
														setSelectedPackage(currentPriceType);
														setSelectedPackageId(item.id);
													}}
												>
													Use Bank
												</button>
											</div>
										</AdItem>
									);
								})}
						<ConfirmationModal
							isOpen={isModalOpen}
							onClose={closeModal}
							url={externalUrl}
						/>
					</AdPricesContainer>
					<PaymentHistory transactions={transactions} />
				</>
			)}
		</PaymentWrapper>
	);
}
