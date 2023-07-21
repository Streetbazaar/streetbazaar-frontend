import React, { useEffect, useState } from "react";
import { LOGIN_GOOGLE_USER, LOGIN_USER } from "../api";
import { useDispatch } from "react-redux";
import { updateToken, updateUserProfile } from "../../features/userSlice";
import { toast } from "react-toastify";
import { Spinner } from "./googleAuth.styled";
import { useLocation, useNavigate } from "react-router-dom";

export default function FetchGoogleUser() {
  const urlParams = new URLSearchParams(window.location.search);
  const code =  window.location.search;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()

  const handleLoginGoogleUser = async (code) => {
    setLoading(true);
    try {
      const data = await LOGIN_GOOGLE_USER(code);
      if (data) {
        console.log(data);
        setLoading(false);
        dispatch(updateUserProfile(data?.user));
        dispatch(updateToken(data?.access_token));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      console.log(err.message);
    }
  };
  useEffect(() => {
    handleLoginGoogleUser(location.search);
    console.log(location.search)
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      {loading ? (
        <>
          <h1 style={{ fontSize: 20 }}>Please wait while we log you in...</h1>
          <Spinner />
        </>
      ) : (
        <h1 style={{ fontSize: 20 }}>Oops something went wrong 🏜</h1>
      )}
    </div>
  );
}
