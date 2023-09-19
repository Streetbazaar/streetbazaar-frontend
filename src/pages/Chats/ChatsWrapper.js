import React from "react";
import ChatDetail from "./ChatDetail";
import { ChatsContainer } from "./Chats.styled";
import ChatsList from "./ChatsList";

export default function ChatsWrapper() {
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
        <ChatDetail />
      </div>
    </ChatsContainer>
  );
}
