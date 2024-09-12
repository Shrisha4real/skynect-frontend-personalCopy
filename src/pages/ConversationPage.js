import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../component/Sidebar";
import ChatArea from "../component/ChatArea";
import UserProfile from "../component/UserProfile";

const userId = "6a6aee4a-95f6-472f-a807-f9fcd2259e91"; // Set your userId dynamically

const ConversationPage = () => {
  const [conversations, setConversations] = useState([]);
  const [error, setError] = useState(null);
  const [activeChatRoomId, setActiveChatRoomId] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await axios.get(`http://localhost:3020/api/v1/users/chatroom/${userId}`);
        setConversations(response.data); // Make sure this matches your API response structure
      } catch (err) {
        setError("Failed to load conversations");
      }
    };

    fetchConversations();
  }, []);

  const fetchMessages = async (chatRoomId) => {
    try {
      const response = await axios.get(`http://localhost:3020/api/v1/users/msgs/${chatRoomId}?page=1`);
      setMessages(response.data); // Set the messages
      setActiveChatRoomId(chatRoomId); // Track active chatRoomId
    } catch (err) {
      setError("Failed to load messages");
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white">
      <div className="flex flex-row flex-grow overflow-hidden mt-[4rem]">
        <Sidebar 
          conversations={conversations} 
          error={error} 
          onConversationClick={fetchMessages} // Call fetchMessages when a conversation is clicked
          className="flex-none w-[20%] h-full overflow-hidden" 
        />
        <ChatArea 
          messages={messages} 
          className="flex-grow h-full overflow-hidden" 
        />
        {/* <UserProfile className="flex-none w-[26%] h-full overflow-hidden" /> */}
      </div>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default ConversationPage;
