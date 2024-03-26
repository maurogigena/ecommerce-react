import { useState } from 'react';

export const useCount = (initialValue = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount));

  return { count, increment, decrement };
};
