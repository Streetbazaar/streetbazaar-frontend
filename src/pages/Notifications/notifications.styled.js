import styled from "styled-components";
import { Colors } from "../../utils/colors";

const NotificationsContainer = styled.div`
  max-width: 1440px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3.notificationsHeading {
    padding: 20px;
    color: ${Colors.neutral_color.color900};
  }

  div.noficationsWrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    button.markAsRead {
        outline: none;
        border: none;
        background: none;
        width: 130px;
        height: 50px;
        margin-left: auto;
        border: 1px solid ${Colors.neutral_color.color600};
        border-radius: 7px;
    }
  }
`;

const NotificationItem = styled.div`
  display: flex;
  border-bottom: 1px solid ${Colors.neutral_color.color600};
  gap: 25px;
  padding-bottom: 20px;
  div.unreadIcon {
    background-color: ${Colors.primary_color.color500};
    width: 15px;
    height: 15px;
    border-radius: 20px;
  }

  img.notificationImg {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }

  div.notificationDetailsContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-self: center;

    h5.notificationTitle {
        font-size: 22px;
        color: ${Colors.neutral_color.color900};
    }

    div.dateTimeWrapper {
        display: flex;
        align-items: center;
        color: ${Colors.neutral_color.color600};
        font-size: 15px;
    }
  }
`

export { NotificationsContainer, NotificationItem };
