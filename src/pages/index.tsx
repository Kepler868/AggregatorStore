import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import { Button, Htag, P, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
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
    </div>
  );
}
