import { InlineIcon } from "@iconify/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTimeAgo } from "../../fuctions";
import { ChatListItem, ChatsListContainer } from "./Chats.styled";
import { updateIsOpen } from "../../features/chatSlice";

const chats = [
  {
    id: 0,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "Barima",
    email: "user@gmail.com",
    messages: [
      {
        id: 1,
        from: "buyer",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "Daniel",
        last_name: "",
        email: "user@gmail.com",
        message: "Hi where are you located?",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
      {
        id: 2,
        from: "seller",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "",
        last_name: "",
        email: "user@gmail.com",
        message: "I'm located at portHarcourt",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
      {
        id: 3,
        from: "buyer",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "",
        last_name: "",
        email: "user@gmail.com",
        message: "I'm located at portHarcourt",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
      {
        id: 4,
        from: "seller",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "",
        last_name: "",
        email: "user@gmail.com",
        message: "I'm located at portHarcourt",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
    ],
    date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 1,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "Daniel",
    last_name: "Barima",
    email: "user@gmail.com",
    messages: [
      {
        id: 1,
        from: "buyer",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "Daniel",
        last_name: "",
        email: "user@gmail.com",
        message: "Hi where are you located?",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
      {
        id: 2,
        from: "seller",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "",
        last_name: "",
        email: "user@gmail.com",
        message: "I'm located at portHarcourt",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
    ],
    date: "Tue Sep 18 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 2,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    messages: [
      {
        id: 1,
        from: "buyer",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "Daniel",
        last_name: "",
        email: "user@gmail.com",
        message: "Hi where are you located?",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
      {
        id: 2,
        from: "seller",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "",
        last_name: "",
        email: "user@gmail.com",
        message: "I'm located at portHarcourt",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
    ],
    date: "Tue Sep 17 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 3,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    messages: [
      {
        id: 1,
        from: "buyer",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "Daniel",
        last_name: "",
        email: "user@gmail.com",
        message: "Hi where are you located?",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
      {
        id: 2,
        from: "seller",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "",
        last_name: "",
        email: "user@gmail.com",
        message: "I'm located at portHarcourt",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
    ],
    date: "Tue Sep 16 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },

  {
    id: 4,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    messages: [
      {
        id: 1,
        from: "buyer",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "Daniel",
        last_name: "",
        email: "user@gmail.com",
        message: "Hi where are you located?",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
      {
        id: 2,
        from: "seller",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "",
        last_name: "",
        email: "user@gmail.com",
        message: "I'm located at portHarcourt",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
    ],
    date: "Tue Sep 16 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 5,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    messages: [
      {
        id: 1,
        from: "buyer",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "Daniel",
        last_name: "",
        email: "user@gmail.com",
        message: "Hi where are you located?",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
      {
        id: 2,
        from: "seller",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "",
        last_name: "",
        email: "user@gmail.com",
        message: "I'm located at portHarcourt",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
    ],
    date: "Tue Sep 16 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 6,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    messages: [
      {
        id: 1,
        from: "buyer",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "Daniel",
        last_name: "",
        email: "user@gmail.com",
        message: "Hi where are you located?",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
      {
        id: 2,
        from: "seller",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "",
        last_name: "",
        email: "user@gmail.com",
        message: "I'm located at portHarcourt",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
    ],
    date: "Tue Sep 16 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 7,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    messages: [
      {
        id: 1,
        from: "buyer",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "Daniel",
        last_name: "",
        email: "user@gmail.com",
        message: "Hi where are you located?",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
      {
        id: 2,
        from: "seller",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "",
        last_name: "",
        email: "user@gmail.com",
        message: "I'm located at portHarcourt",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
    ],
    date: "Tue Sep 16 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 8,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    messages: [
      {
        id: 1,
        from: "buyer",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "Daniel",
        last_name: "",
        email: "user@gmail.com",
        message: "Hi where are you located?",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
      {
        id: 2,
        from: "seller",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "",
        last_name: "",
        email: "user@gmail.com",
        message: "I'm located at portHarcourt",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
    ],
    date: "Tue Sep 16 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 9,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    messages: [
      {
        id: 1,
        from: "buyer",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "Daniel",
        last_name: "",
        email: "user@gmail.com",
        message: "Hi where are you located?",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
      {
        id: 2,
        from: "seller",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "",
        last_name: "",
        email: "user@gmail.com",
        message: "I'm located at portHarcourt",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
    ],
    date: "Tue Sep 16 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 10,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    messages: [
      {
        id: 1,
        from: "buyer",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "Daniel",
        last_name: "",
        email: "user@gmail.com",
        message: "Hi where are you located?",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
      {
        id: 2,
        from: "seller",
        userPhoto:
          "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
        first_name: "",
        last_name: "",
        email: "user@gmail.com",
        message: "I'm located at portHarcourt",
        date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
      },
    ],
    date: "Tue Sep 16 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
];

export default function ChatsList() {
  const { userProfile } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen } = useSelector((state) => state.chat);
  return (
    <ChatsListContainer isOpen={isOpen}>
      <div className="messagesHeaderContainer">
        <div className="mainHeader">
          <h3 className="mainText">My Messages</h3>
          <button className="moreIcon">
            <InlineIcon icon="mingcute:more-1-line" />
          </button>
        </div>
        <div className="searchMessages">
          <input className="searchMessages" placeholder="Search" />
          <InlineIcon icon="iconamoon:search-light" />
        </div>
      </div>

      <div className="chatsContainer">
        {chats.map((chat) => {
          const lastObject = chat.messages[chat.messages.length - 1];
          return (
            <ChatListItem
             
              onClick={() =>{
                dispatch(updateIsOpen(false))
                navigate("/messages", {
                  state: {
                    chatId: chat.id,
                    userFName: chat.first_name,
                    userLName: chat.last_name,
                    userEmail: chat.email,
                    userPhoto: chat.userPhoto,
                    messages: chat.messages,
                  },
                })}
              }
              key={chat.id}
            >
              <img width={50} height={50} src={chat.userPhoto} alt="user" />
              <div className="singleMessageWrapper">
                <div className="userAndTimeAgo">
                  <h5 className="userName">
                    {chat.first_name || chat.last_name
                      ? `${chat.first_name} ${chat.last_name}`
                      : "User"}
                  </h5>
                  <p className="timeAgo">{getTimeAgo(chat.date)}</p>
                </div>

                <p className="chatPreview">
                  {lastObject.message.length > 23
                    ? lastObject.message.substring(0, 23 - 3) + "..."
                    : lastObject.message}
                </p>
              </div>
            </ChatListItem>
          );
        })}
      </div>
    </ChatsListContainer>
  );
}
