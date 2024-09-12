import React from "react";
import { Link } from 'react-router-dom';

const ConversationItem = ({ name, lastMessage, time, chatRoomId, onClick }) => {
  return (
    <div
      className="block w-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
      onClick={onClick} // When clicked, trigger the onClick prop passed from the parent
    >
      <div className="flex items-center justify-between p-3 w-full">
        <div className="flex items-center flex-1">
          {/* Grey Circle instead of Avatar */}
          <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-baseline">
              <h3 className="text-sm font-medium text-gray-900 truncate">{name}</h3>
              <span className="text-xs text-gray-500">{time}</span>
            </div>
            <p className="text-xs text-gray-600 mt-1 truncate">
              {lastMessage}
            </p>
            {/* Commented out newMessages section */}
            {/* {newMessages > 0 && (
              <p className="text-xs text-red-500 mt-1">
                +{newMessages} new message{newMessages > 1 ? "s" : ""}
              </p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationItem;
