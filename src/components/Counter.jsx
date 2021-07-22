import React, {useState, useEffect} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const countUp = () => {
    setCount(prevState => prevState + 1)
  }

  const countDown = () => {
    setCount(prevState => prevState - 1)
  }

  const count2Up = () => {
    setCount2(prevState => prevState + 1)
  }

  const count2Down = () => {
    setCount2(prevState => prevState - 1)
  }

  useEffect(() => {
    console.log("Current count is...", count)
  }, [count])

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
      <p>カウント2: {count2}</p>
      <button onClick={count2Up}>up</button>
      <button onClick={count2Down}>down</button>
    </div>
  );
};

export default Counter;