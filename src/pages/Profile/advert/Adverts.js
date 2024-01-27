import { InlineIcon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components/spinner/Spiner";
import { fetchMoreUserAdverts, fetchUserAdverts } from "../../../features/userAdvertSlice";
import AdvertItem from "./AdvertItem";
import { AdvertContainer, AdvertSelect, ButtonFilter } from "./advert.styled";
import TrashImg from "../../../assets/images/CharcoDeleteTrash.png";
import { LoadMoreButton } from "../../../components/styles/styledComponents";
import { loadMoreAdverts } from "../../../features/advertSlice";

export default function Adverts() {
  const { userProfile, token } = useSelector((state) => state.user);
  const { advertStatus, myAdvertsList, myAdvertsNextLink } = useSelector(
    (state) => state.userAdverts
  );
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState(0); // Defaulting to the first button
  const [adFilters, setAdFilters] = useState({
    adStatus: "active",
    search: "",
    sort: "latest",
  });

  const changeStatus = (newAdStatus) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("adStatus", newAdStatus.toString());
    window.history.pushState({}, "", `?${searchParams.toString()}`);
    setAdFilters((prevFilters) => ({
      ...prevFilters,
      adStatus: newAdStatus,
    }));
    dispatch(fetchUserAdverts(token));
  };
  const handleButtonClick = (index, newAdStatus) => {
    changeStatus(newAdStatus);
    setActiveIndex(index);
  };
  const buttonData = [
    { icon: "prime:check-circle", label: "active ads", status: "active" },
    { icon: "octicon:clock-24", label: "reviewing", status: "reviewing" },
    { icon: "mdi:alert-circle-outline", label: "declined", status: "declined" },
    { icon: "basil:edit-outline", label: "drafts", status: "draft" },
  ];

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const pageParam = searchParams.get("adStatus");
    const initialPage = pageParam;
    console.log(initialPage);
    if (initialPage === null) return;

    setAdFilters((prevFilters) => ({
      ...prevFilters,
      adStatus: initialPage,
    }));
  }, []);

  useEffect(() => {
    dispatch(fetchUserAdverts(token));
  }, []);

  useEffect(() => {
    let x;
    x++;
  }, [myAdvertsList]);

  return (
    <AdvertContainer>
      <h3 className="advertMainHeading">My Adverts</h3>

      <div className="deskFilters">
        <div className="searchBar">
          <div className="searchIcon">
            <InlineIcon icon="ion:search-outline" />
          </div>
          <input type="text" placeholder="Search for product" />
        </div>

        <div className="selectBar">
          <p>Sort by:</p>
          <AdvertSelect>
            <option value="Recommended">Latest</option>
            <option value="Popularity">Oldest</option>
          </AdvertSelect>
        </div>
      </div>

      <div className="contentContainer">
        <div className="userProfile">
          <div className="imageWrapper">
            <img
              src={
                userProfile?.profile_image_url
                  ? userProfile?.profile_image_url
                  : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              }
              alt="profile photo"
            />
          </div>
          <h3>{`${userProfile?.first_name} ${userProfile?.last_name}`}</h3>
        </div>

        <div className="buttonFilterList">
          {buttonData.map((button, index) => (
            <ButtonFilter
              key={index}
              isActive={button.status === adFilters.adStatus}
              onClick={() => handleButtonClick(index, button.status)}
            >
              <InlineIcon icon={button.icon} />
              {button.label}
            </ButtonFilter>
          ))}
        </div>

        <div className="mobileFilters">
          <div className="searchBar">
            <div className="searchIcon">
              <InlineIcon icon="ion:search-outline" />
            </div>
            <input type="text" placeholder="Search for product" />
          </div>

          <div className="selectBar">
            <AdvertSelect>
              <option value="Recommended">Latest</option>
              <option value="Popularity">Oldest</option>
            </AdvertSelect>
          </div>
        </div>

        <div className="advertsList">
          {advertStatus !== "loading" &&
            myAdvertsList
              .filter((advert) => advert.status === adFilters.adStatus)
              .map((advert, index) => {
                return <AdvertItem item={advert} key={index} />;
              })}
          {advertStatus !== "loading" &&
          myAdvertsList.length != 0 &&
          myAdvertsList.filter((advert) => advert.status === adFilters.adStatus)
            .length === 0 ? (
            <div className="emptyAd">
              <img src={TrashImg} alt="error" />
              <h1>Oops!</h1>
              <p>There are no adverts here</p>
            </div>
          ) : null}
          {myAdvertsList.length === 0 ? (
            <div className="emptyAd">
              <img src={TrashImg} alt="error" />
              <h1>Oops!</h1>
              <p>There are no adverts here</p>
            </div>
          ) : null}
        </div>

        {advertStatus === "loading" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner />
          </div>
        )}
      {myAdvertsNextLink && advertStatus !== "loading"  ? (
        <LoadMoreButton
          onClick={() => {
            dispatch(fetchMoreUserAdverts({myAdvertsNextLink, token}))
            
          }}
        >
          Load more...
        </LoadMoreButton>
      ): null}
     
      </div>
    </AdvertContainer>
  );
}
