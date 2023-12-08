import React from "react";
import { addCommas } from "../../functions";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../store/cart-slice";

const Product = ({ name, id, imgURL, price }) => {
  // const dispatch = useDispatch();
  // const addToCart = () => {
  //     dispatch(
  //         cartActions.addToCart({
  //             name,
  //             id,
  //             price,
  //         })
  //     );
  // };

  return (
    <div>
      <div>
        <img src={imgURL} alt={name} />
      </div>
      <div className="product-list">
        <div className="product-list1">
          <h2>{name}</h2>{" "}
          <svg
            width="25"
            height="25"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1902_7804)">
              <path
                d="M21.8933 11.0733C21.5528 10.7327 21.1485 10.4624 20.7036 10.2781C20.2586 10.0937 19.7817 9.99878 19.3 9.99878C18.8183 9.99878 18.3414 10.0937 17.8964 10.2781C17.4515 10.4624 17.0472 10.7327 16.7067 11.0733L16 11.78L15.2933 11.0733C14.6055 10.3855 13.6727 9.99914 12.7 9.99914C11.7273 9.99914 10.7945 10.3855 10.1067 11.0733C9.41887 11.7611 9.03247 12.694 9.03247 13.6667C9.03247 14.6394 9.41887 15.5722 10.1067 16.26L10.8133 16.9667L16 22.1533L21.1867 16.9667L21.8933 16.26C22.234 15.9195 22.5042 15.5152 22.6886 15.0702C22.873 14.6253 22.9679 14.1483 22.9679 13.6667C22.9679 13.185 22.873 12.7081 22.6886 12.2631C22.5042 11.8181 22.234 11.4138 21.8933 11.0733V11.0733Z"
                stroke="#9EA6AF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="15.5"
              stroke="#9EA6AF"
            />
            <defs>
              <clipPath id="clip0_1902_7804">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(8 8)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="product-list2">
        <p>₦ {addCommas(price)}</p>
      </div>
      <button>Show Contact</button>
    </div>
  );
};

export default Product;
