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
    <div className="commentsBox">
      <h2>{commentsObj.name}</h2>
      {comments.map((cmt) => {
        return <span>{cmt}</span>;
      })}
      <input onChange={(event) => setComment(event.target.value)} type="text" />
      <button onClick={() => handleClick()}>Novo Comentário</button>
    </div>
  );
};

export default Display;
