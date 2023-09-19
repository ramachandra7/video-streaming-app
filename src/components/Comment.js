import React from "react";

const Comment = ({commentdata}) => {
    const {name,text,replies}=commentdata;
  return (
    <div className="flex flex-row bg-gray-200 p-2 rounded-md my-2">
      <img
        src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
        alt="user"
        className="h-8 w-8 mr-2"
      />
      <div>
        <ul>
          <li className="font-bold m-1">{name}</li>
          <li>{text}</li>
        </ul>
      </div>
    </div>
  );
};

export default Comment;
