import React, {useState, useEffect} from 'react';
import "./App.css";
import useSwr from "swr";
import Filter from './components/Filter'
import FullMap from "./components/FullMap";

const fetcher = (...args) => fetch(...args).then(response => response.json());

const App = () => {
  const url = 'https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.65&lon=-111.91&maxDistance=10&minDiff=4.0&maxDiff=5.9&key=200703063-2c86cd159070d7b2b2f9abc830c4f44b';
  const { data, error } = useSwr(url, { fetcher });
  const climbs = data && !error ? data.routes : [];
  const [filterClimbs, setFilterClimbs] = useState([]);

  useEffect(() => {
    setFilterClimbs(climbs);
  }, [climbs]);

  return (
    <div>
      <div className="filterMountains">
        <Filter climbs = {climbs} setFilterClimbs = {setFilterClimbs} />
      </div>
      <FullMap filterClimbs = {filterClimbs} />
    </div>
  );
}
export default App
