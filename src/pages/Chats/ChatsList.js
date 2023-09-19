import { InlineIcon } from "@iconify/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTimeAgo } from "../../fuctions";
import { ChatListItem, ChatsListContainer } from "./Chats.styled";
import { updateCurrentChat } from "../../features/chatSlice";

const chats = [
  {
    id: 1,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "Barima",
    email: "user@gmail.com",
    recentMessage: "Hi where are you located?",
    date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 2,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "Daniel",
    last_name: "Barima",
    email: "user@gmail.com",
    recentMessage: "Hi where are you located?",
    date: "Tue Sep 18 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 3,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    recentMessage: "Hi where are you located?",
    date: "Tue Sep 17 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 4,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    recentMessage: "Hi where are you located?",
    date: "Tue Sep 16 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  
  {
    id: 5,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    recentMessage: "Hi where are you located?",
    date: "Tue Sep 16 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 6,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    recentMessage: "Hi where are you located?",
    date: "Tue Sep 16 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 7,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    userEmail: "user@gmail.com",
    recentMessage: "Hi where are you located?",
    date: "Tue Sep 16 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 8,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    recentMessage: "Hi where are you located?",
    date: "Tue Sep 16 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 9,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    recentMessage: "Hi where are you located?",
    date: "Tue Sep 16 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 10,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    recentMessage: "Hi where are you located?",
    date: "Tue Sep 16 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
  {
    id: 11,
    userPhoto:
      "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
    first_name: "",
    last_name: "",
    email: "user@gmail.com",
    recentMessage: "Hi where are you located?",
    date: "Tue Sep 16 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
  },
];

export default function ChatsList() {
  const { userProfile } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  return (
    <ChatsListContainer>
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
        {chats.map((chat) => (
          <ChatListItem onClick={()=>dispatch(updateCurrentChat(chat.id))} key={chat.id}>
            <img width={50} height={50} src={chat.userPhoto} alt="" />
            <div className="singleMessageWrapper">
              <div className="userAndTimeAgo">
                <h5 className="userName">
                  {chat.first_name || chat.last_name
                    ? `${chat.first_name} ${chat.last_name}`
                    : chat.email}
                </h5>
                <p className="timeAgo">{getTimeAgo(chat.date)}</p>
              </div>
              
                <p className="chatPreview">
                  {chat.recentMessage.length > 23
                    ? chat.recentMessage.substring(0, 23 - 3) + "..."
                    : chat.recentMessage}
                </p>
              
            </div>
          </ChatListItem>
        ))}
      </div>
    </ChatsListContainer>
  );
}
