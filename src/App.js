import { AnimatePresence } from "framer-motion";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ChatLayout from "./components/ChatLayout";
import Layout from "./components/Layout";
import ProfileLayout from "./components/ProfileLayout";
import SellProductLayout from "./components/SellProductLayout";
import FetchGoogleUser from "./components/googleAuth/FetchGoogleUser";
import About from "./pages/About";
import CategoryDetail from "./pages/CategoryDetail/CategoryDetail";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/Error/ErrorPage";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications/Notifications";
import PlaceAd from "./pages/PlaceAd/PlaceAd";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import AccountBalance from "./pages/Profile/accountbalance/AccountBalance";
import Subscription from "./pages/Profile/subscription";
import Adverts from "./pages/Profile/advert/Adverts";
import FeedBack from "./pages/Profile/feedback/FeedBack";
import Investments from "./pages/Profile/investment/Investments";
import Performance from "./pages/Profile/performance/Performance";
import Saved from "./pages/Profile/saved/Saved";
import Settings from "./pages/Profile/site_settings/Settings";
import MyCatalogue from "./pages/mycatalogue/MyCatalogue";
import { setCookie } from "./setCookie";
import EditAd from "./pages/Profile/advert/editAd/EditAd";
import Terms from "./pages/terms/Terms";
import InvestmentAdDetails from "./pages/InvestmentAds/InvestmentAdDetails/InvestmentAdDetails";

function App() {
	setCookie("cookieName", "cookieValue", 7, "None");
	const { token } = useSelector((state) => state.user);
	return (
		<HelmetProvider>
			<BrowserRouter>
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
				<Toaster
					position="top-center"
					reverseOrder={false}
					gutter={8}
					containerClassName=""
					containerStyle={{}}
					toastOptions={{
						// Define default options
						className: "",
						duration: 5000,
						style: {
							background: "#363636",
							color: "#fff",
						},

						// Default options for specific types
						success: {
							duration: 3000,
							theme: {
								primary: "green",
								secondary: "black",
							},
						},
					}}
				/>
				<AnimatePresence>
					<Routes>
						<Route errorElement={<ErrorPage />} path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="product-detail/*" element={<ProductDetails />} />
							<Route
								path="investment-ad-detail/*"
								element={<InvestmentAdDetails />}
							/>
							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
							<Route path="terms" element={<Terms />} />
							<Route
								path="category-detail/:categoryName/:categoryId"
								element={<CategoryDetail />}
							/>
							<Route element={<MyCatalogue />} path="catalogue/:business_id" />
						</Route>
						{token && (
							<Route
								errorElement={<ErrorPage />}
								path="/profile"
								element={<ProfileLayout />}
							>
								<Route path="account-balance" element={<AccountBalance />} />
								<Route path="subscription" element={<Subscription />} />
								<Route path="adverts" element={<Adverts />} />
								<Route path="feedback" element={<FeedBack />} />
								<Route path="investments" element={<Investments />} />
								<Route path="performance" element={<Performance />} />
								<Route path="saved" element={<Saved />} />
								<Route path="settings" element={<Settings />} />
								<Route path="notifications" element={<Notifications />} />
							</Route>
						)}
						{token && (
							<Route
								ErrorBoundary={<ErrorPage />}
								errorElement={<ErrorPage />}
								path="/edit-ad"
								element={<SellProductLayout />}
							>
								<Route path="*" element={<EditAd />} />
							</Route>
						)}
						<Route path="fetchuserprofile" element={<FetchGoogleUser />} />
						{token && (
							<Route
								errorElement={<ErrorPage />}
								path="/messages"
								element={<ChatLayout />}
							/>
						)}

						{token && (
							<Route
								ErrorBoundary={<ErrorPage />}
								errorElement={<ErrorPage />}
								path="/sell-your-product"
								element={<SellProductLayout />}
							>
								<Route path="post-advert" element={<PlaceAd />} />
							</Route>
						)}
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</AnimatePresence>
			</BrowserRouter>
		</HelmetProvider>
	);
}

export default App;
