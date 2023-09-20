import { InlineIcon } from "@iconify/react";
import React from "react";
import { formatDateString, formatTimeString } from "../../fuctions";
import {
  NotificationItem,
  NotificationsContainer,
} from "./notifications.styled";

export default function Notifications() {
  const date = new Date();
  const notifications = [
    {
      id: 1,
      title: "Iphone 14 pro max",
      imgUrl:
        "https://images.unsplash.com/photo-1675466583534-1755fbb2793b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus consectetur quae suscipit quis qui ullam laboriosam nobis voluptatibus velit!",
      date: date.toString(),
    },
    {
      id: 2,
      title: "Iphone 14 pro max",
      imgUrl:
        "https://images.unsplash.com/photo-1675466583534-1755fbb2793b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus consectetur quae suscipit quis qui ullam laboriosam nobis voluptatibus velit!",
      date: date.toString(),
    },
    {
      id: 3,
      title: "Iphone 14 pro max",
      imgUrl:
        "https://images.unsplash.com/photo-1675466583534-1755fbb2793b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus consectetur quae suscipit quis qui ullam laboriosam nobis voluptatibus velit!",
      date: date.toString(),
    },
    {
      id: 4,
      title: "Iphone 14 pro max",
      imgUrl:
        "https://images.unsplash.com/photo-1675466583534-1755fbb2793b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus consectetur quae suscipit quis qui ullam laboriosam nobis voluptatibus velit!",
      date: date.toString(),
    },
  ];
  return (
    <NotificationsContainer>
      <h3 className="notificationsHeading">Notifications</h3>

      <div className="noficationsWrapper">
        <button className="markAsRead">Mark all as read</button>
        {notifications.map((notification) => (
          <NotificationItem key={notification.id}>
            <div className="unreadIcon" />
            <img className="notificationImg" src={notification.imgUrl} alt="product" />
            <div className="notificationDetailsContainer">
              <h5 className="notificationTitle">{notification.title}</h5>
              <div className="dateTimeWrapper">
                <p className="notificationDate">
                  {formatDateString(notification.date)}
                </p>
                <InlineIcon icon="mdi:dot" />
                <p className="notificationTime">
                  {formatTimeString(notification.date)}
                </p>
              </div>
            </div>
          </NotificationItem>
        ))}
      </div>
    </NotificationsContainer>
  );
}
