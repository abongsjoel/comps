import { useEffect, useState } from "react";

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(`Count is ${count}`);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
};

export default useCounter;
