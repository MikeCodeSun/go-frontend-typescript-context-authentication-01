import React, { SyntheticEvent, useState } from "react";
import styles from "./LogForm.module.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!email || !name || !password) {
      alert("please type info");
    } else {
      const res = await fetch("http://localhost:4000/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, password }),
      });
      const data = await res.json();
      // console.log(data);
      if (data.msg === "register success") {
        navigate("/login");
      }
    }
  };

  return (
    <>
      <form className={styles.form}>
        <div className={styles.title}>
          <h2>Regisetr</h2>
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
          <label className={styles.formLabel}>name</label>
          <input
            type="text"
            className={styles.formInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
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
