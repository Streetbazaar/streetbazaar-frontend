import React from "react";
import { useSelector } from "react-redux";
import { BusinessInfoContainer } from "./sitesettings.styled";

export default function BusinessInfo() {
  const { userProfile, token } = useSelector((state) => state.user);
  return (
    <BusinessInfoContainer>
      <div className="itemContainer">
        <h4 className="headingText">Business Name</h4>

        <div className="inputContainer">
          <label htmlFor="Name of Business">Name of Business</label>
          <input
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
              <select name="state" id="stateSelect">
                <option value="">Select State</option>
                <option value="Rivers State">Rivers State</option>
                <option value="Lagos State">Lagos State</option>
              </select>
            </div>

            <div className="locationContainer">
              <label htmlFor="City">City</label>
              <select name="city" id="citySelect">
                <option value="">Select City</option>
                <option value="Rivers State">Port Harcourt</option>
                <option value="Lagos State">Ikeja</option>
              </select>
            </div>
          </div>

          <div className="locationContainer">
            <label htmlFor="Address">Address</label>
            <textarea
              className="textField"
              type="text"
              placeholder="Enter your store address"
              maxLength={29}
            />
          </div>
        </div>
      </div>

      <div className="formActionButtons">
        <button className="cancelChanges">Cancel</button>
        <button className="saveChanges">Save Changes</button>
      </div>
    </BusinessInfoContainer>
  );
}
