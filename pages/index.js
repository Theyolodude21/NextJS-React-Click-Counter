import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  // Declare a new state variable, which we'll call "count"
  
  const [count, setCount] = useState(0);
  function clickCounter() {
    setCount(count + 1)
  }

  const [tenCount, settenCount] = useState(0);
  function tenclickCounter() {
    settenCount(tenCount + 10)
  }

  const [snCount, setsnCount] = useState(0);
  function snclickCounter() {
    setsnCount(snCount + 100)
  }


  return (
    <div className={styles.Global}>
      <Head>
        <title>Click Counters</title>
      </Head>

      <h1 className={styles.Header}>Counters</h1>
      <h1 className={styles.Header}>____________________________________________________________________________</h1>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <div className={styles.CounterTitles}>

      </div>
      
      <div className={styles.Counters}>
        <div className={styles.CountersContent}>
          <p>{count}</p>
          <button className={styles.CounterButtons} onClick={clickCounter}>
            Click me
          </button>
        </div>

        <div className={styles.CountersContent}>
          <p>{tenCount}</p>
          <button className={styles.CounterButtons} onClick={tenclickCounter}>
            Click me
          </button>
        </div>

        <div className={styles.CountersContent}>
          <p>{snCount}</p>
          <button className={styles.CounterButtons} onClick={snclickCounter}>
            Click me
          </button>
        </div>
      </div>

      <div className={styles.MainFooterParent}>
          <footer className={styles.MainFooterChild}>
              <a>2021 By Tallis Riley</a>
          </footer>
      </div>

    </div>
  )
}
