import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader";
import PostListComponent from "../components/PostListComponent";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { getPosts } from "../redux/actionCreators/post";
import "../scss/PostList.scss";

const PostListView = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useTypedSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") dispatch(getPosts());
  }, [status, dispatch]);

  return (
    <>
      {status === "loading" && <Loader />}
      {status === "succeeded" && <PostListComponent posts={posts} />}
      {error && <h3 className="postList__error">{error}</h3>}
      {!error && posts.length === 0 && (
        <h3 className="postList__no-post">No post created yet</h3>
      )}
    </>
  );
};

export default PostListView;
