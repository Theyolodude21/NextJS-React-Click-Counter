import Head from "next/head";
import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <div>
      <Head>
        <title>Click Counters</title>
      </Head>

      <h1 className={styles.Header}>Counters</h1>
      <h1 className={styles.Header}>____________________________________________________________________________</h1>


      <div className={styles.CenterText}>

      </div>

      <div className={styles.LeftText}>

      </div>

      <div className={styles.RightText}>

      </div>
    </div>
  )
}
