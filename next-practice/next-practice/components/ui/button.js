import React from "react";
import Link from "next/link";

import classes from "./button.module.css";

const Button = (props) => {
  const { link } = props;

  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
