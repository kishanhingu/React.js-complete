import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../API/api";

export const PostData = ({
  curEle,
  setShowForm,
  setEditValue,
  pageNumber,
  queryClient,
}) => {
  const { id, title, body } = curEle;
  const navigate = useNavigate();

  //! mutation function to delete the post
  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["posts", pageNumber], (curEle) => {
        return curEle?.filter((post) => post.id !== id);
      });
    },
  });

  // Post Update Function
  const handleUpdatePost = (curEle) => {
    setShowForm(true);

    setEditValue(curEle);
  };

  const HandlePost = (id) => {
    navigate(`/rq/${id}`);
  };
  return (
    <li>
      <div onClick={() => HandlePost(id)}>
        <h3>ID : {id}</h3>
        <div className="post-content">
          <p>{title}</p>
          <p>{body}</p>
        </div>
      </div>
      <div className="data-btn">
        <button onClick={() => deleteMutation.mutate(id)}>Delete</button>
        <button onClick={() => handleUpdatePost(curEle)}>Edit</button>
      </div>
    </li>
  );
};
