import Head from 'next/head';
import React, { useState } from 'react';

export default function Home() {

    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    console.log(count)

    function clickCounter() {
      setCount(count + 1)

      window.localStorage.setItem('count', JSON.stringify(count + 1));
      
    }

    function setScore() {
      let storageCount = window.localStorage.getItem('count', JSON.stringify())
      console.log(storageCount + "This is storage Count")
      setCount(storageCount);
    }


    
    

  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={clickCounter}>
          Click me
        </button>
        <button onClick={setScore}>
          Click me for score
        </button>
      </div>
    );
}
