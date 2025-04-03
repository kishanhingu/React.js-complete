import { useState, useEffect } from "react";
import { deletePost, getPost } from "../api/PostApi";
import { Form } from "./Form";
import "../App.css";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [editPost, setEditPost] = useState({});

  useEffect(() => {
    const getPostData = async () => {
      try {
        const res = await getPost();
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getPostData();
  }, []);

  // delete btn
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);

      if (res.status === 200) {
        const updatePosts = data.filter((curEle) => curEle.id !== id);
        setData(updatePosts);
      } else {
        console.log("Failed to delete the post:", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="section-form">
        <Form
          data={data}
          setData={setData}
          editPost={editPost}
          setEditPost={setEditPost}
        />
      </section>
      <section className="section-post">
        <ol>
          {data.map((curEle) => {
            const { id, title, body } = curEle;
            return (
              <li key={id}>
                <h3>Title: {title}</h3>
                <p>Body: {body}</p>
                <button
                  onClick={() => {
                    setEditPost(curEle);
                  }}
                >
                  Edit
                </button>
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
