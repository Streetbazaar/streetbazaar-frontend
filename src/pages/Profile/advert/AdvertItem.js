import { InlineIcon } from "@iconify/react";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCommas } from "../../../functions";
import { ModalContent, ModalOverlay } from "../../PlaceAd/PlaceAd.styled";
import { AdvertItemWrapper } from "./advert.styled";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { DELETE_ADVERT } from "../../../components/api";
import { fetchUserAdverts } from "../../../features/userAdvertSlice";

const Modal = ({ isOpen, onClose, id }) => {
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const deleteAd = async (id, token) => {
    try {
      setLoading(true);
      const res = await DELETE_ADVERT(id, token);

      if (res === 204) {
        setLoading(false);
        toast.success("Advert closed successfully");
        dispatch(fetchUserAdverts(token));
        onClose();
      }
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };
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
          <button
            disabled={loading}
            onClick={() => deleteAd(id, token)}
            className="deleteBtn"
          >
            {loading ? "Closing..." : "Yes"}
          </button>
          <button onClick={onClose} className="exitBtn">
            No
          </button>
        </div>
      </ModalContent>
    </>,
    document.body
  );
};

export default function AdvertItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
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
        <button onClick={() => navigate(`/edit-ad/${item.title}?id=${item.id}`)}>
          <InlineIcon icon="basil:edit-outline" />
          Edit Ad
        </button>
        <button onClick={() => setIsOpen(true)}>
          <InlineIcon icon="ph:x-bold" />
          Close Ad
        </button>
        {item.status === "active" && (
          <button>
            <InlineIcon icon="lucide:rotate-cw" />
            Renew
          </button>
        )}
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} id={item.id} />
    </AdvertItemWrapper>
  );
}
