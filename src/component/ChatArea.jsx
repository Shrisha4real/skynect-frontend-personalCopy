import React from "react";

const ChatArea = ({ messages }) => {
  return (
    <div className="chat-area flex-grow h-full overflow-y-auto p-4">
      {messages.length > 0 ? (
        messages.map((message, index) => (
          <div key={index} className={`message-item ${message.from === "8f632292-fc6d-4504-af72-88f585fa7522" ? 'text-right' : 'text-left'}`}>
            <div className="inline-block p-2 my-1 bg-gray-200 rounded-lg">
              {message.content}
            </div>
          </div>
        ))
      ) : (
        <div>No messages</div>
      )}
    </div>
  );
};

export default ChatArea;
