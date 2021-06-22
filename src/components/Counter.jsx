import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setTimeout(() => setCount(prevState => prevState + 1), 1000)
  }

  const countDown = () => {
    setCount(prevState => prevState - 1)
  }
  return (
    <div>
      <p>
        良いカウンター<br/>
        現在のカウント数: {count}
      </p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </div>
  );
};

export default Counter;