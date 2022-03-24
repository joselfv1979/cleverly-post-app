import axios from "axios";
import { IPost } from "../models/Post";

const url = "https://jsonplaceholder.typicode.com/posts";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchAllPosts = async () => {
  return await axios.get(url);
};

export const fetchSinglePost = async (postId: number) => {
  return await axios.get(`${url}/${postId}`);
};

export const mockAddPost = async (post: IPost) => {
  console.log("creating post: ", { post });
  // return await axios.post(url, post);
  return post;
};

export const mockDeletePost = async (postId: number) => {
  console.log("deleting post number: ", { postId });
  // return await axios.delete(`${url}/${postId}`);
};

export const mockUpdatePost = async (post: IPost) => {
  console.log(`updating post number ${post.id}`);
  // return await axios.put(`${url}/${post.id}`, post);
  return post;
};
