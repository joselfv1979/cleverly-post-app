import { ActionType, Action } from "../actionTypes/post";
import { IPost } from "../../models/Post";

interface State {
  posts: IPost[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: State = {
  posts: [],
  status: "idle",
  error: null,
};

const postReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_POSTS_PENDING:
      return { ...state, status: "loading", error: null };

    case ActionType.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        status: "succeeded",
        error: null,
      };

    case ActionType.GET_POSTS_FAIL:
      return { posts: [], error: action.payload, status: "failed" };

    case ActionType.ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        status: "succeeded",
        error: null,
      };

    case ActionType.ADD_POST_FAIL:
      return { ...state, error: action.payload, status: "failed" };

    case ActionType.DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter(
          (item: IPost) => item.id !== action.payload.id
        ),
        status: "succeeded",
        error: null,
      };
    case ActionType.DELETE_POST_FAIL:
      return {
        ...state,
        posts: state.posts,
        error: action.payload,
        status: "failed",
      };

    case ActionType.UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((item: IPost) =>
          item.id === action.payload.id ? action.payload : item
        ),
        status: "succeeded",
        error: null,
      };
    case ActionType.UPDATE_POST_FAIL:
      return { ...state, error: action.payload, status: "failed" };

    case ActionType.CLEAR_POST_ERROR:
      return { ...state, error: null };

    default:
      return state;
  }
};

export default postReducer;
