import React, { useEffect } from "react";
import { PaymentHistoryWrapper } from "./paymentHistory.styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
	TablePagination,
	createTheme,
	ThemeProvider,
	Tooltip,
} from "@mui/material";
import { useState } from "react";
import trashImg from "../../assets/images/CharcoDeleteTrash.png";
import { addCommas } from "../../functions";
import { Colors } from "../../utils/colors";
import moment from "moment";

const headRow = [
	"No",
	"Amount(₦)",
	"Plan",
	"Duration",
	"Status",
	"Method",
	"Start day",
	"Expired Date",
];

const PaymentHistory = ({ transactions }) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

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
				sm: 500,
				md: 740,
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
									custom375: "355px",
									custom425: "405px",
									sm: "500px",
									md: "800px",
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
														color: Colors.neutral_color.color900,
														textWrap: "nowrap",
														fontSize: {
															xs: "0.75rem",
															sm: "0.875rem",
															md: "0.9rem",
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
										.map((transaction, index) => {
											console.log(transaction);
											const {
												created_at,
												payment_type,
												value,
												status,
												duration,
												expiry_date,
											} = transaction;
											return (
												<TableRow
													key={index}
													sx={{
														"&:last-child td, &:last-child th": { border: 0 },
													}}
												>
													<TableCell
														sx={{
															color: Colors.neutral_color.color500,
															textWrap: "nowrap",
															fontSize: {
																xs: "0.75rem",
																sm: "0.875rem",
															},
														}}
													>
														{transactions.indexOf(transaction) + 1}
													</TableCell>
													<TableCell
														sx={{
															color: Colors.neutral_color.color500,
															textWrap: "nowrap",
															fontSize: {
																xs: "0.75rem",
																sm: "0.875rem",
															},
														}}
													>
														₦ {addCommas(value)}
													</TableCell>
													<TableCell
														sx={{
															color: Colors.neutral_color.color500,
															textWrap: "nowrap",
															fontSize: {
																xs: "0.75rem",
																sm: "0.875rem",
															},
														}}
														align="left"
													>
														{transaction?.plan || "Null"}
													</TableCell>
													<TableCell
														sx={{
															color: Colors.neutral_color.color500,
															textWrap: "nowrap",
															fontSize: {
																xs: "0.75rem",
																sm: "0.875rem",
															},
														}}
														align="left"
													>
														{duration}
													</TableCell>
													<TableCell
														sx={{
															fontSize: {
																xs: "0.75rem",
																sm: "0.875rem",
															},
															color:
																status === "failed"
																	? Colors.error_color.color500
																	: status === "pending"
																	? Colors.warning_color.color500
																	: Colors.success_color.color500,
															background:
																status === "failed"
																	? Colors.error_color.color100
																	: status === "pending"
																	? Colors.warning_color.color100
																	: Colors.success_color.color100,
															textTransform: "capitalize",
															fontWeight: "500",
														}}
														align="center"
													>
														{status}
													</TableCell>
													<TableCell
														sx={{
															color: Colors.neutral_color.color500,
															textWrap: "nowrap",
															fontSize: {
																xs: "0.75rem",
																sm: "0.875rem",
															},
														}}
														align="left"
													>
														{payment_type}
													</TableCell>
													<Tooltip
														arrow
														title={
															<span>{moment(created_at)?.format("LLL")}</span>
														}
													>
														<TableCell
															sx={{
																color: Colors.neutral_color.color500,
																textWrap: "nowrap",
																fontSize: {
																	xs: "0.75rem",
																	sm: "0.875rem",
																},
															}}
															align="left"
														>
															{moment(created_at)?.format("L")}
														</TableCell>
													</Tooltip>
													<Tooltip
														arrow
														title={
															<span>{moment(expiry_date)?.format("LLL")}</span>
														}
													>
														<TableCell
															title={<span>Hello</span>}
															sx={{
																color: Colors.neutral_color.color500,
																textWrap: "nowrap",
																fontSize: {
																	xs: "0.75rem",
																	sm: "0.875rem",
																},
															}}
															align="left"
														>
															{moment(expiry_date)?.format("L")}
														</TableCell>
													</Tooltip>
												</TableRow>
											);
										})}
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
