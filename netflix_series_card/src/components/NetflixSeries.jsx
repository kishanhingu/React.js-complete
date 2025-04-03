import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

export const NetflixSeries = () => {
  return (
    <ul className="grid grid-three-cols">
      {seriesData.map((curEle) => (
        <SeriesCard key={curEle.id} data={curEle} />
      ))}
    </ul>
  );
};
