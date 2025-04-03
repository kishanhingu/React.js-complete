import { useMutation } from "@tanstack/react-query";
import { updatePost } from "../API/api";

export const Form = ({
  editValue,
  setEditValue,
  pageNumber,
  setShowForm,
  queryClient,
}) => {
  //   Input change function
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setEditValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //! mutation function to Update the post
  const updateMutation = useMutation({
    mutationFn: (editValue) => updatePost(editValue.id, editValue),
    onSuccess: (apiData) => {
      queryClient.setQueryData(["posts", pageNumber], (curEle) => {
        setShowForm(false);

        return curEle?.map((post) => (post.id === apiData.id ? apiData : post));
      });
    },
  });

  //   Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    updateMutation.mutate(editValue);
  };
  return (
    <div className="section-form">
      <div className="container">
        <form action="" onSubmit={handleFormSubmit}>
          <div className="input-label">
            <label htmlFor="title">Title :-</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter Title"
              value={editValue.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-label">
            <label htmlFor="body">Body :-</label>
            <input
              type="text"
              id="body"
              name="body"
              placeholder="Enter body"
              value={editValue.body}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};
