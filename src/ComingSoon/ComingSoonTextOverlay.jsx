import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import classes from "./ComingSoon.module.css";

const ComingSoonTextOverlay = () => {
  return (
    <div className={classes.ComingSoonText}>
      <h1 className={classes.comingsoon}> Coming Soon . . .</h1>
      {/* <FontAwesomeIcon icon={faEllipsisH} size="3x" color="white" /> */}
    </div>
  );
};

export default ComingSoonTextOverlay;
