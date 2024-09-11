import React, { useState } from "react";
import ConversationSearch from "./ConversationSearch";
import ConversationList from "./ConversationList";

const Sidebar = ({ userId }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter conversations based on the search term
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <aside className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-1 w-full max-md:mt-2.5">
        <div className="flex flex-col px-5 w-full leading-none max-md:px-5">
          {/* Pass search handler to ConversationSearch */}
          <ConversationSearch onSearch={handleSearch} />
          {/* Pass searchTerm to ConversationList for filtering */}
          <ConversationList userId={userId} searchTerm={searchTerm} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
