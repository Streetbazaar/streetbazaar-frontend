/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  LoginContainer,
  Input,
  Button,
  LoginForm,
  Flex,
  Flex2,
  Flex3,
  Flex4,
  Flex5,
  Label,
} from "../AuthComponents-styles/Login.styled";

import { ExitSvg, FacebookSvg, GoogleSvg } from "../../SvgComponents";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import ControlledInput from "../../ControlledInput/ControlledInput";
import { LOGIN_USER } from "../../api";
import { toast } from "react-toastify";
import {
  updateToken,
  updateUserProfile,
  updateIsLoggedIn,
} from "../../../features/userSlice";
import { useGoogleLogin } from "@react-oauth/google";
import { baseUrl } from "../../utils";


const loginSchema = yup.object().shape({
  email: yup.string().required().label("Email").email(),
  password: yup
    .string()
    .required()
    .label("Password")
    .min(8, "Seems a bit short"),
});

export default function Login(props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const data = await LOGIN_USER(email, password);
      if (data) {
        
        setLoading(false);
        dispatch(updateUserProfile(data?.user));
        dispatch(updateToken(data?.access_token));
        props.onClose();
        toast("Logged In", {
          type: "success",
        });
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      if (err.response.data.detail[0]) {
        toast(err.response.data.detail[0], {
          type: "error",
        });
        setLoading(false);
        
      } else {
        setLoading(false);
        toast(err.message, {
          type: "error",
        });
        console.log(err.message);
      }
    
      toast(err.message, {
        type: "error",
      });
    }
  };

  const signIn = useGoogleLogin({

    flow: "auth-code",
    ux_mode: "redirect",
    redirect_uri: `${baseUrl}/fetchuserprofile`,
    onLoginSuccess: (response) => {
      // Handle successful login
      console.log(response);
    },
    onLoginFailure: (error) => {
      // Handle failed login
      console.error(error);
    },
    
  });

  const handleLoginWithGoogle = () => {
    // Perform any additional custom actions before initiating login
    signIn(); // Initiate Google login
  };

  return (
    <LoginContainer>
      <Flex>
        <div className="login-title">Login</div>
        <div className="cancel-login" onClick={props.onClose}>
          <ExitSvg />
        </div>
      </Flex>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          // console.log(values.email, values.password);
          handleLogin(values.email, values.password);
        }}
        validationSchema={loginSchema}
      >
        {(formikProps) => (
          <LoginForm>
            <Flex2>
              <div onClick={handleLoginWithGoogle} className="login-with-google">
                Login with &nbsp; <GoogleSvg />
              </div>
              <div className="login-with-facebook">
                Login with &nbsp; <FacebookSvg />
              </div>
            </Flex2>
            <Flex3>
              <div className="or">Or</div>
            </Flex3>

            <ControlledInput
              label="Email Adderess"
              formikProps={formikProps}
              formikKey="email"
              value={formikProps.values.email}
              type="email"
              placeholder="Enter your email address"
              name="email"
              id="email"
              required
            />

            <ControlledInput
              label="Password"
              formikProps={formikProps}
              formikKey="password"
              value={formikProps.values.password}
              type="password"
              placeholder="Enter password"
              name="password"
              id="password"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              onClick={formikProps.handleSubmit}
            >
              {loading ? "Logging you in..." : "Login"}
            </Button>
            <Flex4>
              <p className="forgot-password">Forgot Password?</p>
            </Flex4>
            <Flex5>
              <p
                onClick={() => {
                  props.onClose();
                  props.openRegister();
                }}
                className="register"
              >
                <span>Don't have an account? </span>
                Register
              </p>
            </Flex5>
          </LoginForm>
        )}
      </Formik>
    </LoginContainer>
  );
}
