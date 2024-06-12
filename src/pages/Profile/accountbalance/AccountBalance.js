import { InlineIcon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AccountBalanceContainer,
  PaymentModalContent,
  PaymentModalOverlay,
} from "./accountbalance.styled";
import { formatNumberWithCommas } from "../../../functions";
import { ConfirmationModal } from "../../PlaceAd/AdPageThree";
import { usePaystackPayment } from "react-paystack";
import toast from "react-hot-toast";
import { INVEST_AD_PAY, WALLET_DEPOSIT } from "../../../components/api";
import { fetchUser } from "../../../features/userSlice";

const Modal = ({ isOpen, onModalClose, id }) => {
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const newAmount = Number(amount.replace(/,/g, ""));
  const { userProfile } = useSelector((state) => state.user);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
 
  
     const fundWallet = async (
      amount,
       ref,
       token
     ) => {
      openModal()
       try {
         const response = await WALLET_DEPOSIT(
          amount,
           ref,
           token
         );
         if (response.data.status === "successful") {
           toast.success("Deposit successful 🎉");
           closeModal();
           dispatch(fetchUser(token));
         } else if (response.data.status === "pending") {
           toast.success("Your transaction has been submitted");
           closeModal();
           dispatch(fetchUser(token));
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
       amount: newAmount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
       publicKey: process.env.REACT_APP_PAYSTACK_KEY,
     };
     const initializePayment = usePaystackPayment(config);

     const [externalUrl, setExternalUrl] = ""; // Replace with your URL
     
     

     const onSuccess = (reference) => {
       // Implementation for whatever you want to do with reference and after success call.

       console.log(
         reference?.reference,
         Number(amount.replace(/,/g, ""))
       );
     
       openModal();
      fundWallet(newAmount,reference?.reference, token);
     };

     // you can call this function anything
     const onClose = (reference) => {
       // implementation for  whatever you want to do when the Paystack dialog closed.
       console.log("closed", reference);
     };

    const handleInputChange = (e) => {
      // Remove commas and other non-numeric characters
      const cleanedText = e.target.value.replace(/[^0-9.]/g, "");

      // Ensure the input is not empty before formatting
      if (cleanedText !== "") {
        // Format the number with commas
        const formattedAmount = formatNumberWithCommas(parseFloat(cleanedText));
        setAmount(formattedAmount);
      } else {
        // If input is empty, set the amount to an empty string
        setAmount("");
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onModalClose()
      initializePayment(onSuccess, onClose);
    }

    // useEffect(() => {
    //   initializePayment(onSuccess, onClose);
    // }, [newAmount]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <PaymentModalOverlay onClick={onModalClose}></PaymentModalOverlay>
      <PaymentModalContent>
        <div className="headingWrapper">
          <h4>Fund your account</h4>

          <button className="closeButton" onClick={onModalClose}>
            X
          </button>
        </div>

        <form onSubmit={handleSubmit} className="fundForm">
          <div className="amountWrapper">
            <label>Enter Amount</label>
            <div className="inputWrapper">
              <p>₦</p>
              <input
                value={amount}
                onChange={handleInputChange}
                type="text"
                name=""
                id=""
              />
            </div>
          </div>

          <div className="buttonsGroup">
            <button type="submit" className="payNowBtn">
              Pay now
            </button>
            <button type="submit" className="payWBBtn">
              Pay with bank
            </button>
          </div>
        </form>
      </PaymentModalContent>

      <ConfirmationModal isOpen={modalOpen} onClose={closeModal} />
    </>,
    document.body
  );
};

export default function AccountBalance() {
  const { userProfile, token } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
 

   useEffect(()=>{
    dispatch(fetchUser(token))
   }, [])

  return (
    <AccountBalanceContainer>
      <h3 className="accountBalanceHeading">My Account Balance</h3>
      <div className="contentContainer">
        <div className="userProfile">
          <div className="imageWrapper">
            <img
              src={
                userProfile?.profile_image_url
                  ? userProfile?.profile_image_url
                  : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              }
              alt="profile photo"
            />
          </div>
          <h3>{`${userProfile?.first_name} ${userProfile?.last_name}`}</h3>
        </div>
        <div className="accountActionsContainer">
          <div className="actionBox">
            <div className="iconContainer balance">
              <InlineIcon icon="icon-park:trending-up" />
            </div>
            <h4 className="actionTitle">Available Balance</h4>
            <h3 className="balanceField">₦ {userProfile?.wallet?.balance}</h3>
            <a href="">View transaction history</a>
          </div>
          <div className="actionBox">
            <div className="iconContainer topup">
              <InlineIcon icon="ph:plus-circle-bold" />
            </div>
            <h4 className="actionTitle">Top Up</h4>
            <button onClick={() => setIsOpen(true)} className="actionButton">
              Fund your account
            </button>
            <a href="">View transaction history</a>
          </div>
          <div className="actionBox">
            <div className="iconContainer withdraw">
              <InlineIcon icon="pajamas:external-link" />
            </div>
            <h4 className="actionTitle">Withdraw Money</h4>
            <button className="actionButton">Widthdraw Money</button>
            <a href="">View transaction history</a>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onModalClose={() => setIsOpen(false)} />
    </AccountBalanceContainer>
  );
}
