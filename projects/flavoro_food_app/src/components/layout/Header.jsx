import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../features/search/SearchSilce";

export const Header = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    setDate(new Date().toDateString());
    setTime(new Date().toLocaleTimeString());

    const interval = setInterval(() => {
      setDate(new Date().toDateString());
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const disPatch = useDispatch();

  return (
    <nav className="w-full flex flex-col lg:flex-row justify-between py-3 px-6 place-items-center bg-green-500">
      <div>
        <h1 className="text-xl font-bold text-gray-600">{`${date},${time}`}</h1>
        <h3 className="text-2xl font-bold">Flavoro Foods</h3>
      </div>
      <div className="w-full lg:w-[25vw] mt-4 lg:mt-0">
        <input
          type="text"
          name="search"
          placeholder="Search here"
          autoComplete="off"
          className="p-3 border border-gray-400 text-sm rounded-lg w-full"
          onChange={(e) => disPatch(setSearch(e.target.value))}
        />
      </div>
    </nav>
  );
};
