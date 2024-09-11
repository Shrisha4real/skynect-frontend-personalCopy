import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatArea = () => {
  const { userId, senderId } = useParams(); // Get conversation details from URL params
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch messages for the selected conversation
    fetch(`/api/messages/${userId}/${senderId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }
        return response.json();
      })
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId, senderId]); // Fetch messages when userId or senderId changes

  if (loading) {
    return <div>Loading messages...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="relative flex flex-col ml-5 w-[46%] h-screen max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full  h-full">
        {/* Message list is scrollable and takes full width */}
        <div className="flex-grow overflow-y-auto bg-neutral-100 bg-opacity-70 ">
          <MessageList messages={messages} />
        </div>
        {/* Message input is fixed at the bottom */}
        <div className="sticky bottom-0 w-full bg-zinc-100 border-t border-gray-300">
          <MessageInput userId={userId} senderId={senderId} />
        </div>
      </div>
    </main>
  );
};

export default ChatArea;
