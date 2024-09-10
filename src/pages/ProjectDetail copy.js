import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { dark } from "../styles/Themes";
import Banner from "../components/Banner";
import ProjectBrief from "../projectSections/projectBrief";
import Showcase from "../projectSections/Showcase";
import DesignProcess from "../projectSections/DesignProcess";
import DefineProblem from "../projectSections/DefineProblem";
import GatherData from "../projectSections/GatherData";
import ConstructIA from "../projectSections/ConstructIA";
import Prototype from "../projectSections/Prototype";
import Development from "../projectSections/Development"; // Import Development component

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subScrollIndex, setSubScrollIndex] = useState(0); // Track sub-scroll position within any section
  const controls = useAnimation();

  const sections = useMemo(
    () => [
      { id: "brief", Component: ProjectBrief, height: "100vh", label: "Project Brief" },
      { id: "showcase", Component: Showcase, height: "100vh", label: "Showcase" },
      { id: "design", Component: DesignProcess, height: "100vh", label: "Design Process" },
      { id: "defineproblem", Component: DefineProblem, height: "100vh", label: "Define Problem" },
      { id: "gatherdata", Component: GatherData, height: "300vh", label: "Gather Data" }, // Set to 200vh
      { id: "constructia", Component: ConstructIA, height: "200vh", label: "Construct IA" }, // Set to 200vh
      { id: "prototype", Component: Prototype, height: "200vh", label: "Prototype" }, // Set to 200vh
      { id: "development", Component: Development, height: "500vh", label: "Development" }, // Set to 500vh
    ],
    []
  );

  // Handling the custom scrolling behavior for navigation
  const handleNavClick = (index) => {
    const viewportHeight = window.innerHeight;
  
    let totalHeight = 0;
    for (let i = 0; i < index; i++) {
      totalHeight += (parseInt(sections[i].height, 10) / 100) * viewportHeight;
    }
  
    // 设置当前索引并重置子滚动索引
    setCurrentIndex(index);
    setSubScrollIndex(0);  // 每次点击导航时重置子滚动索引
  
    // 手动滚动到目标位置
    controls.start({
      y: `-${totalHeight}px`,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      let accumulatedHeight = 0;
      let newIndex = 0;

      for (let i = 0; i < sections.length; i++) {
        const sectionHeight = (parseInt(sections[i].height, 10) / 100) * viewportHeight;
        accumulatedHeight += sectionHeight;

        if (scrollPosition < accumulatedHeight) {
          newIndex = i;
          break;
        }
      }

      if (newIndex !== currentIndex && newIndex < sections.length) {
        setCurrentIndex(newIndex);
        setSubScrollIndex(0); // Reset sub-scroll index when changing section
      }
    };

    const handleWheel = (event) => {
      event.preventDefault();
      const direction = event.deltaY > 0 ? 1 : -1;

      const currentSectionHeight = parseInt(sections[currentIndex].height, 10) / 100;
      const subSectionCount = currentSectionHeight;

      let newSubScrollIndex = subScrollIndex + direction;

      if (newSubScrollIndex < 0) {
        // Move to previous section
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
          setSubScrollIndex(
            parseInt(sections[currentIndex - 1].height, 10) / 100 - 1
          ); // Set to last sub-section based on the previous section height
        }
      } else if (newSubScrollIndex >= subSectionCount) {
        // Move to next section
        if (currentIndex < sections.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setSubScrollIndex(0); // Reset sub-scroll index for next section
        }
      } else {
        // Stay within the current section
        setSubScrollIndex(newSubScrollIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex, subScrollIndex, sections]);

  useEffect(() => {
    let totalHeight = 0;
    const viewportHeight = window.innerHeight;

    for (let i = 0; i < currentIndex; i++) {
      totalHeight += (parseInt(sections[i].height, 10) / 100) * viewportHeight;
    }

    totalHeight += subScrollIndex * viewportHeight;

    controls.start({
      y: `-${totalHeight}px`,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
    });
  }, [currentIndex, subScrollIndex, controls, sections]);

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Banner />

      {/* Navigation */}
      <nav style={navStyle}>
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(index);
            }}
            style={{
              ...linkStyle,
              background: currentIndex === index ? "#555" : "transparent", // Highlight active section
            }}
          >
            {section.label}
          </a>
        ))}
      </nav>

      {/* Scrolling section */}
      <motion.div style={scrollContainerStyle} animate={controls}>
        {sections.map(({ id, Component, height }) => (
          <motion.section id={id} key={id} style={{ ...scrollSectionStyle, height }}>
            <Component projectId={projectId} />
          </motion.section>
        ))}
      </motion.div>
    </ThemeProvider>
  );
};

// Inline CSS styles
const navStyle = {
  position: "fixed",
  top: "50%",           // 垂直居中
  right: "30px",        // 距离右侧10px
  zIndex: 1000,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  background: "#333",
  padding: "10px",
  borderRadius: "8px",
  transform: "translateY(-50%)",  // 使导航栏在页面高度的50%位置居中
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "14px",
  padding: "5px",
  transition: "background 0.3s ease",
  borderRadius: "5px",
};

const scrollContainerStyle = {
  width: "100%",
};

const scrollSectionStyle = {
  position: "relative",
  width: "100%",
  display: "flex",

};

export default ProjectDetail;
