import React from "react";
import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";
export const Tag = ({ size = "m", color = "transparent", href, className, children, ...props }: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.transparent]: color == "transparent",
        [styles.red]: color == "red",
        [styles.grey]: color == "gray",
        [styles.green]: color == "green",
        [styles.primary]: color == "primary",
        [styles.s]: size == "s",
        [styles.m]: size == "m",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
