import React from "react";
import styles from "./Main.module.css";
import { Link } from "react-scroll";
import colabOne from "../../assets/colabOne.png";
import colabTwo from "../../assets/colabTwo.png";

export default function Main() {
  return (
    <main className={styles.main} id="main">
      <h2 className={styles.mainTitle}>
        Your Path To A Digital Revolution Starts Here!
      </h2>

      <p className={styles.mainDescription}>
        We strive to empower businesses with cutting-edge solutions, propelling
        them to new heights of success.
      </p>

      <Link to="service" spy={true} smooth={true} offset={50} duration={500}>
        <button className={styles.mainButton}>
          <span>Explore More</span>
        </button>
      </Link>

      <div className={styles.colabrators}>
        <img src={colabOne} alt="pure cube" />
        <img src={colabTwo} alt="visitca" />
      </div>
    </main>
  );
}
