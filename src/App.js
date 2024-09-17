import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from './styles/Themes';
import { useRef, useEffect, useState } from 'react';
import Home from "./sections/Home";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from "framer-motion";
import Project from "./sections/Project";
import "./App.scss";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import { useLocation } from 'react-router-dom';

function App() {
  const containerRef = useRef(null); // 用來引用滾動容器
  const location = useLocation();
  const [scrollInstance, setScrollInstance] = useState(null); // 儲存 LocomotiveScroll 的實例

  // 確保每次路徑變更後正確處理滾動
  useEffect(() => {
    if (scrollInstance && location.hash === "#project") {
      const projectSection = document.querySelector("#project");
      if (projectSection) {
        // 使用 Locomotive Scroll 進行平滑滾動
        scrollInstance.scrollTo(projectSection, {
          duration: 2000,
          easing: [0.25, 0.0, 0.35, 1.0],
        });
      }
    }
  }, [location, scrollInstance]);

  // 確保滾動實例在渲染後更新
  useEffect(() => {
    if (scrollInstance) {
      scrollInstance.update(); // 確保滾動狀態正確更新
    }
  }, [scrollInstance]);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true, // 啟用平滑滾動
            getDirection: true, // 啟用方向檢測
          }}
          onUpdate={(instance) => setScrollInstance(instance)} // 將 LocomotiveScroll 的實例存儲在 state 中
          watch={[location.pathname]} // 每次路徑變更時，刷新滾動
          containerRef={containerRef}
        >
          <ScrollTriggerProxy /> {/* 使用 ScrollTrigger 進行動畫觸發 */}
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />  {/* Home 組件 */}
              <Project />  {/* Project 組件 */}
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
