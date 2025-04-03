import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
import { fetchPostReactQueryIndividual } from "../../API/api";
import { Loader } from "./Loding";

export const FetchIndividualData = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostReactQueryIndividual(id),
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Error:{error.message || "Something went wrong!"}</p>;

  return (
    <div className="section-individualPost">
      <div className="container">
        <h1>Post ID Number - {data.id}</h1>

        <div className="post">
          <h2>ID : {data.id}</h2>
          <div className="post-content">
            <p>Title :{data.title}</p>
            <p>Body :{data.body}</p>
          </div>
          <NavLink to="/rq">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
