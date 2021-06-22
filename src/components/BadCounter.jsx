import React, {useState} from 'react';

const BadCounter = () => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    // ここに重い処理があったとしたら
    setCount(count + 1)
  }

  const countDown = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <p>
        よくないカウンター<br/>
        現在のカウント数: {count}
      </p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </div>
  );
};

export default BadCounter;