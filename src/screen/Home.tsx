import React from "react";
import { useGlobleContext } from "../context/context";
import styles from "./Hp.module.css";

export default function Home() {
  const { state } = useGlobleContext();
  console.log(state.user);

  return <h1 className={styles.headerTitle}>welcome! {state.user?.name}</h1>;
}
