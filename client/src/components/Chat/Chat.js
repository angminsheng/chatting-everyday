import React, { useState, useEffect } from "react";
import ChatInput from "../ChatInput/ChatInput";
import ChatMessage from "../ChatMessage/ChatMessage";

const URL = "ws://localhost:5000";

const Chat = () => {
  const [name, setName] = useState("Bob");
  const [message, setMessage] = useState([]);
  const [ws, setWs] = useState(new WebSocket(URL));

  useEffect(() => {
    ws.onopen = () => {
      console.log("connected");
    };
    ws.onmessage = e => {
      const newMessage = JSON.parse(e.data);
      setMessage([...message, newMessage]);
    };
    ws.onclose = () => {
      setWs(new WebSocket(URL));
    };
  }, []);

  const submitMessage = messageString => {
    console.log(messageString);
    const newMessage = { name, message: messageString };
    ws.send(JSON.stringify(newMessage));
    setMessage([...message, newMessage]);
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={name}
        id="name"
        placeholder="Enter your name"
        onChange={e => setName(e.target.value)}
      />
      <ChatInput ws={ws} onSubmitMessage={submitMessage} />
      {message.map(({ name, message }, index) => (
        <ChatMessage key={index} name={name} message={message} />
      ))}
    </div>
  );
};

export default Chat;
