import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import styles from "./Nav.module.css";
import { logout, useGlobleContext } from "../context/context";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const { state, dispatch } = useGlobleContext();

  const linksContainerRef = useRef(null) as any;
  const linksRef = useRef(null) as any;

  useEffect(() => {
    const linksContainer = linksContainerRef.current.style;
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    // console.log(linksHeight);

    if (show) {
      linksContainer.height = `${linksHeight}px`;
    } else {
      linksContainer.height = 0;
    }
  }, [show]);

  const handleLogout = async () => {
    const res = await fetch("http://localhost:4000/logout", {
      credentials: "include",
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    console.log(data);

    dispatch(logout());
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navCenter}>
          <div className={styles.navHeader}>
            <Link to="/">
              <h2>Home</h2>
            </Link>
            <button className={styles.toggleBtn} onClick={() => setShow(!show)}>
              <FaAlignJustify />
            </button>
          </div>
          <div className={styles.linksContainer} ref={linksContainerRef}>
            {state.user ? (
              <div className={styles.links} ref={linksRef}>
                <Link to="/proctected" className={styles.link}>
                  {state.user.name}
                </Link>
                <Link to="#" className={styles.link} onClick={handleLogout}>
                  logout
                </Link>
              </div>
            ) : (
              <div className={styles.links} ref={linksRef}>
                <Link to="/login" className={styles.link}>
                  login
                </Link>
                <Link to="/register" className={styles.link}>
                  register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
