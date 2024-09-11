import React from "react";
import { Link } from 'react-router-dom';

const ConversationItem = ({ name, avatar, newMessages, time, userId, senderId }) => {
  return (
    <Link 
      to={`/chat/${userId}/${senderId}`} 
      className="block w-full hover:bg-gray-100 transition-colors duration-200"
    >
      <div className="flex items-center justify-between p-3 w-full">
        <div className="flex items-center flex-1">
          <img
            loading="lazy"
            src={avatar}
            alt={`${name}'s avatar`}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-baseline">
              <h3 className="text-sm font-medium text-gray-900 truncate">{name}</h3>
              <span className="text-xs text-gray-500">{time}</span>
            </div>
            {newMessages > 0 && (
              <p className="text-xs text-red-500 mt-1">
                +{newMessages} new message{newMessages > 1 ? "s" : ""}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ConversationItem;