import React, { useState, useEffect } from "react";
import ConversationItem from "./ConversationItem";

const ConversationList = ({ userId, searchTerm }) => {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Filter conversations based on the search term
  const filteredConversations = conversations.filter((conversation) =>
    conversation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading conversations...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="conversation-list">
      {filteredConversations.length > 0 ? (
        filteredConversations.map((conversation) => (
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
