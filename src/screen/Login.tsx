import React, { useState, SyntheticEvent } from "react";
import styles from "./LogForm.module.css";

import { login, useGlobleContext } from "../context/context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useGlobleContext();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("please type info");
    } else {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      // console.log(data);
      dispatch(login(data.user));
    }
  };

  return (
    <>
      <form className={styles.form}>
        <div className={styles.title}>
          <h2>Log in</h2>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.formControl}>
          <label className={styles.formLabel}>email</label>
          <input
            type="email"
            className={styles.formInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.formControl}>
          <label className={styles.formLabel}>password</label>
          <input
            type="password"
            className={styles.formInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.btnBlock} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
