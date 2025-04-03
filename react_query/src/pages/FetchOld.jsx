import { useEffect, useState } from "react";
import { fetchPost } from "../API/api";
import { Loader } from "../components/UI/Loding";

export const FetchOld = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoding] = useState(true);
  const [isError, serIsError] = useState(false);

  const getPostsData = async () => {
    try {
      const res = await fetchPost();
      if (res.status === 200) {
        setPosts(res.data);
        setIsLoding(false);
      }
    } catch (error) {
      console.error(error.message);
      serIsError(true);
      setIsLoding(false);
      // alert(error);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  if (isLoading) return <Loader />;
  if (isError) return <p>Error:{"Something went wrong!"}</p>;

  return (
    <section className="posts-section">
      <div className="container">
        <ol>
          {posts?.map((curEle) => {
            const { id, title, body } = curEle;
            return (
              <li key={id}>
                <h3>ID : {id}</h3>
                <div className="post-content">
                  <p>{title}</p>
                  <p>{body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
