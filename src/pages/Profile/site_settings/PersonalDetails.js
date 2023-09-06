import { Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as yup from "yup";
import ControlledInput from "../../../components/ControlledInput/ControlledInput";
import { PersonalDetailsContainer } from "./sitesettings.styled";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const profileSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter your First Name")
    .label("First Name"),
  lastName: yup
    .string()
    .required("Please enter your Last Name")
    .label("Last Name"),
  email: yup.string().required().label("Email").email(),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .label("Phone number")
    .required("Please enter Phone Number"),
});

export default function PersonalDetails() {
  const { userProfile } = useSelector((state) => state.user);
  const profilePhoto = userProfile?.profile_image_url
    ? userProfile?.profile_image_url
    : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
  const [currentImage, setCurrentImage] = useState(profilePhoto);

  return (
    <PersonalDetailsContainer>
      <div className="itemContainer">
        <h4 className="headingText">Avatar</h4>
        <div className="profileWrapper">
          <img className="profileImage" src={currentImage} alt="profile" />

          <div className="photoActions">
            <button
              onClick={() =>
                setCurrentImage(
                  "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                )
              }
              className="removePhotoAction"
            >
              Remove Photo
            </button>
            <button className="changePhotoAction">Change Photo</button>
          </div>
        </div>
      </div>

      <Formik
        initialValues={{
          firstName: userProfile.first_name ? userProfile.first_name : "",
          lastName: userProfile.last_name ? userProfile.last_name : "",
          email: userProfile.email,
          phone: userProfile.phone_number ? userProfile.phone_number : "",
        }}
        onSubmit={(values, actions) => {
          console.log(values.email, values.password);
        }}
        validationSchema={profileSchema}
      >
        {(formikProps) => (
          <>
            <div className="itemContainer">
              <h4 className="headingText">Names</h4>

              <div className="inputContainer">
                <ControlledInput
                  label="First name"
                  formikProps={formikProps}
                  formikKey="firstName"
                  value={formikProps.values.firstName}
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  id="first name"
                  required
                />
                <ControlledInput
                  label="Last name"
                  formikProps={formikProps}
                  formikKey="lastName"
                  value={formikProps.values.lastName}
                  type="lastName"
                  placeholder="Enter your last name"
                  name="lastName"
                  id="last name"
                  required
                />
              </div>
            </div>

            <div className="itemContainer">
              <h4 className="headingText">Email Address</h4>
              <div className="inputContainer">
                <ControlledInput
                  label="Email Address"
                  formikProps={formikProps}
                  formikKey="email"
                  value={formikProps.values.email}
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>

            <div className="itemContainer">
              <h4 className="headingText">Phone Number</h4>
              <div className="inputContainer">
              <ControlledInput
                  label="Phone Number"
                  formikProps={formikProps}
                  formikKey="phone"
                  value={formikProps.values.phone}
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  id="phone"
                  required
                />
              </div>
            </div>

            <div className="itemContainer">
              <h4 className="headingText">Location</h4>
              <div className="inputContainer"></div>
            </div>
          </>
        )}
      </Formik>
    </PersonalDetailsContainer>
  );
}
