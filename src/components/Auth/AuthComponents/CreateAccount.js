/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import {
  CreateAccountContainer,
  Input,
  Button,
  CreateAccountForm,
  Flex,
  Flex2,
  Flex3,
  Flex4,
  Flex5,
  Body,
  Label,
} from "../AuthComponents-styles/CreateAccount.styled";
import { ExitSvg, FacebookSvg, GoogleSvg } from "../../SvgComponents";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import ControlledInput from "../../ControlledInput/ControlledInput";
import { REGISTER_USER } from "../../api";
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

export default function CreateAccount(props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleRegister = async (email, password) => {
    setLoading(true);

    try {
      const data = await REGISTER_USER(email, password);
      if (data) {
        // console.log(data);
        setLoading(false);
        dispatch(updateUserProfile(data?.user));
        dispatch(updateToken(data?.access_token));
        props.onClose();
        toast("Account created successfully", {
          type: "success",
        });
      }

    } catch (err) {
      // console.log(err);
      if (err.response.data.email[0]) {
        toast(err.response.data.email[0], {
          type: "error",
        });
        setLoading(false);
        // console.log(err.response.data.detail[0]);
      } else {
        toast(err.message, {
          type: "error",
        });
        setLoading(false);
        // console.log(err.message);
      }
    }
  };


  const signUp = useGoogleLogin({

    flow: "auth-code",
    ux_mode: "redirect",
    redirect_uri: `${baseUrl}/fetchuserprofile`,
    // onLoginSuccess: (response) => {
    //   // Handle successful login
    //   // console.log(response);
    // },
    // onLoginFailure: (error) => {
    //   // Handle failed login
    //   console.error(error);
    // },
    
  });

  const handleCreateAccountWithGoogle = () => {
    // Perform any additional custom actions before initiating login
    signUp(); // Initiate Google login
  };



  return (
    <CreateAccountContainer>
      <Flex>
        <div className="create-account-title">Create Account</div>
        <div className="cancel-create-account" onClick={props.onClose}>
          <ExitSvg />
        </div>
      </Flex>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          handleRegister(values.email, values.password);
        }}
        validationSchema={loginSchema}
      >
        {(formikProps) => (
          <CreateAccountForm>
            <Flex2>
              <div onClick={handleCreateAccountWithGoogle} className="create-account-with-google">
                Create Account with &nbsp; <GoogleSvg />
              </div>
              <div className="create-account-with-facebook">
                Create Account with &nbsp; <FacebookSvg />
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
              disabled={loading}
              type="submit"
              onClick={formikProps.handleSubmit}
            >
              {loading ? "Creating your account..." : "Register"}
            </Button>

            <Flex5>
              <p
                onClick={() => {
                  props.onClose();
                  props.openLogin();
                }}
                className="login"
              >
                <span>Already have an account? </span>
                Login
              </p>
            </Flex5>
          </CreateAccountForm>
        )}
      </Formik>
    </CreateAccountContainer>
  );
}
