import { Navbar } from './components/layout/Navbar';
import { SkipLink } from './components/layout/SkipLink';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Featured } from './components/sections/Featured';
import { Process } from './components/sections/Process';
import { Skills } from './components/sections/Skills';
import { Background } from './components/sections/Background';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Featured />
        <Process />
        <Skills />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
