import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from './styles/Themes';
import { useRef, useEffect } from 'react';
import Home from "./sections/Home";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from "framer-motion";
import Project from "./sections/Project";
import "./App.scss";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";  // 引入 ScrollTriggerProxy
import { useLocation } from 'react-router-dom';  // 引入 useLocation 來檢查當前路徑

function App() {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // 當位置發生變更時檢查哈希值，特別是 #project
    if (location.hash === "#project" && containerRef.current) {
      const projectSection = document.querySelector("#project");
      if (projectSection) {
        containerRef.current.scrollTo({
          top: projectSection.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ...所有可用的 Locomotive Scroll 配置選項
          }}
          watch={[
            location.pathname,  // 監控路徑變更
          ]}
          containerRef={containerRef}
        >
          <ScrollTriggerProxy /> {/* 加入 ScrollTriggerProxy */}
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <Project />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
