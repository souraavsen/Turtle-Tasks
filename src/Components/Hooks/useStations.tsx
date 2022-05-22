import { useEffect, useState } from "react";
import { Station } from "../../types";

const useStations = () => {
  const [stations, setStations] = useState<any>([]);
  useEffect(() => {
    // accessing data from the json file of fakedata
    fetch("./data.json")
      .then((res) => res.json())
      // load data into stations state
      .then((data) => {
        setStations(data);
        console.log(data);
      });
  }, []);

  // returning th stations state in a array to access from other components
  return [stations];
};

// exporting so that other components can import
export default useStations;
