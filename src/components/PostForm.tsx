import React, { ChangeEvent, FormEvent, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { useMessageContext } from "../context/MessageContext";
import { IPost } from "../models/Post";
import { editPost } from "../redux/actionCreators/post";

type Props = {
  values: IPost;
  setValues: Dispatch<SetStateAction<IPost>>;
};

export const PostForm = ({ values, setValues }: Props) => {
  const dispatch = useDispatch();

  const { addMessage } = useMessageContext();

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const savePost = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(editPost(values));

    addMessage({
      type: "success",
      text: "Post updated successfully",
    });
  };

  return (
    <form onSubmit={savePost} className="post-form">
      <h1 className="post-form__header">Edit Post</h1>
      <div className="post-form__div-code">
        <span className="post-form__div-code__span">User: {values.userId}</span>
        <span className="post-form__div-code__span">Post: {values.id}</span>
      </div>
      <fieldset className="post-form__fieldset">
        <label htmlFor="title" className="post-form__label">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="post-form__title"
          autoComplete="off"
          required
          onChange={onChange}
          defaultValue={values.title}
        />
      </fieldset>
      <fieldset className="post-form__fieldset">
        <label htmlFor="content" className="post-form__label">
          Content
        </label>
        <textarea
          name="content"
          className="post-form__content"
          required
          onChange={onChange}
          defaultValue={values.body}
        ></textarea>
      </fieldset>
      <button className="post-form__button">Save</button>
    </form>
  );
};
