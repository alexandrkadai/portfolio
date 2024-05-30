import { BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Contact, Hero, StarsCanvas, Footer } from './Components/';

const Navbar = lazy(() => import('./Components/Navbar'));
const About = lazy(() => import('./Components/About'));
const Experience = lazy(() => import('./Components/Experience'));
const Tech = lazy(() => import('./Components/Tech'));
const Works = lazy(() => import('./Components/Works'));

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Suspense fallback={<p>Loading</p>}>
            <Navbar />
          </Suspense>
          <Hero />
        </div>
        <Suspense fallback={<p>Loading</p>}>
          <About />
        </Suspense>
        <Suspense fallback={<p>Loading</p>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<p>Loading</p>}>
          <Tech />
        </Suspense>
        <Suspense fallback={<p>Loading</p>}>
          <Works />
        </Suspense>

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
