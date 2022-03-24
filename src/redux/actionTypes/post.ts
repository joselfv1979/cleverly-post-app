import { IPost } from "../../models/Post";

export enum ActionType {
  GET_POSTS_PENDING = "GET_POSTS_PENDING",
  GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
  GET_POSTS_FAIL = "GET_ALL_POSTS_FAIL",
  ADD_POST_SUCCESS = "ADD_POST_SUCCESS",
  ADD_POST_FAIL = "ADD_POST_FAIL",
  DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS",
  DELETE_POST_FAIL = "DELETE_POST_FAIL",
  UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS",
  UPDATE_POST_FAIL = "UPDATE_POST_FAIL",
  CLEAR_POST_ERROR = "CLEAR_POST_ERROR",
}

interface postListActionPending {
  type: ActionType.GET_POSTS_PENDING;
}

interface postListActionSuccess {
  type: ActionType.GET_POSTS_SUCCESS;
  payload: IPost[];
}

interface postListActionFail {
  type: ActionType.GET_POSTS_FAIL;
  payload: string;
}

interface postAddActionSuccess {
  type: ActionType.ADD_POST_SUCCESS;
  payload: IPost;
}

interface postAddActionFail {
  type: ActionType.ADD_POST_FAIL;
  payload: string;
}

interface postDeleteActionSuccess {
  type: ActionType.DELETE_POST_SUCCESS;
  payload: IPost;
}

interface postDeleteActionFail {
  type: ActionType.DELETE_POST_FAIL;
  payload: string;
}

interface postUpdateActionSuccess {
  type: ActionType.UPDATE_POST_SUCCESS;
  payload: IPost;
}

interface postUpdateActionFail {
  type: ActionType.UPDATE_POST_FAIL;
  payload: string;
}

interface postClearErrorAction {
  type: ActionType.CLEAR_POST_ERROR;
}

export type Action =
  | postListActionPending
  | postListActionSuccess
  | postListActionFail
  | postAddActionSuccess
  | postAddActionFail
  | postDeleteActionSuccess
  | postDeleteActionFail
  | postUpdateActionSuccess
  | postUpdateActionFail
  | postClearErrorAction;
