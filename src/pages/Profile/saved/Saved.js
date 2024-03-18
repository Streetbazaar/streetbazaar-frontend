import { InlineIcon } from "@iconify/react";
import React from "react";
import { useSelector } from "react-redux";
import { SavedContainer, SavedItem } from "./saved.styled";
import { Colors } from "../../../utils/colors";

export default function Saved() {
  const { userProfile } = useSelector((state) => state.user);
  const savedAds = [
    {
      id: 1,
      productPhoto:
        "https://images.unsplash.com/photo-1693496830171-49a7d48cfc52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
      userName: "Dan James",
      date: "Nov 21st 2023",
      time: "08:53PM",
      productName: "Iphone 11",
      productDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsum? Distinctio nulla rem, molestias natus illo atque consequatur, in quod ipsam fuga unde suscipit voluptas! Quas omnis eos pariatur doloribus.",
    },
    {
      id: 2,
      productPhoto:
        "https://images.unsplash.com/photo-1693496830171-49a7d48cfc52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
      userName: "Dan James",
      date: "Nov 21st 2023",
      time: "08:53PM",
      productName: "Iphone 11",
      productDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsum? Distinctio nulla rem, molestias natus illo atque consequatur, in quod ipsam fuga unde suscipit voluptas! Quas omnis eos pariatur doloribus.",
    },
    {
      id: 3,
      productPhoto:
        "https://images.unsplash.com/photo-1693496830171-49a7d48cfc52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
      userName: "Dan James",
      date: "Nov 21st 2023",
      time: "08:53PM",
      productName: "Iphone 11",
      productDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsum? Distinctio nulla rem, molestias natus illo atque consequatur, in quod ipsam fuga unde suscipit voluptas! Quas omnis eos pariatur doloribus.",
    },
    {
      id: 4,
      productPhoto:
        "https://images.unsplash.com/photo-1693496830171-49a7d48cfc52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
      userName: "Dan James",
      date: "Nov 21st 2023",
      time: "08:53PM",
      productName: "Iphone 11",
      productDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsum? Distinctio nulla rem, molestias natus illo atque consequatur, in quod ipsam fuga unde suscipit voluptas! Quas omnis eos pariatur doloribus.",
    },
    {
      id: 5,
      productPhoto:
        "https://images.unsplash.com/photo-1693496830171-49a7d48cfc52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
      userName: "Dan James",
      date: "Nov 21st 2023",
      time: "08:53PM",
      productName: "Iphone 11",
      productDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsum? Distinctio nulla rem, molestias natus illo atque consequatur, in quod ipsam fuga unde suscipit voluptas! Quas omnis eos pariatur doloribus.",
    },
    {
      id: 6,
      productPhoto:
        "https://images.unsplash.com/photo-1693496830171-49a7d48cfc52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
      userName: "Dan James",
      date: "Nov 21st 2023",
      time: "08:53PM",
      productName: "Iphone 11",
      productDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsum? Distinctio nulla rem, molestias natus illo atque consequatur, in quod ipsam fuga unde suscipit voluptas! Quas omnis eos pariatur doloribus.",
    },
  ];
  return (
    <SavedContainer>
      <h3 className="savedMainHeading">Saved Ads</h3>
      <div className="contentContainer">
        <div className="userProfile">
          <div className="imageWrapper">
            <img
              src={
                userProfile?.profile_image_url
                  ? userProfile?.profile_image_url
                  : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              }
              alt="profile"
            />
          </div>
          <h3>{`${userProfile?.first_name} ${userProfile?.last_name}`}</h3>
        </div>

        <div className="filterContainer">
          <h5 className="sortText">Sort by:</h5>
          <select name="sort saved ads" id="sortSavedAds">
            <option value="Latest">Latest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>

        <div className="savedAdsContainer">
          <h4 style={{ textAlign: "center", color: Colors.neutral_color.color600 }}>Coming soon 🚧</h4>
          {/* {savedAds.map((savedAd) => (
            <SavedItem key={savedAd.id}>
              <img
                className="productPhoto"
                src={savedAd.productPhoto}
                alt="user profile"
              />

              <h4 className="userName">{savedAd.userName}</h4>

              <div className="dateTimeWrapper">
                <p className="savedAdDate">{savedAd.date}</p>
                <InlineIcon icon="mdi:dot" />
                <p className="savedAdTime">{savedAd.time}</p>
              </div>

              <h3 className="productName">{savedAd.productName}</h3>

              <article className="productDescription">
                {savedAd.productDescription}
              </article>

              <button className="showContactBtn">Show Contact</button>

              <button className="removeAdBtn">
                <InlineIcon icon="ph:x-bold" />
              </button>
            </SavedItem>
          ))} */}
        </div>
      </div>
    </SavedContainer>
  );
}
