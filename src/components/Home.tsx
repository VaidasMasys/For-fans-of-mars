import React from "react";
import styles from "./Home.module.css";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header />

      <div className={styles.homeBackground}></div>
    </div>
  );
}

export default Home;
