import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import CategoryDetail from "./pages/CategoryDetail/CategoryDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setCookie } from "./setCookie";
import FetchGoogleUser from "./components/googleAuth/FetchGoogleUser";

function App() {
  setCookie("cookieName", "cookieValue", 7, "None");
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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product-detail" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="category-detail/:categoryName/:categoryId"
            element={<CategoryDetail />}
          />
        </Route>
        <Route path="fetchuserprofile" element={<FetchGoogleUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
