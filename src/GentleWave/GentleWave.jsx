import React from "react";
import classes from "./GentleWave.module.css";

const GentleWave = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="editorial"
      preserveAspectRatio="none"
      viewBox="0 24 150 50"
    >
      <defs>
        <path
          id="a"
          d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
        ></path>
      </defs>
      <use
        className={classes.parallax1}
        x="50"
        y="3"
        fill="#f461c1"
        xlinkHref="#a"
      ></use>
      <use
        className={classes.parallax2}
        x="50"
        fill="#4579e2"
        xlinkHref="#a"
      ></use>
      <use
        className={classes.parallax3}
        x="50"
        y="9"
        fill="#3461c1"
        xlinkHref="#a"
      ></use>
      <use
        className={classes.parallax4}
        x="50"
        y="6"
        fill="#fff"
        xlinkHref="#a"
      ></use>
    </svg>
  );
};

export default GentleWave;
