import React from "react";
import "./Messages.css";

const Message = ({ message, timestamp, user, userImage }) => {
  return (
    <div className="message">
      <img src={userImage} alt="" />
      <div className="message__info">
        <h4>{user} timestamp ...</h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;