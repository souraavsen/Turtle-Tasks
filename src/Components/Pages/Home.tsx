import React, { useState } from "react";
import styles from "./Home.module.css";
import backArrow from "../../assets/backArrow.png";
import switchIcon from "../../assets/switch.png";
import StationDetails from "./StationDetails";
import useStations from "../Hooks/useStations";
import { Station } from "../../types";

const Home = () => {
  const [stations]: any = useStations();
  const [selected, setSelected] = useState<string>("");

  return (
    <div>
      <div className={styles.main_container}>
        {/* Header Section  */}
        <div className={styles.header_conainer}>
          <div>
            <img className={styles.btn_back} src={backArrow} alt='' />
          </div>
          <h2>stations</h2>
          <div>
            <img className={styles.btn} src={switchIcon} alt='' />
          </div>
        </div>

        {/* Station Section */}
        <section className={styles.details_container}>
          {stations.map((station: Station) => (
            <StationDetails
              key={station.id}
              station={station}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </section>
        {/* Station details info Section */}
        <section className={styles.detailed_info_container}>
          <p className={styles.current_playing}>crrently playing</p>
          <div className={styles.details_info}>
            <p>{selected}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
