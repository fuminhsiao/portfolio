import './App.scss';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from './styles/Themes';
import { useRef } from 'react';
import Home from "./sections/Home";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import {LocomotiveScrollProvider} from 'react-locomotive-scroll'
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Projects from "./sections/Project";
import Contact from './sections/Contact';

function App() {

  const containerRef = useRef(null)

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>

        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              // ... all available Locomotive Scroll instance options 
            }
          }
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <ScrollTriggerProxy/>
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
          </main>
          </AnimatePresence>
          
        </LocomotiveScrollProvider>
      </ThemeProvider>

    </>
  );
}

export default App;
