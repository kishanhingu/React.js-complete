import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../API/api";
import { useEffect } from "react";
import { Loader } from "../components/UI/Loding";
import { useInView } from "react-intersection-observer";

export const InfiniteScroll = () => {
  const { data, hasNextPage, fetchNextPage, status, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["users"],
      queryFn: fetchUsers,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length === 10 ? allPages.length + 1 : undefined;
      },
    });

  //! Use JavaScript
  // const handleScroll = () => {
  //   const bottom =
  //     window.innerHeight + window.scrollY >=
  //     document.documentElement.scrollHeight - 1;

  //   if (bottom && hasNextPage) {
  //     fetchNextPage();
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [hasNextPage]);

  //! Use NPM package
  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (status === "loading") {
    return <Loader />;
  }
  if (status === "error") {
    <p>Error:{"Something went wrong!"}</p>;
  }

  return (
    <section className="infiniteScroll-section">
      <div className="container">
        <h1>Infinite Scroll</h1>

        {data?.pages?.map((page, index) => (
          <ul key={index}>
            {page.map((user) => {
              return (
                <li key={user.id}>
                  <p>{user.login}</p>
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    width="100px"
                    height="100px"
                  />
                </li>
              );
            })}
          </ul>
        ))}

        <div ref={ref}>{isFetchingNextPage && <Loader />}</div>
      </div>
    </section>
  );
};
