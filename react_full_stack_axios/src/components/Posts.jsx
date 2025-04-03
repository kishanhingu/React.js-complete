import { useEffect, useState } from "react";
import { deletePost, getPost } from "../API/PostApi";
import { Form } from "./Form";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

  const getPostData = async () => {
    try {
      const res = await getPost();
      // console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPostData();
  }, []);

  // function to delete post
  const handleDeletePost = async (postId) => {
    try {
      const res = await deletePost(postId);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curEle) => curEle.id !== postId);
        setData(newUpdatedPosts);
      } else {
        console.log("Failed to delete the post:", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handleUpdatePost function
  const handleUpdatePost = (curData) => setUpdateDataApi(curData);

  return (
    <>
      <section className="section-form">
        <Form
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </section>
      <section className="section-post">
        <ol>
          {data.map((curPost) => {
            const { id, body, title } = curPost;
            return (
              <li key={id}>
                <p>Title :- {title}</p>
                <p>Body :- {body}</p>
                <button onClick={() => handleUpdatePost(curPost)}>Edit</button>
                <button
                  className="btn-delete"
                  onClick={() => handleDeletePost(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};
