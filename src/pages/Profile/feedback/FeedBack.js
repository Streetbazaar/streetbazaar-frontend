import { InlineIcon } from "@iconify/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StarSvg } from "../../../components/SvgComponents";
import { Colors } from "../../../utils/colors";
import { ButtonFilter } from "../advert/advert.styled";
import { FeedBackContainer, FeedBackItem } from "./feedback.styled";

export default function FeedBack() {
  const { userProfile } = useSelector((state) => state.user);
  const [activeIndex, setActiveIndex] = useState(0); // Defaulting to the first button
  const maxRating = [1, 2, 3, 4, 5];

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  const buttonData = [
    { icon: "lucide:message-circle", label: "Reviews" },
    { icon: "iconamoon:edit-duotone", label: "Sent" },
  ];

  const feedbacks = [
    {
      id: 1,
      userPhoto:
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
      userName: "Dan James",
      date: "Nov 21st 2023",
      time: "08:53PM",
      productName: "Iphone 11",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat ab officia illum in dolore repudiandae eligendi. Quo, laudantium error.",
      images: [
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
      ],
      rating: "4.0",
    },
    {
      id: 2,
      userPhoto:
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
      userName: "Dan James",
      date: "Nov 21st 2023",
      time: "08:53PM",
      productName: "Iphone 11",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat ab officia illum in dolore repudiandae eligendi. Quo, laudantium error.",
      images: [
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
      ],
      rating: "1.0",
    },
    {
      id: 4,
      userPhoto:
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
      userName: "Dan James",
      date: "Nov 21st 2023",
      time: "08:53PM",
      productName: "Iphone 11",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat ab officia illum in dolore repudiandae eligendi. Quo, laudantium error.",
      images: [
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
      ],
      rating: "2.0",
    },
    {
      id: 5,
      userPhoto:
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
      userName: "Dan James",
      date: "Nov 21st 2023",
      time: "08:53PM",
      productName: "Iphone 11",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat ab officia illum in dolore repudiandae eligendi. Quo, laudantium error.",
      images: [
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
      ],
      rating: "3.0",
    },
  ];
  return (
    <FeedBackContainer>
      <h3 className="feedbackMainHeading">Feedback</h3>
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
        <div className="buttonFilterList">
          {buttonData.map((button, index) => (
            <ButtonFilter
              key={index}
              isActive={index === activeIndex}
              onClick={() => handleButtonClick(index)}
            >
              <InlineIcon icon={button.icon} />
              {button.label}
            </ButtonFilter>
          ))}
        </div>

        <div className="feedbackWrapper">
          <h4
            style={{
              textAlign: "center",
              color: Colors.neutral_color.color600,
            }}
          >
            Coming soon 🚧
          </h4>
          {/* {feedbacks.map((feedback) => (
            <FeedBackItem key={feedback.id}>
              <img
                className="userPhoto"
                src={feedback.userPhoto}
                alt="user profile"
              />

              <h4 className="userName">{feedback.userName}</h4>

              <div className="dateTimeWrapper">
                <p className="feedbackDate">{feedback.date}</p>
                <InlineIcon icon="mdi:dot" />
                <p className="feedbackTime">{feedback.time}</p>
              </div>

              <h3 className="productName">{feedback.productName}</h3>

              <article className="productComment">{feedback.comment}</article>

              <div className="productImagesWrapper">
                {feedback.images.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt="product"
                    className="productImage"
                  />
                ))}
              </div>

              <div className="ratingWrapper">
                <div className="starRating">
                  {maxRating.map((item, i) => {
                    return (
                      <StarSvg
                        key={i}
                        height="10"
                        width="10"
                        fill={
                          item <= parseInt(feedback.rating)
                            ? Colors.gold
                            : Colors.neutral_color.color300
                        }
                      />
                    );
                  })}
                </div>
                <p className="ratingText">{feedback.rating} Rating</p>
              </div>
            </FeedBackItem>
          ))} */}
        </div>
      </div>
    </FeedBackContainer>
  );
}
