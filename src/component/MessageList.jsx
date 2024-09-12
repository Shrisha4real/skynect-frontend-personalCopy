import React, { useEffect, useState } from "react";
import Axios from "axios";
import Message from "./Message";

const MessageList = ({ userId, senderId }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Fetch the message list for the conversation using Axios
        const response = await Axios.get(`/api/messages/${userId}/${senderId}`);
        setMessages(response.data);
      } catch (err) {
        console.error("Failed to fetch messages:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [userId, senderId]);

  if (loading) {
    return <div>Loading messages...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex-grow flex flex-col px-4 py-6 pb-32 max-w-full w-full overflow-auto">
      {messages.length > 0 ? (
        messages.map((message, index) => (
          <Message key={index} {...message} />
        ))
      ) : (
        <div>No messages found</div>
      )}
    </div>
  );
};

export default MessageList;
