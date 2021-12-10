import Head from 'next/head';
import React, { useState, useEffect } from 'react';

export default function Home() {

  // Declare a new state variable, which we'll call "count"
  
  const [count, setCount] = useState(0);
  console.log(count)

  function clickCounter() {
    setCount(count + 1)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={clickCounter}>
        Click me
      </button>
    </div>
  );
}
