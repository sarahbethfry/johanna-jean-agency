import React from "react";
import classes from "./ComingSoon.module.css";

const ComingSoonBackground = () => {
  return (
    <div className={classes.ComingSoon}>
      COMING SOON
      <ul>
        <li className={classes.list1}>
          <a
            href="https://www.instagram.com/johannajeanagency/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.instagram}
          >
            @johannajeanagency
          </a>
        </li>
        <li className={classes.list2}>
          <a href="mailto:johanna@johannajeanagency.com<">
            johanna@johannajeanagency.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ComingSoonBackground;
