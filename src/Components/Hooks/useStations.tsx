import { useEffect, useState } from "react";

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

  return [stations];
};

export default useStations;
