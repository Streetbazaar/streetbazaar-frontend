import React from "react";
import { Div } from "./styles/Notification.styled";


const Notification = () => {
  
  
  return (
    <div>
      {not.open && (
        <Div onClose={handleClose}>
          <p>To proceed, please either create an account or log in</p>
        </Div>
      )}
    </div>
  );
};

export default Notification;
