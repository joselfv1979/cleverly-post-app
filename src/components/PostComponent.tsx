import React from "react";
import { IPost } from "../models/Post";
import { deletePost } from "../redux/actionCreators/post";
import { useDispatch } from "react-redux";
import { Trash, Pencil } from "react-bootstrap-icons";
import "../scss/Post.scss";
import { useNavigate } from "react-router-dom";
import { useMessageContext } from "../context/MessageContext";

type Props = {
  post: IPost;
};

const Post = ({ post }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addMessage } = useMessageContext();

  const removePost = async (post: IPost) => {
    dispatch(deletePost(post));
    addMessage({
      type: "success",
      text: "Post deleted successfully",
    });
  };

  return (
    <article className="post-card">
      <h4 className="post-card__title">User: {post.userId}</h4>
      <h4 className="post-card__title">{post.title}</h4>
      <p className="post-card__body">{post.body}</p>
      <div className="post-card__button-group">
        <button
          className="post-card__button post-card__button--blue"
          onClick={() => navigate(`/post-edit/${post.id}`)}
        >
          <Pencil />
        </button>
        <button
          className="post-card__button post-card__button--red"
          onClick={() => removePost(post)}
        >
          <Trash />
        </button>
      </div>
    </article>
  );
};

export default Post;
