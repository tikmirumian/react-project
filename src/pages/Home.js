import './Home/home.css';
import { lazy, Suspense, useState } from 'react';
const Mouse = lazy(() => import('./Home/Mouse'));
const RenderCounter = lazy(() => import('./Home/RenderCounter'));
export default function Home() {
  const [activeSection, setActiveSection] = useState('mouse');
  return (
    <>
      <div className="home">
        <button
          className="button"
          onClick={() => {
            setActiveSection('mouse');
          }}>
          Mouse
        </button>
        <button
          className="button"
          onClick={() => {
            setActiveSection('render');
          }}>
          Render Counter
        </button>
      </div>
      <>
        {activeSection === 'mouse' ? (
          <Suspense fallback="loading..">
            <Mouse />
          </Suspense>
        ) : (
          <Suspense fallback="loading...">
            <RenderCounter />
          </Suspense>
        )}
      </>
    </>
  );
}
