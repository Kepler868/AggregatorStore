import React from "react";
import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>OwlTop © {format(new Date(), "yyyy")} Все права защищены</div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политики конфеденциальности
      </a>
    </footer>
  );
};
