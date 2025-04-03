//todo Using React Only
// import  { useState, useEffect } from "react";
// export const Home = () => {
//   // Initial stock data
//   const [stockData, setStockData] = useState({ price: 100 });

//   // Function to simulate fetching new data (for example, from an API)
//   const fetchNewStockData = () => {
//     // Randomly updating stock price for demonstration
//     const newPrice = (Math.random() * 1000).toFixed(2);
//     return { price: newPrice };
//   };

//   useEffect(() => {
//     // Set an interval to update the stock data every 1 second
//     const intervalId = setInterval(() => {
//       const newData = fetchNewStockData();
//       setStockData(newData);
//     }, 1000);

//     // Cleanup the interval when the component is unmounted
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array to run only once on mount

//   return (
//     <div>
//       <h1>Stock Price: ${stockData.price}</h1>
//     </div>
//   );
// };
// export default Home;

//todo React-Query
import { useQuery } from "@tanstack/react-query";

const fetchStockData = async () => {
  // Simulate an API call
  const newPrice = (Math.random() * 1000).toFixed(2);
  return { price: newPrice };
};

export const Home = () => {
  const { data } = useQuery({
    queryKey: ["stockData"], // useState
    queryFn: fetchStockData,
    refetchInterval: 1000,
  });

  return (
    <div>
      <h1>Stock Price: ${data ? data.price : "Loading..."}</h1>
    </div>
  );
};

export default Home;
