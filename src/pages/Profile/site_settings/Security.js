import { Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as yup from "yup";
import ControlledInput from "../../../components/ControlledInput/ControlledInput";
import { SecurityContainer } from "./sitesettings.styled";

const changePasswordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .required()
    .label("Current Password")
    .min(8, "Seems a bit short"),
  newPassword: yup
    .string()
    .required()
    .label("New Password")
    .min(8, "Seems a bit short"),
  //   confirmPassword: yup
  //     .string()
  //     .required()
  //     .label("Confirm Password")
  //     .test("passwords-match", "Passwords must match", function (value) {
  //       return this.parent.newPassword === value;
  //     }),
});

export default function Security() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  return (
    <SecurityContainer>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values.email, values.password);
        }}
        validationSchema={changePasswordSchema}
      >
        {(formikProps) => (
          <div className="itemContainer">
            <h4 className="headingText">Change Password</h4>
            <div className="inputContainer">
              <ControlledInput
                label="Current Password"
                formikProps={formikProps}
                formikKey="currentPassword"
                value={formikProps.values.currentPassword}
                type="password"
                placeholder="Enter your current password"
                name="currentPassword"
                id="current password"
                required
              />
              <ControlledInput
                label="New Password"
                formikProps={formikProps}
                formikKey="newPassword"
                value={formikProps.values.newPassword}
                type="password"
                placeholder="Enter your new password"
                name="newPassword"
                id="new password"
                required
              />
              <div className="formActionButtons">
                <button type="button" className="cancelChanges">
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={formikProps.handleSubmit}
                  className="saveChanges"
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        )}
      </Formik>

      <div className="itemContainer">
        <div className="captionContainer">
          <h4 className="headingText">Delete Account</h4>
          <p className="cationText">This action is unreversible</p>
        </div>
        <div className="inputContainer">
          <select name="accountDeletionReasons" id="accountDeletionReasons">
            <option value="">Why are you leaving</option>
            <option value="Wrong details">Wrong details</option>
            <option value="Not interested in using this platform anymore">
              Not interested in using this platform anymore
            </option>
          </select>
        </div>
      </div>

      <div className="formActionButtons">
        <button className="cancelChanges">Cancel</button>
        <button className="deleteAccount">Delete Account</button>
      </div>
    </SecurityContainer>
  );
}
