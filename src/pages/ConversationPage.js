import React from "react";

import Sidebar from "../component/Sidebar";
import ChatArea from "../component/ChatArea";
import UserProfile from "../component/UserProfile";

const ConversationPage = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white">
      {/* Fixed Header */}
      {/* <Header className="fixed top-0 left-0 w-full z-10" /> */}

      {/* Main content area below the header */}
      <div className="flex flex-row flex-grow overflow-hidden mt-[4rem]"> {/* Adjust margin to prevent overlap */}
        {/* Sidebar, ChatArea, UserProfile will fit remaining screen */}
        <Sidebar className="flex-none w-[20%] h-full overflow-hidden" />
        <ChatArea className="flex-grow h-full overflow-hidden" />
        <UserProfile className="flex-none w-[26%] h-full overflow-hidden" />
      </div>
    </div>
  );
};

export default ConversationPage;
