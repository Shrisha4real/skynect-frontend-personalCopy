import React from "react";
import { Link } from "react-router-dom";

const Message = ({ text, sender, time, conversationId }) => {
  const isOther = sender === "other"; // Assuming 'other' is the receiver

  return (
    <div className={`flex ${isOther ? "flex-row-reverse" : "flex-row"} items-start mb-4`}>
      <div
        className={`flex flex-col justify-center px-2 py-3 ${
          isOther ? "bg-sky-300" : "bg-sky-200"
        } rounded-3xl max-w-md ${isOther ? "ml-2.5" : "mr-2.5"} ${isOther ? "text-right" : "text-left"}`}
      >
        <div className="opacity-[var(--sds-size-stroke-border)] font-normal">{text}</div>
      </div>
      <div
        className={`flex items-end ${
          isOther ? "flex-row-reverse" : "flex-row"
        } text-base md:text-lg lg:text-xl text-neutral-400 mt-2 ${isOther ? "ml-2.5" : "mr-2.5"}`}
      >
        <Link to={`/conversations/${conversationId}`} style={{ fontSize: '50%' }}>{time}</Link>
      </div>
    </div>
  );
};

export default Message;
