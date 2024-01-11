import { useEffect, useState } from 'react';

export default function Mouse() {
  function mouseMove() {
    const [mousePosition, setMousePosition] = useState({
      x: null,
      y: null
    });

    useEffect(() => {
      function hendle(e) {
        setMousePosition({
          x: e.pageX,
          y: e.pageY
        });
      }
      document.addEventListener('mousemove', hendle);
      return () => document.removeEventListener('mousemove', hendle);
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
