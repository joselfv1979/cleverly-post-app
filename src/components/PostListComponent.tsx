import React from "react";
import { IPost } from "../models/Post";
import Post from "./PostComponent";

type Props = {
  posts: IPost[];
};

const PostList = ({ posts }: Props) => {

  return (
    posts && (
      <ul className="postList__ul">
        {posts.map((post, i) => {
          return (
            <li key={i} className="postList__li">
              <Post post={post} />
            </li>
          );
        })}
      </ul>
    )
  );
};

export default PostList;
