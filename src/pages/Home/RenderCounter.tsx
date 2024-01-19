import { useEffect, useRef, useState } from 'react';

export default function RenderCounter() {
  const [value, setValue] = useState('');
  const reRenders = useRef(0);

  reRenders.current = reRenders.current + 1;

  useEffect(() => {
    console.info(value);
  }, [value]);
  return (
    <>
      <h2>Active state RenderCounter</h2>
      <div>render count {reRenders.current}</div>
      <input onChange={(e) => setValue(e.target.value)}></input>
    </>
  );
}
