import React, { useCallback, useEffect } from "react";
import { PaymentHistoryWrapper } from "./paymentHistory.styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import trashImg from "../../assets/images/CharcoDeleteTrash.png";
import { addCommas } from "../../functions";
import { TRANSACTION_LIST } from "../api";

function createData(
	packageAmount,
	plan,
	packageType,
	paymentStatus,
	subStatus,
	expired
) {
	return {
		packageAmount,
		plan,
		packageType,
		paymentStatus,
		subStatus,
		expired,
	};
}

const headRow = [
	"Amount(₦)",
	"Plan",
	"Duration",
	"Status",
	"Method",
	"Expired Date",
];

const rows = [
	createData(200, "Promo", "Weekly", "success", "bank", "20/06/2024"),
	createData(500, "Standard", "Monthly", "failed", "wallet", "cancelled"),
	createData(500, "Standard", "Weekly", "pending", "bank", "..."),
	createData(2000, "Premium", "Weekly", "success", "bank", "20/04/2024"),
	createData(1000, "Premium", "Monthly", "success", "bank", "20/03/2024"),
];

const PaymentHistory = ({ token }) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(2);
	const [transactions, setTransactions] = useState([]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const theme = createTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 900,
				lg: 1200,
				xl: 1536,
				custom320: 320,
				custom375: 375,
				custom425: 425,
			},
		},
	});

	useEffect(() => {
		const getTransactions = async () => {
			const transactionsList = await TRANSACTION_LIST(token);
			// console.log(transactionsList);
			if (transactionsList) {
				setTransactions(transactionsList);
			}
		};

		getTransactions();
	}, [token]);

	console.log(transactions);

	return (
		<PaymentHistoryWrapper>
			<h3 className="paymentHeading">Payment history</h3>
			{rows.length > 0 ? (
				<ThemeProvider theme={theme}>
					<div className="paymentTable">
						<TableContainer
							component={Paper}
							sx={{
								maxWidth: {
									xs: "300px",
									custom375: "355px",
									custom425: "405px",
									sm: "100%",
								},
							}}
						>
							<Table size="small" aria-label="Payment history table">
								<TableHead>
									<TableRow>
										{headRow.map((row, index) => {
											return (
												<TableCell
													key={index}
													sx={{
														fontWeight: "600",
														color: "#5D6B79",
														fontSize: {
															xs: "0.75rem",
															sm: "0.875rem",
															md: "1rem",
														},
													}}
												>
													{row}
												</TableCell>
											);
										})}
									</TableRow>
								</TableHead>
								<TableBody>
									{rows
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((row) => (
											<TableRow
												// key={row.name}
												sx={{
													"&:last-child td, &:last-child th": { border: 0 },
													background: `${
														row.paymentStatus === "failed"
															? "#f87171"
															: row.paymentStatus === "pending"
															? "#fbbf24"
															: "#22c55e"
													}`,
													color: "white",
												}}
											>
												<TableCell
													style={{ color: "white" }}
													component="th"
													scope="row"
												>
													₦ {addCommas(row.packageAmount)}
												</TableCell>
												<TableCell style={{ color: "white" }} align="left">
													{row.plan}
												</TableCell>
												<TableCell style={{ color: "white" }} align="left">
													{row.packageType}
												</TableCell>
												<TableCell
													style={{
														color: "white",
														textTransform: "capitalize",
														fontWeight: "500",
													}}
													align="left"
												>
													{row.paymentStatus}
												</TableCell>
												<TableCell
													style={{
														color: "white",
														textTransform: "capitalize",
													}}
													align="left"
												>
													{row.subStatus}
												</TableCell>
												<TableCell
													style={{
														color: "white",
														textTransform: "capitalize",
													}}
													align="left"
												>
													{row.expired}
												</TableCell>
											</TableRow>
										))}
								</TableBody>
							</Table>
							<TablePagination
								size="small"
								rowsPerPageOptions={[2, 5, 10, 25, 100]}
								component="div"
								count={rows.length}
								rowsPerPage={rowsPerPage}
								page={page}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
							/>
						</TableContainer>
					</div>
				</ThemeProvider>
			) : (
				<div className="emptyHistory">
					<img src={trashImg} alt="Empty History" />
					<p>No transaction history</p>
				</div>
			)}
		</PaymentHistoryWrapper>
	);
};

export default PaymentHistory;
