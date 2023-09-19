import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Layout from "./components/Layout";
import ProfileLayout from "./components/ProfileLayout";
import FetchGoogleUser from "./components/googleAuth/FetchGoogleUser";
import About from "./pages/About";
import CategoryDetail from "./pages/CategoryDetail/CategoryDetail";
import ChatsWrapper from "./pages/Chats/ChatsWrapper";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import AccountBalance from "./pages/Profile/accountbalance/AccountBalance";
import Adverts from "./pages/Profile/advert/Adverts";
import FeedBack from "./pages/Profile/feedback/FeedBack";
import Investments from "./pages/Profile/investment/Investments";
import Performance from "./pages/Profile/performance/Performance";
import Saved from "./pages/Profile/saved/Saved";
import Settings from "./pages/Profile/site_settings/Settings";
import { setCookie } from "./setCookie";
import ChatLayout from "./components/ChatLayout";

function App() {
  setCookie("cookieName", "cookieValue", 7, "None");
  const { token } = useSelector((state) => state.user);
  return (
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
      <Routes>
        <Route errorElement={<ErrorPage />} path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product-detail" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="category-detail/:categoryName/:categoryId"
            element={<CategoryDetail />}
          />
        </Route>
        <Route
          errorElement={<ErrorPage />}
          path="/profile"
          element={<ProfileLayout />}
        >
          <Route path="account-balance" element={<AccountBalance />} />
          <Route path="adverts" element={<Adverts />} />
          <Route path="feedback" element={<FeedBack />} />
          <Route path="investments" element={<Investments />} />
          <Route path="performance" element={<Performance />} />
          <Route path="saved" element={<Saved />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="fetchuserprofile" element={<FetchGoogleUser />} />
      <Route errorElement={<ErrorPage />} path="/messages" element={<ChatLayout />}>
        <Route path=":chatId" element={<ChatLayout />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
