import React from "react";
import Comment from "./Comment";

const CommentsList = ({data}) => {
  return (
    <div>
      {data.
      map((comment,index)=>
      <div  key={index}>
      <Comment commentdata={comment} />
      <div className="ml-2 pl-2 border-l-black">
        <CommentsList data={comment.replies}/>
      </div>
      </div>
      )}
    </div>
  );
};

export default CommentsList;
