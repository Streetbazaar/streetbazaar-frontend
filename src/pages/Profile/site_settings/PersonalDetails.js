import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import ControlledInput from "../../../components/ControlledInput/ControlledInput";
import { UPDATE_PERSONAL_DETAILS } from "../../../components/api";
import nigerianStates from "../../../components/nigerian-states.json";
import { fetchUser } from "../../../features/userSlice";
import { PersonalDetailsContainer } from "./sitesettings.styled";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const profileSchema = yup.object().shape({
  firstName: yup.string().label("First Name"),
  lastName: yup.string().label("Last Name"),
  email: yup.string().label("Email").email(),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .label("Phone number"),
});

export default function PersonalDetails() {
  const { userProfile, token } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const profilePhoto = userProfile?.profile_image_url
    ? userProfile?.profile_image_url
    : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
  const [currentImage, setCurrentImage] = useState(profilePhoto);
  const [selectedFile, setSelectedFile] = useState("");
  const [cities, setCities] = useState([]);
  const [state, setState] = useState(userProfile?.state);
  const [city, setCity] = useState(userProfile?.city);
  const [address, setAddress] = useState(userProfile?.business_info?.address);
  const [phoneNumber, setPhoneNumber] = useState(userProfile?.phone_number);
  const dispatch = useDispatch();

  const updatePersonalDetails = async (
    firstName,
    lastName,
    phoneNumber,
    city,
    state,
    address,
    profileImageFile,
    token
  ) => {
    try {
      setLoading(true);
      const response = await UPDATE_PERSONAL_DETAILS(
        firstName,
        lastName,
        phoneNumber,
        city,
        state,
        address,
        profileImageFile,
        token
      );
      if (response) {
        console.log(response);
        dispatch(fetchUser(token));
        toast.success("Profile updated successfully 🎉");
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      if (err.response.data.address) {
        toast.error(`Address: ${err.response.data.address}`);
      } else {

        toast.error(err.message);
      }
    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log(files[0]);

    setSelectedFile(files[0]);

    // Use FileReader to read and store data URLs for images
    const imageUrls = [];

    const reader = new FileReader();
    reader.onload = (event) => {
      imageUrls.push(event.target.result);

      setCurrentImage(event.target.result);
      if (imageUrls.length === files.length) {
        // Array.from(files).forEach((file) => cloudinaryUpload(file));
      }
    };
    reader.readAsDataURL(files[0]);
  };

  const handleSelectState = (e) => {
    setState(e.target.value);
    setCities(
      nigerianStates.find((state) => state.state === e.target.value).lgas
    );
  };
  const handleSelectCity = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    if (state) {
      setCities(nigerianStates?.find((s) => s.state === state).lgas);
    }
  }, [state]);

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
            <label htmlFor="fileInput" className="changePhotoAction">
              Change Photo
            </label>
            <input
              id="fileInput"
              className="imageInput"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
              name="images"
            />
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
         
          updatePersonalDetails(
            values.firstName,
            values.lastName,
            values.phone,
            city,
            state,
            address,
            selectedFile,
            token
          );
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
                  readOnly={true}
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
              <div className="inputContainer">
                <div className="stateCityContainer">
                  <div className="locationContainer">
                    <label htmlFor="State">State</label>
                    <select
                      value={state}
                      onChange={handleSelectState}
                      name="state"
                      id="stateSelect"
                    >
                      <option value="">Select State</option>
                      {nigerianStates.map((state, i) => {
                        return (
                          <option key={i} value={state.state}>
                            {state.state}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="locationContainer">
                    <label htmlFor="City">City</label>
                    <select
                      value={city}
                      onChange={handleSelectCity}
                      name="city"
                      id="citySelect"
                    >
                      <option value="">Select City</option>
                      {cities.map((lga, i) => {
                        return (
                          <option key={i} value={lga}>
                            {lga}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="locationContainer">
                  <label htmlFor="Address">Address</label>
                  <textarea
                    className="textField"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    placeholder="Enter your store address"
                  />
                </div>
              </div>
            </div>

            <div className="formActionButtons">
              <button type="button" className="cancelChanges">
                Cancel
              </button>
              <button
                type="button"
                disabled={loading}
                onClick={formikProps.handleSubmit}
                className="saveChanges"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </>
        )}
      </Formik>
    </PersonalDetailsContainer>
  );
}
