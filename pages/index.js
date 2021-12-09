import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import srcImage from '../public/Chapter3.jpeg';


export default function Home( {props} ) {

  let name = "Yolo";
  let _A = "'"
  let mainTitle = "Yolos Fortnite Tracking";
  return (
    <div>
      <Head>
        <title>Yolos Fortnite Blog</title>
      </Head>

      <div className={styles.HeaderDiv}>
        <h1 className={styles.HeaderName}>{mainTitle} 
          <a>Stats</a>
        </h1>
        <h3 className={styles.HeaderName}>Chapter 3 Season 1</h3>
      </div>


      <body>
        <iframe width="1442" height="690" src="https://www.youtube.com/embed/knAYcg7Tt8E" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      </body>
    </div>
  )
}
