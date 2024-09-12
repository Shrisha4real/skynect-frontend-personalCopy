import React from "react";
import ConversationItem from "./ConversationItem";

const ConversationList = ({ conversations = [], searchTerm, error, onConversationClick }) => {
  // If searchTerm is provided, filter conversations by participant name
  const filteredConversations = searchTerm
    ? conversations.filter((conversation) =>
        conversation.participants.some((participant) =>
          participant.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : conversations;

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  // Check if filteredConversations is an array and has length
  return (
    <div className="conversation-list overflow-y-auto h-full">
      {Array.isArray(filteredConversations) && filteredConversations.length > 0 ? (
        filteredConversations.map((conversation) => (
          <ConversationItem
            key={conversation.id}
            name={conversation.participants[0].name} 
            lastMessage={conversation.lastMessage} 
            time={new Date(conversation.lastMessageTime).toLocaleTimeString()} 
            chatRoomId={conversation.id} 
            onClick={() => onConversationClick(conversation.id)} 
          />
        ))
      ) : (
        <div>No conversations found</div>
      )}
    </div>
  );
};

export default ConversationList;
