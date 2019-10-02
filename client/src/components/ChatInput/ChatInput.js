import React, { useState } from "react";

const ChatInput = ({ onSubmitMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitMessage(message);
    setMessage("");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button>send</button>
      </form>
    </div>
  );
};

export default ChatInput;
