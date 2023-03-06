import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import { Button, Htag, P, Rating, Tag } from "../components";
import { useState } from "react";
import { withLayout } from "../layout/Layout";

export function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">TEXT</Htag>
      <Button appearance="primary" arrow="right">
        Клик
      </Button>
      <Button appearance="transparent" arrow="down">
        Клик
      </Button>
      <P size="l">Большой</P>
      <P size="m">Средний</P>
      <Tag size="s">Маленький</Tag>
      <Tag size="m" color="red">
        Mal
      </Tag>
      <Tag size="m" color="green">
        Mal
      </Tag>
      <Tag color="primary">dfb</Tag>
      <Rating rating={rating} setRating={setRating} isEditable />
    </>
  );
}

export default withLayout(Home);
