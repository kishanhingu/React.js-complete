import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { fetchPostReactQuery } from "../API/api";
import { Loader } from "../components/UI/Loding";
import { useState } from "react";
import { Form } from "./Form";
import { PostData } from "../components/UI/PostData";

export const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [editValue, setEditValue] = useState({ title: "", body: "" });

  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPostReactQuery(pageNumber),
    // gcTime: 1000,
    staleTime: Infinity,
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,
    placeholderData: keepPreviousData,
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Error:{error.message || "Something went wrong!"}</p>;

  return (
    <>
      {showForm || (
        <section className="posts-section">
          <div className="container">
            {/* <div className="page-btn">
              <button>Add Post</button>
            </div> */}
            <ol>
              {data?.map((curEle) => {
                return (
                  <PostData
                    key={curEle.id}
                    curEle={curEle}
                    setShowForm={setShowForm}
                    setEditValue={setEditValue}
                    pageNumber={pageNumber}
                    queryClient={queryClient}
                  />
                );
              })}
            </ol>

            <div className="page-btn">
              <button
                disabled={pageNumber === 0 ? true : false}
                onClick={() => setPageNumber((prev) => prev - 6)}
              >
                Prev
              </button>
              <h2>{pageNumber / 6 + 1}</h2>
              <button
                disabled={pageNumber === 96 ? true : false}
                onClick={() => setPageNumber((prev) => prev + 6)}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      )}

      {showForm && (
        <Form
          editValue={editValue}
          setEditValue={setEditValue}
          pageNumber={pageNumber}
          setShowForm={setShowForm}
          queryClient={queryClient}
        />
      )}
    </>
  );
};
