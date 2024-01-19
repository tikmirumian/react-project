import { useEffect, useState } from 'react';

export default function Mouse() {
  function mouseMove() {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0
    });

    useEffect(() => {
      function handle(e: MouseEvent) {
        setMousePosition({
          x: e.pageX,
          y: e.pageY
        });
      }
      document.addEventListener('mousemove', handle);
      return () => document.removeEventListener('mousemove', handle);
    });

    return mousePosition;
  }
  const { x, y } = mouseMove();

  return (
    <>
      <h2>Active state Mouse</h2>
      <p>Mouse X is {x}</p>
      <p>Mouse X is {y}</p>
    </>
  );
}
