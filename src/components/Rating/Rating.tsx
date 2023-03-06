import React, { useEffect, useState, KeyboardEvent } from "react";
import styles from "./Rating.module.css";
import { RatingProps } from "./Rating.props";
import cn from "classnames";
import StarIcon from "./star.svg";

export const Rating = ({ isEditable = false, rating, setRating, className, ...props }: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((star: JSX.Element, i: number) => {
      return (
        <span
          className={cn(styles.star, { [styles.filled]: i < currentRating, [styles.editable]: isEditable })}
          key={i}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => changeStar(i + 1)}
        >
          <StarIcon tabIndex={isEditable ? 0 : -1} onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}></StarIcon>
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const handleSpace = (i: number, e: KeyboardEvent) => {
    if (e.code != "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const changeStar = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((s: JSX.Element, i: number) => (
        <span key={i}>{s}</span>
      ))}
    </div>
  );
};
