import React from "react";
import ComingSoonTextOverlay from "./ComingSoonTextOverlay";
import classes from "./ComingSoon.module.css";

const ComingSoonBackground = () => {
  return (
    <div className={classes.Background}>
      <h1 className={classes.JohannaJean}>Johanna Jean</h1>
      <h3 className={classes.Agency}>Agency</h3> <hr />
      <ComingSoonTextOverlay />
    </div>
  );
};

export default ComingSoonBackground;
