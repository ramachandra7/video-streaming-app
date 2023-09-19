import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../redux/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { randomNameGenerator, randomTextGenerator } from "../utils/constants";
const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
    const [myChatMessage,setMyChatMessage]=useState("");
  useEffect(() => {
    const time = setInterval(() => {
      dispatch(
        addMessage({
          name: randomNameGenerator(),
          message: randomTextGenerator(30),
        })
      );
    }, 2000);
    return () => {
      clearInterval(time);
    };
  }, []);

const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addMessage({
        name:"Rama Chandra",
        message:myChatMessage,
    }));
    setMyChatMessage("");
}

const handleChange=(e)=>{
    setMyChatMessage(e.target.value);
}

  return (
    <div>
      <div className="w-full h-[600px] mx-2 p-2 bg-gray-100 border border-black rounded-lg overflow-y-scroll">
        {chatMessages.map((chatItem, index) => (
          <ChatMessage
            name={chatItem.name}
            key={index}
            message={chatItem.message}
          />
        ))}
      </div>
      <form className="flex" onSubmit={(e)=>handleSubmit(e)}>
        <input
          type="text"
          className="bg-grey-100 border border-black w-full m-2 rounded-lg"
          onChange={handleChange}
          value={myChatMessage}
        />
        <button className="m-2 p-2 bg-green-100" disabled={myChatMessage===""}>
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
