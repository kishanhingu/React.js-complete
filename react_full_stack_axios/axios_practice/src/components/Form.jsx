import { useEffect, useState } from "react";
import { postData, putData } from "../api/PostApi";

export const Form = ({ data, setData, editPost, setEditPost }) => {
  const [buttonValue, setButtonValue] = useState("");
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(editPost).length === 0;

  // get the update data and add into input field
  useEffect(() => {
    editPost &&
      setAddData({
        title: editPost.title || "",
        body: editPost.body || "",
      });
  }, [editPost]);

  // addPostData
  const addPostData = async () => {
    try {
      const res = await postData(addData);
      if (res.status === 201) {
        setData([...data, res.data]);
        setAddData({ title: "", body: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // updatePostData
  const updatePostData = async () => {
    try {
      const res = await putData(editPost.id, addData);

      if (res.status === 200) {
        setData((prev) => {
          return prev.map((curEle) =>
            curEle.id === res.data.id ? res.data : curEle
          );
        });

        setEditPost({});
      } else {
        alert("Data Can't update");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handleFormSubmit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (buttonValue === "Add") {
      addPostData();
    } else if (buttonValue === "Edit") {
      updatePostData();
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Add Title"
          value={addData.title}
          onChange={(e) =>
            setAddData((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <div>
        <label htmlFor="body"></label>
        <input
          type="text"
          autoComplete="off"
          id="body"
          name="body"
          placeholder="Add Post"
          value={addData.body}
          onChange={(e) =>
            setAddData((prev) => ({ ...prev, body: e.target.value }))
          }
        />
      </div>
      {
        <button
          type="submit"
          onClick={() => setButtonValue(isEmpty ? "Add" : "Edit")}
        >
          {isEmpty ? "Add" : "Edit"}
        </button>
      }
    </form>
  );
};
