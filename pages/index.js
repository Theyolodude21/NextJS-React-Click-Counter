import Head from 'next/head';
import React, { useState } from 'react';

export default function Home() {

  // Globally Scoped count value.
  const [StorageCount, setCount] = useState(0);
  
  function countUp( ) {

    window.localStorage.setItem('count', JSON.stringify(StorageCount));

    setCount(StorageCount + 1)

    let getCount = window.localStorage.getItem('count'); 

    console.log(getCount + " This is local Storage Count")


  }

  

  return (
    <div>
      <Head>
        <title>Event Handlers</title>
      </Head>

      <p value="countState">{StorageCount}</p>
      <button onClick={countUp}>Up</button>
      

    </div>
  )
}
