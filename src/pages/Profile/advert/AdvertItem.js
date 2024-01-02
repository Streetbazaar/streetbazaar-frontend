import { InlineIcon } from "@iconify/react";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { addCommas } from "../../../functions";
import { ModalContent, ModalOverlay } from "../../PlaceAd/PlaceAd.styled";
import { AdvertItemWrapper } from "./advert.styled";

const Modal = ({ isOpen, onClose, url }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={onClose}></ModalOverlay>
      <ModalContent>
        <button className="closeButton" onClick={onClose}>
          X
        </button>
        <p>Are you sure you want to close this advert?</p>

        <div>
          <button className="deleteBtn">Yes</button>
          <button onClick={onClose} className="exitBtn">No</button>
        </div>
      </ModalContent>
    </>,
    document.body
  );
};

export default function AdvertItem({ item }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <AdvertItemWrapper>
      <img src={item.pictures[0].image_url} alt="advert" />

      <div className="adCaptions">
        <h4>{item.title}</h4>
        <div className="statusIndicator">
          <p>{item.status}</p>
        </div>
      </div>

      <div className="adStatistics">
        <div className="statContainer">
          <p>{item.impressions ? item.impressions : 0} impressions</p>
        </div>
        <div className="statContainer">
          <p>{item.visitors ? item.visitors : 0} visitors</p>
        </div>
      </div>

      <h3 className="adPrice">₦ {addCommas(item.price)}</h3>

      <div className="adActions">
        <button>
          <InlineIcon icon="basil:edit-outline" />
          Edit Ad
        </button>
        <button onClick={()=>setIsOpen(true)}>
          <InlineIcon icon="ph:x-bold" />
          Close Ad
        </button>
        <button>
          <InlineIcon icon="lucide:rotate-cw" />
          Renew
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)} />
    </AdvertItemWrapper>
  );
}
