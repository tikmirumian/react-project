import './Home.css';
import { lazy, Suspense, useState } from 'react';
const Mouse = lazy(() => import('./Mouse'));
const RenderCounter = lazy(() => import('./RenderCounter'));
export default function Home() {
  const [activeSection, setActiveSection] = useState('mouse');
  return (
    <>
      <div className="home">
        <div
          className={`button ${activeSection === 'mouse' ? 'active' : ''}`}
          onClick={() => {
            setActiveSection('mouse');
          }}>
          Mouse
        </div>
        <div
          className={`button ${activeSection === 'render' ? 'active' : ''}`}
          onClick={() => {
            setActiveSection('render');
          }}>
          Render Counter
        </div>
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
