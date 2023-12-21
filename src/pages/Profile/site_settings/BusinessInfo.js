import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_BUSINESS_DETAILS } from "../../../components/api";
import nigerianStates from "../../../components/nigerian-states.json";
import { fetchUser } from "../../../features/userSlice";
import { BusinessInfoContainer } from "./sitesettings.styled";

export default function BusinessInfo() {
  const { userProfile, token } = useSelector((state) => state.user);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [formDetails, setFormDetails] = useState({
    name: userProfile.business_info.name,
    about: userProfile.business_info.about,
    city: userProfile.business_info.city,
    state: userProfile.business_info.state,
    address: userProfile.business_info.address,
  });

  const handleUpdateForm = (e) => {
    setFormDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitForm = async (
    id,
    name,
    about,
    city,
    state,
    address,
    token
  ) => {
    try {
      setLoading(true);
      const response = await UPDATE_BUSINESS_DETAILS(
        id,
        name,
        about,
        city,
        state,
        address,
        token
      );
      if (response) {
        toast.success("Business information updated successfully 🎉");
        dispatch(fetchUser(token));
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  const handleSelectState = (e) => {
    handleUpdateForm(e);
    setCities(
      nigerianStates.find((state) => state.state === e.target.value).lgas
    );
  };

  useEffect(() => {
    if (formDetails.state) {
      setCities(
        nigerianStates?.find((s) => s.state === formDetails.state).lgas
      );
    }
  }, [formDetails.state]);

  return (
    <BusinessInfoContainer
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitForm(
          userProfile.business_info.id,
          formDetails.name,
          formDetails.about,
          formDetails.city,
          formDetails.state,
          formDetails.address,
          token
        );
      }}
    >
      <div className="itemContainer">
        <h4 className="headingText">Business Name</h4>

        <div className="inputContainer">
          <label htmlFor="Name of Business">Name of Business</label>
          <input
            onChange={handleUpdateForm}
            value={formDetails.name}
            name="name"
            className="businessName"
            type="text"
            placeholder="Streetbazaar"
          />
        </div>
      </div>

      <div className="itemContainer">
        <h4 className="headingText">About business</h4>
        <div className="inputContainer">
          <label htmlFor="About your business">About your business</label>
          <textarea
            onChange={handleUpdateForm}
            value={formDetails.about}
            name="about"
            className="aboutBusiness textField"
            type="text"
            placeholder="Enter information about your business"
          />
        </div>
      </div>

      <div className="itemContainer">
        <div className="captionContainer">
          <h4 className="headingText">Store Location</h4>
          <p className="cationText">
            Ignore if there is no physical location of your store
          </p>
        </div>
        <div className="inputContainer">
          <div className="stateCityContainer">
            <div className="locationContainer">
              <label htmlFor="State">State</label>
              <select
                onChange={handleSelectState}
                value={formDetails.state}
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
                onChange={handleUpdateForm}
                value={formDetails.city}
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
              onChange={handleUpdateForm}
              value={formDetails.address}
              name="address"
              className="textField"
              type="text"
              placeholder="Enter your store address"
            />
          </div>
        </div>
      </div>

      <div className="formActionButtons">
        <button className="cancelChanges">Cancel</button>
        <button disabled={loading} type="submit" className="saveChanges">
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </BusinessInfoContainer>
  );
}
