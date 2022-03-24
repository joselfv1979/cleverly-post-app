import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../models/Post";
import { fetchSinglePost } from "../services/posts";
import Loader from "../components/Loader";
import { PostForm } from "../components/PostForm";
import { useTypedSelector } from "../hooks/useTypeSelector";
import "../scss/PostEdit.scss";

const PostEditView = () => {
  const { id } = useParams();

  const initialState: IPost = {
    userId: 0,
    id: 0,
    title: "",
    body: "",
  };

  useEffect(() => {
    const getPost = async () => {
      const { data } = await fetchSinglePost(Number(id));
      setValues(data);
    };

    getPost().catch(console.error);
  }, [id]);

  const [values, setValues] = useState<IPost>(initialState);

  const { error } = useTypedSelector((state) => state.posts);

  return (
    <>
      {error && <h3 className="post-form__error">{error}</h3>}
      {values.id === 0 ? (
        <Loader />
      ) : (
        <PostForm values={values} setValues={setValues} />
      )}
    </>
  );
};

export default PostEditView;
