import React, { useEffect } from "react";
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


const headRow = [
	"Amount(₦)",
	"Plan",
	"Duration",
	"Status",
	"Method",
	"Expired Date",
];

const PaymentHistory = ({ transactions }) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	useEffect(() => {
		setPage(0);
	}, [rowsPerPage]);

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

	return (
		<PaymentHistoryWrapper>
			<h3 className="paymentHeading">Payment history</h3>
			{transactions && transactions?.length > 0 ? (
				<ThemeProvider theme={theme}>
					<div className="paymentTable">
						<TableContainer
							component={Paper}
							sx={{
								maxWidth: {
									xs: "300px",
									sm: "100%",
									custom375: "355px",
									custom425: "405px",
								},
								// maxHeight: 200,

								margin: "0 auto",
							}}
						>
							<Table
								// stickyHeader
								size="small"
								aria-label="Payment history table"
							>
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
									{transactions
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((transaction, index) => (
											<TableRow
												key={index}
												sx={{
													"&:last-child td, &:last-child th": { border: 0 },
													background: `${
														transaction.status === "failed"
															? "#f87171"
															: transaction.status === "pending"
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
													₦ {addCommas(transaction.value)}
												</TableCell>
												<TableCell style={{ color: "white" }} align="left">
													{transaction?.plan || "Null"}
												</TableCell>
												<TableCell style={{ color: "white" }} align="left">
													{transaction?.packageType || "Null"}
												</TableCell>
												<TableCell
													style={{
														color: "white",
														textTransform: "capitalize",
														fontWeight: "500",
													}}
													align="left"
												>
													{transaction.status}
												</TableCell>
												<TableCell
													style={{
														color: "white",
														textTransform: "capitalize",
													}}
													align="left"
												>
													{transaction.payment_type}
												</TableCell>
												<TableCell
													style={{
														color: "white",
														textTransform: "capitalize",
													}}
													align="left"
												>
													{transaction?.expired || "Null"}
												</TableCell>
											</TableRow>
										))}
								</TableBody>
							</Table>
							{transactions.length > rowsPerPage && (
								<TablePagination
									size="small"
									rowsPerPageOptions={[2, 5, 10, 25, 100]}
									component="div"
									count={transactions.length}
									rowsPerPage={rowsPerPage}
									page={page}
									onPageChange={handleChangePage}
									onRowsPerPageChange={handleChangeRowsPerPage}
								/>
							)}
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
