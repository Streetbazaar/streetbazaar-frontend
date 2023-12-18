import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCommas } from "../../../functions";
import { CatItemCard } from "./CatItem.styled";

export default function CatItem({ catItem }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const navigate = useNavigate();
  return (
    <CatItemCard
      onClick={() =>
        navigate(`/product-detail/${catItem?.title}?id=${catItem?.id}`)
      }
    >
      <img src={catItem?.pictures[0]?.image_url} alt="product image" />
      <div className="groupContainer">
        <div className="groupOne">
          <p className="productName">{catItem?.title}</p>
          <p className="amount">N{addCommas(catItem?.price)}</p>
        </div>
        <button
          onClick={() => setIsFavourite(!isFavourite)}
          className="favouriteDiv"
        >
          {isFavourite ? (
            <FavoriteIcon style={{ color: "red" }} className="favouriteIcon" />
          ) : (
            <FavoriteBorderOutlinedIcon className="favouriteIcon" />
          )}
        </button>
      </div>
    </CatItemCard>
  );
}
