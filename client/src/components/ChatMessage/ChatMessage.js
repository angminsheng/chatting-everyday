import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div>
      {name} : {message}
    </div>
  );
};

export default ChatMessage;
