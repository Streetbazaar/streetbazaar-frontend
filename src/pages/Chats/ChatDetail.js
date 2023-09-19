import React from "react";
import { useParams } from "react-router-dom";
import { ChatDetailContainer } from "./Chats.styled";

const messages = [
  [
    {
      id: 1,
      from: "buyer",
      userPhoto:
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
      first_name: "",
      last_name: "",
      userEmail: "user@gmail.com",
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
      userEmail: "user@gmail.com",
      message: "I'm located at portHarcourt",
      date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
    },
  ],
  [
    {
      id: 1,
      from: "buyer",
      userPhoto:
        "https://images.unsplash.com/photo-1687360440648-ec9708d52086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80",
      first_name: "",
      last_name: "",
      userEmail: "user@gmail.com",
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
      userEmail: "user@gmail.com",
      message: "I'm located at portHarcourt",
      date: "Tue Sep 19 2023 17:00:24 GMT+0100 (West Africa Standard Time)",
    },
  ],
];

export default function ChatDetail() {
  const { chatId } = useParams();
  return <ChatDetailContainer>
    klafjkl
  </ChatDetailContainer>;
}
