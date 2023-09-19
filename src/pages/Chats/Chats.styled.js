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
  padding: 20px;

  @media (max-width: 780px) {
    position: absolute;
    width: 100%;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(-100%)" : "translateX(0%)"};
    transition: transform 0.5s ease;
  }
`;

export {
  ChatDetailContainer,
  ChatListItem,
  ChatsContainer,
  ChatsListContainer,
};
