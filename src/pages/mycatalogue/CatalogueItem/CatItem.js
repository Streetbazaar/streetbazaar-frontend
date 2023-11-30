import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React, { useState } from "react";
import { CatItemCard } from "./CatItem.styled";

export default function CatItem({ catItem }) {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <CatItemCard>
      <img src={catItem?.image_url} alt="product image" />
      <div className="groupContainer">
        <div className="groupOne">
          <p className="productName">{catItem?.title}</p>
          <p className="amount">N{catItem?.amount}</p>
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
