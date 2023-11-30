import { Skeleton } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TrashImg from "../../assets/images/CharcoDeleteTrash.png";
import { useCatalogue } from "../../hooks/useCatalogue";
import CatItem from "./CatalogueItem/CatItem";
import { MyCatalogueContainer } from "./MyCatalogue.styled";

const products = [
  {
    id: 1,
    title: "Iphone 11 pro max",
    image_url:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 2,
    title: "Iphone 11 pro max",
    image_url:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 3,
    title: "Iphone 11 pro max",
    image_url:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 4,
    title: "Iphone 11 pro max",
    image_url:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 5,
    title: "Iphone 11 pro max",
    image_url:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 6,
    title: "Iphone 11 pro max",
    image_url:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 7,
    title: "Iphone 11 pro max",
    image_url:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 8,
    title: "Iphone 11 pro max",
    image_url:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 9,
    title: "Iphone 11 pro max",
    image_url:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 10,
    title: "Iphone 11 pro max",
    image_url:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
];

export default function MyCatalogue() {
  const { business_id } = useParams();
  const [showContact, setShowContact] = useState(false);
  const { catalogueDetails, loading } = useCatalogue(business_id);
  const fullName = `${catalogueDetails?.owner_data?.first_name} ${catalogueDetails?.owner_data?.last_name}`;
  const profilePhoto = catalogueDetails?.owner_data?.profile_image_url
    ? catalogueDetails?.owner_data?.profile_image_url
    : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";

  // useEffect(()=>{
  //   console.log(catalogueDetails, catalogueDetails?.owner_data?.email, loading, fullName, "Hi from my hook")
  // }, [catalogueDetails])

  return (
    <MyCatalogueContainer>
      <div className="ownerProfileDetail">
        <div className="profileWrapper">
          <div className="profilePhoto">
            {loading ? (
              <Skeleton variant="circular" width={50} height={50} />
            ) : (
              <img src={profilePhoto} alt="Owner" />
            )}
          </div>

          {loading ? (
            <Skeleton variant="rounded" width={"100%"} height={20} />
          ) : (
            <h1 className="ownerName">
              {catalogueDetails.name
                ? catalogueDetails.name
                : catalogueDetails?.owner_data?.first_name
                ? `${catalogueDetails?.owner_data?.first_name} ${catalogueDetails?.owner_data?.last_name}`
                : "--------------"}
            </h1>
          )}
        </div>

        {loading && <Skeleton variant="rounded" width={"100%"} height={50} />}
        {Object.keys(catalogueDetails).length === 0 &&
        catalogueDetails?.owner_data?.phone_number ? (
          <div className="contactDetail">
            <button onClick={() => setShowContact(!showContact)}>
              {showContact ? (
                <a href={`tel:${catalogueDetails?.owner_data?.phone_number}`}>
                  {catalogueDetails?.owner_data?.phone_number}
                </a>
              ) : (
                <p>Show Contact</p>
              )}
            </button>
          </div>
        ) : null}
      </div>
      <div className="adContent">
        {loading &&
          Array(8)
            .fill()
            .map((_item, i) => (
              <Skeleton key={i} variant="rounded" width={"30%"} height={200} />
            ))}
        {catalogueDetails?.adverts?.map((item) => (
          <CatItem catItem={item} />
        ))}
        {!loading && catalogueDetails?.adverts?.length === 0 ? (
          <div className="emptyAd">
            <img src={TrashImg} alt="error" />
            <h1>Oops!</h1>
            <p>There are no adverts here</p>
          </div>
        ) : null}
      </div>
    </MyCatalogueContainer>
  );
}
