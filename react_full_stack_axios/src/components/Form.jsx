import { useEffect, useState } from "react";
import { postData, putData } from "../API/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  // add button to edit button
  let isEmpty = Object.keys(updateDataApi).length === 0;

  // get the update Data and add into input field
  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  }, [updateDataApi]);

  //   Input change function
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setAddData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //   addPostData function
  const addPostData = async () => {
    const res = await postData(addData);

    if (res.status === 201) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" });
    }
  };

  // updatePostData function
  const updatePostData = async () => {
    try {
      const res = await putData(updateDataApi.id, addData);

      setData((prev) => {
        return prev.map((curEle) => {
          return curEle.id === res.data.id ? res.data : curEle;
        });
      });
      setUpdateDataApi({});
    } catch (error) {
      console.log(error);
    }
  };

  //   form submit function
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const action = e.nativeEvent.submitter.value;

    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" value={isEmpty ? "Add" : "Edit"}>
        {isEmpty ? "Add" : "Edit"}
      </button>
    </form>
  );
};
