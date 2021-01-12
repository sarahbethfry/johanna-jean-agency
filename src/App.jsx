import React from "react";
import classes from "./App.module.css";
import ComingSoonBackground from "./ComingSoon/ComingSoonBackground.jsx";
import GentleWave from "./GentleWave/GentleWave.jsx";

function App() {
  return (
    <div className={classes.App}>
      <ComingSoonBackground />
      <GentleWave />
    </div>
  );
}

export default App;
