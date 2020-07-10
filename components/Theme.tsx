import React, { ReactNode } from "react";
import styles from "../styles/styles.scss";

interface ThemeProps {
  children: ReactNode;
}

const Theme = (props: ThemeProps) => {
  const { children } = props;
  return <div className={styles.theme}>{children}</div>;
};

export default Theme;
