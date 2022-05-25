import React, { useState } from "react";
import styles from "./Home.module.css";
import { Station } from "../../types";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";

const StationDetails = (props: {
  station: Station;
  selected: string;
  setSelected: any;
}) => {
  return (
    <div>
      <div
        className={styles.station_details}
        onClick={() => {
          props.setSelected(
            props.selected === props.station.station_name
              ? ""
              : props.station.station_name
          );
        }}
      >
        <p>{props.station.station_name}</p>
        <p>{props.station.freq}</p>
      </div>

      {/* Stations details */}
      <div
        className={
          props.selected === props.station.station_name
            ? styles.station_info_active
            : styles.station_info
        }
      >
        {/* showing stations details according to active station */}
        {props.selected === props.station.station_name && (
          <img className={styles.station_operation} src={minus} alt='' />
        )}
        {props.selected === props.station.station_name && (
          <img className={styles.station_img} src={props.station.img} alt='' />
        )}
        {props.selected === props.station.station_name && (
          <img className={styles.station_operation} src={plus} alt='' />
        )}
      </div>
    </div>
  );
};

export default StationDetails;
