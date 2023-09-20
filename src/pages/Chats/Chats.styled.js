import styled from "styled-components";
import { Colors } from "../../utils/colors";

const ChatsContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 20px;

  div.captionContainer {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    gap: 10px;

    h2.captionHeader {
      color: ${Colors.neutral_color.color900};
      font-size: 25px;
    }
    p.captionParagraph {
      color: ${Colors.neutral_color.color900};
      font-size: 15px;
    }
  }

  div.chatsWrapper {
    display: flex;
    border: 1px solid ${Colors.neutral_color.color600};
    border-radius: 5px;
    height: 32em;
    position: relative;
    overflow-x: hidden;
  }

  @media(max-width: 768px) {
    div.chatsWrapper {
      height: 38em;
    }
  }
`;

const ChatsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 24em;
  border-right: 1px solid ${Colors.neutral_color.color600};
  gap: 20px;
  padding: 20px;

  div.messagesHeaderContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;

    div.mainHeader {
      display: flex;
      justify-content: space-between;

      h3.mainText {
        font-size: 20px;
        color: ${Colors.neutral_color.color900};
      }

      button.moreIcon {
        outline: none;
        border: none;
        background: none;
        font-size: 25px;
        color: ${Colors.neutral_color.color700};
      }
    }
  }

  div.searchMessages {
    position: relative;
    border-bottom: 1px solid ${Colors.neutral_color.color700};
    padding-bottom: 25px;

    input {
      border: none;
      outline: none;
      border: 1px solid ${Colors.neutral_color.color900};
      padding: 18px;
      width: 100%;
      padding-left: 40px;
      font-size: 15px;
      font-weight: 400;
      border-radius: 8px;
      color: ${Colors.neutral_color.color900};
    }

    svg {
      position: absolute;
      left: 5px;
      top: 13px;
      font-size: 30px;
      color: ${Colors.neutral_color.color700};
    }
  }

  div.chatsContainer {
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow-y: auto;
  }

  @media (max-width: 780px) {
    border-right: none;
    width: 100%;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0%)" : "translateX(-100%)"};
    transition: transform 0.5s ease;
  }
`;

const ChatListItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  cursor: pointer;

  img {
    border-radius: 50px;
    width: 50px;
    height: 50px;
  }

  div.singleMessageWrapper {
    display: flex;
    gap: 5px;
    flex-direction: column;

    div.userAndTimeAgo {
      display: flex;
      gap: 10px;
      align-items: center;

      h5.userName {
        font-size: 17px;
        color: ${Colors.neutral_color.color900};
      }

      p.timeAgo {
        font-size: 12px;
        color: ${Colors.neutral_color.color900};
      }
    }

    p.chatPreview {
      font-size: 16px;
      color: ${Colors.neutral_color.color900};
    }
  }
`;

const ChatDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  position: relative;
  height: 100%;

  div.userProfile {
    display: flex;
    gap: 10px;
    padding: 20px;
    border-bottom: 1px solid ${Colors.neutral_color.color400};
    align-items: center;
    background-color: ${Colors.white};

    button.backIcon {
      outline: none;
      background: none;
      border: none;
      width: 30px;
      font-size: 25px;
      color: ${Colors.neutral_color.color800};
      display: none;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
    }

    h3.userName {
      color: ${Colors.neutral_color.color800};
      font-size: 20px;
      text-transform: capitalize;
    }
  }

  div.chatContentWrapper {
    display: flex;
    flex-direction: column;
    height: 73%;

    div.chatsContainer {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
      overflow-y: auto;

      div.chatBox {
        display: flex;
        gap: 10px;
        img {
          width: 40px;
          height: 40px;
          border-radius: 40px;
        }

        div.chatBody {
          display: flex;
          flex-direction: column;
          gap: 8px;
          p.userName {
            color: ${Colors.neutral_color.color900};
            font-size: 17px;
            font-weight: bold;
            text-transform: capitalize;
          }

          p.messageBody {
            border: 1px solid ${Colors.neutral_color.color500};
            padding: 10px;
            border-radius: 7px;
            max-width: 250px;
            color: ${Colors.neutral_color.color900};
            font-size: 15px;
          }

          p.chatTime {
            color: ${Colors.neutral_color.color900};
            font-size: 13px;
          }
        }
      }
    }

    
    div.chatInputContainer {
      border-top: 1px solid ${Colors.neutral_color.color700};
      height: 50px;
      justify-self: flex-end;
      padding: 20px;
      padding-top: 50px;
      width: 100%;
      display: flex;
      gap: 20px;
      align-items: center;
      margin-top: auto;

      input.chatInput {
        outline: none;
        border: none;
        background: none;
        color: ${Colors.neutral_color.color900};
        padding: 20px;
        width: 90%;
        font-size: 18px;
        background-color: ${Colors.neutral_color.color100};
      }

      button {
        outline: none;
        border: none;
        background: none;
        width: 60px;
        height: 60px;
        font-size: 30px;
      }

      button.addAttachment {
        background-color: ${Colors.white};
        border: 1px solid ${Colors.neutral_color.color500};
        border-radius: 6px;
        color: ${Colors.neutral_color.color600};
      }

      button.sendMessage {
        background-color: ${Colors.primary_color.color100};
        border-radius: 6px;
        color: ${Colors.primary_color.color500};
      }
    }
  }

  @media (max-width: 780px) {
    position: absolute;
    width: 100%;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(-100%)" : "translateX(0%)"};
    transition: transform 0.5s ease;

    div.userProfile {
      button.backIcon {
        display: flex;
      }
    }

    div.chatContentWrapper {
      height: 78%;
    }
  }
`;

export {
  ChatDetailContainer,
  ChatListItem,
  ChatsContainer,
  ChatsListContainer,
};
