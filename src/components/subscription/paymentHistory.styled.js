import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const PaymentHistoryWrapper = styled.div`
	margin: 50px 0 40px 0;

	h3.paymentHeading {
		padding: 20px;
		color: ${Colors.neutral_color.color900};
		border-bottom: 1px solid ${Colors.neutral_color.color900};
	}

	div.emptyHistory {
		text-align: center;
		padding-top: 20px;
	}
`;
