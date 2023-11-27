import { Skeleton } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import { useCatalogue } from "../../hooks/useCatalogue";
import { MyCatalogueContainer } from "./MyCatalogue.styled";

const products = [
  {
    id: 1,
    productName: "Iphone 11 pro max",
    image:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 2,
    productName: "Iphone 11 pro max",
    image:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 3,
    productName: "Iphone 11 pro max",
    image:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 4,
    productName: "Iphone 11 pro max",
    image:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 5,
    productName: "Iphone 11 pro max",
    image:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 6,
    productName: "Iphone 11 pro max",
    image:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 7,
    productName: "Iphone 11 pro max",
    image:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 8,
    productName: "Iphone 11 pro max",
    image:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 9,
    productName: "Iphone 11 pro max",
    image:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
  {
    id: 10,
    productName: "Iphone 11 pro max",
    image:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    amount: "500,000",
  },
];

export default function MyCatalogue() {
  const { business_id } = useParams();
  const [showContact, setShowContact] = useState(false);
  const { catalogueDetails, loading } = useCatalogue(business_id);
  const fullName = `${catalogueDetails?.owner_data?.first_name} ${catalogueDetails?.owner_data?.last_name}`;

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
              <img
                src="https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80"
                alt="Owner"
              />
            )}
          </div>

          {loading ? <Skeleton variant="rounded" width={"100%"} height={20} /> :<h1 className="ownerName">
            {catalogueDetails.name
              ? catalogueDetails.name
              : catalogueDetails?.owner_data?.first_name
              ? `${catalogueDetails?.owner_data?.first_name} ${catalogueDetails?.owner_data?.last_name}`
              : catalogueDetails?.owner_data?.email}
          </h1>}
        </div>

        <div className="contactDetail">
          {
            loading ? <Skeleton variant="rounded" width={"100%"} height={50} /> : 
          <button onClick={() => setShowContact(!showContact)}>
            {showContact ? (
              <a href="tel:+23481612345678">+23481612345678</a>
            ) : (
              <p>Show Contact</p>
            )}
          </button>
          }
        </div>
      </div>
      <div className="adContent">
        {products.map((item) => (
          <Product
            key={item.id}
            image={item.image}
            productName={item.productName}
            amount={item.amount}
          />
        ))}
      </div>
    </MyCatalogueContainer>
  );
}
