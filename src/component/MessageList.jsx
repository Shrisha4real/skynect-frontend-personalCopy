import React, { useEffect, useState } from "react";
import Message from "./Message";

const MessageList = ({ userId, senderId }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the message list for the conversation
    fetch(`/api/messages/${userId}/${senderId}`)
      .then((response) => {
        // Check if the response is JSON
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch messages:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [userId, senderId]);

  if (loading) {
    return <div>Loading messages...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex-grow flex-col px-4 py-6 pb-32 max-w-full w-full">
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
};

export default MessageList;
