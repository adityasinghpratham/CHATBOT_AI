import React from "react";
import { ChatData } from "../context/ChatContext";
import Login from "../pages/Login";
const Header = () => {
  const { chats } = ChatData();
  return (
    <div>
      <p className="text-lg mb-6">Hello, {Login} How can i help you today?</p>
      {chats && chats.length === 0 && (
        <p className="text-lg mb-6">Create new chat to continue</p>
      )}
    </div>
  );
};

export default Header;
