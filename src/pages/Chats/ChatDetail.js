import { InlineIcon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateIsOpen } from "../../features/chatSlice";
import { formatTimeString, generateUniqueRandomId } from "../../fuctions";
import { Colors } from "../../utils/colors";
import { ChatDetailContainer } from "./Chats.styled";

export default function ChatDetail() {
  const [chats, setChats] = useState([]);
  const location = useLocation();
  const { chatId, userFName, userLName, userEmail, userPhoto, messages } =
    location?.state;
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.chat);
  const { userProfile } = useSelector((state) => state.user);
  const [message, setMessage] = useState("");
  const date = Date();
  const uniqueId = generateUniqueRandomId();
  const chatsContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chatsContainer when chats change
    if (chatsContainerRef.current) {
      chatsContainerRef.current.scrollTop = chatsContainerRef.current.scrollHeight;
    }
  }, [chats]);

  const sendMessage = (message) => {
    if (message === "") return;
    const newMessage = {
      id: uniqueId,
      from: "seller",
      userPhoto:
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
      first_name: userProfile.first_name,
      last_name: userProfile.last_name,
      email: userProfile.email,
      message: message,
      date: date.toString(),
    };
    setChats((prevChats) => [...prevChats, newMessage]);
    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the Enter key from adding a newline
      sendMessage(message);
    }
  };

  useEffect(() => {
    setChats(messages);
  }, [chatId]);
  return (
    <ChatDetailContainer isOpen={isOpen}>
      {messages.length !== 0 && (
        <div className="userProfile">
          <button
            onClick={() => dispatch(updateIsOpen(true))}
            className="backIcon"
          >
            <InlineIcon icon="ion:chevron-back" />
          </button>
          <img width={50} height={50} src={userPhoto} alt="user" />
          <h3 className="userName">
            {userFName || userLName ? `${userFName} ${userLName}` : "user"}
          </h3>
          <button className="moreIcon">
            <InlineIcon icon="mingcute:more-1-line" />
          </button>
        </div>
      )}

      {messages.length !== 0 ? (
        <div className="chatContentWrapper">
          <div ref={chatsContainerRef} className="chatsContainer">
            {chats.map((chat) => (
              <div
                key={chat.id}
                style={{ marginLeft: chat.from === "buyer" ? 0 : "auto" }}
                className="chatBox"
              >
                {chat.from === "buyer" && (
                  <img width={50} height={50} src={chat.userPhoto} alt="" />
                )}
                <div className="chatBody">
                  {chat.from === "buyer" ? (
                    <p
                      style={{ marginLeft: chat.from === "buyer" ? 0 : "auto" }}
                      className="userName"
                    >
                      {chat.first_name || chat.last_name
                        ? `${chat.first_name} ${chat.last_name}`
                        : "user"}
                    </p>
                  ) : (
                    <p
                      style={{ marginLeft: chat.from === "buyer" ? 0 : "auto" }}
                      className="userName"
                    >
                      You
                    </p>
                  )}
                  <p className="messageBody">{chat.message}</p>
                  <p
                    style={{ marginLeft: chat.from === "buyer" ? 0 : "auto" }}
                    className="chatTime"
                  >
                    {formatTimeString(chat.date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="chatInputContainer">
            <input
              className="chatInput"
              type="text"
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button className="addAttachment">
              <InlineIcon icon="tabler:file-plus" />
            </button>
            <button onClick={()=>sendMessage(message)} className="sendMessage">
              <InlineIcon icon="tabler:send" />
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{
            color: Colors.neutral_color.color900,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
          className="emptyChat"
        >
          <p>Click on any messages to start chatting</p>
          <button className="goBack">Go back</button>
        </div>
      )}
    </ChatDetailContainer>
  );
}
