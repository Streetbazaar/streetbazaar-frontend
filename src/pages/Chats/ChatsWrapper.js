import React from "react";
import ChatDetail from "./ChatDetail";
import { ChatsContainer } from "./Chats.styled";
import ChatsList from "./ChatsList";
import { useLocation } from "react-router-dom";

export default function ChatsWrapper() {
  const location = useLocation()
  return (
    <ChatsContainer>
      <div className="captionContainer">
        <h2 className="captionHeader">Messages</h2>
        <p className="captionParagraph">
          Send and recieve messages with your buyers and sellers
        </p>
      </div>
      <div className="chatsWrapper">
        <ChatsList />
        {location.state !== null && (
          <ChatDetail />

        )}
      </div>
    </ChatsContainer>
  );
}
