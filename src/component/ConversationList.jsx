import React, { useState, useEffect } from "react";
import ConversationItem from "./ConversationItem"; // Assuming you have a ConversationItem component to display each conversation

const ConversationList = ({ userId }) => {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the conversations from the API
  useEffect(() => {
    fetch(`/api/conversations/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setConversations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch conversations:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return <div>Loading conversations...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="conversation-list">
      {conversations.length > 0 ? (
        conversations.map((conversation) => (
          <ConversationItem
            key={conversation.id}
            name={conversation.name}
            avatar={conversation.avatar}
            newMessages={conversation.newMessages}
            time={conversation.time}
            userId={conversation.userId}
            senderId={conversation.senderId}
          />
        ))
      ) : (
        <div>No conversations found</div>
      )}
    </div>
  );
};

export default ConversationList;
