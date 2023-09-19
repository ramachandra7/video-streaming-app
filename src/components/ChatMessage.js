import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex shadow-sm p-2 mb-2 items-center">
      {/* <div className="h-6 w-6 mr-2"> */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
          alt="profile"
          className="h-6 w-6 mr-2"
        />
      {/* </div> */}
      <span className="font-bold mr-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
