import React from "react";
import { PaymentHistoryWrapper } from "./paymentHistory.styled";

const PaymentHistory = () => {
	return (
		<PaymentHistoryWrapper>
			<h3 className="paymentHeading">Payment history</h3>
			<div className='emptyHistory'>No transaction history</div>
		</PaymentHistoryWrapper>
	);
};

export default PaymentHistory;
