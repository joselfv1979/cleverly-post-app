import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes/post";

import {
  mockAddPost,
  fetchAllPosts,
  mockDeletePost,
  mockUpdatePost,
} from "../../services/posts";
import { IPost } from "../../models/Post";

export const getPosts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_POSTS_PENDING,
    });

    try {
      const { data } = await fetchAllPosts();

      dispatch({
        type: ActionType.GET_POSTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.GET_POSTS_FAIL,
        payload: "Error: can't get posts, try it later",
      });
    }
  };
};

export const createPost = (post: IPost) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const newPost = await mockAddPost(post);

      dispatch({
        type: ActionType.ADD_POST_SUCCESS,
        payload: newPost,
      });
    } catch (error) {
      dispatch({
        type: ActionType.ADD_POST_FAIL,
        payload: "Error: can't create post, try it later",
      });
    }
  };
};

export const deletePost = (post: IPost) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      await mockDeletePost(post.id);

      dispatch({
        type: ActionType.DELETE_POST_SUCCESS,
        payload: post,
      });
    } catch (error) {
      dispatch({
        type: ActionType.DELETE_POST_FAIL,
        payload: "Error: can't delete post, try it later",
      });
    }
  };
};

export const editPost = (post: IPost) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const updatedPost = await mockUpdatePost(post);
      dispatch({
        type: ActionType.UPDATE_POST_SUCCESS,
        payload: updatedPost,
      });
    } catch (error) {
      dispatch({
        type: ActionType.UPDATE_POST_FAIL,
        payload: "Error: can't update post, try it later",
      });
    }
  };
};

export const clearPostError = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CLEAR_POST_ERROR,
    });
  };
};
