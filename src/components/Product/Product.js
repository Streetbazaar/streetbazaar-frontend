import React from "react";
import { ProductCard } from "./Product.styled";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Colors } from "../../utils/colors";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Product({ image, productName, amount }) {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <ProductCard>
      <img src={image} alt="product image" />
      <div className="groupContainer">
        <div className="groupOne">
          <p className="productName">{productName}</p>
          <p className="amount">N{amount}</p>
        </div>
        <button onClick={()=>setIsFavourite(!isFavourite)} className="favouriteDiv">
          {isFavourite ? (
            <FavoriteIcon style={{color: "red"}} className="favouriteIcon" />
          ) : (
            <FavoriteBorderOutlinedIcon className="favouriteIcon" />
          )}
        </button>
      </div>
      <button>Show Contact</button>
    </ProductCard>
  );
}