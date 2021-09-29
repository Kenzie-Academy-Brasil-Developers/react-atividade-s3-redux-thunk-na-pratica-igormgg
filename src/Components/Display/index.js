import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";
import "./styles.css";

const Display = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch;
  const commentsObj = useSelector((state) => state.user);
  const comments = commentsObj.comments;

  const handleClick = () => {
    dispatch(addCommentThunk(comment));
    setComment("");
  };

  return (
    <div className="commentsContainer">
      <h2>{commentsObj.name}</h2>
      <div className="commentsBox">
        {comments.map((cmt) => {
          return <span>{cmt}</span>;
        })}
      </div>
      <div className="inputBox">
        <input
          onChange={(event) => setComment(event.target.value)}
          type="text"
        />
        <button onClick={handleClick}>Novo Comentário</button>
      </div>
    </div>
  );
};

export default Display;
