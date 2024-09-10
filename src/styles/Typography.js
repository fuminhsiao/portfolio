import styled from "styled-components";
import { motion } from "framer-motion";

export const TextBlock = styled.div`
  font-family: "Muli", sans-serif;
  font-size: 1.3rem;
  font-weight: 300;
  color: #000;
  line-height: normal;
  margin-bottom: 10px;
  display:flex;
  flex-direction: column;
  
`;

export const TextTitle = styled.h2`
  font-family: "Muli", sans-serif;
  font-size: 2rem;
  font-weight: 900;
  color: #000;
  line-height: normal;
  margin-bottom: 0px;
`;

export const PageTitleWrapper = styled.div`
  position: absolute;
  justify-content: start;
  top: 100px;
  transform: translateY(-30%);
  z-index: -1;
  width: 100%;
`;

export const PageTitle = styled.h1`
  font-family: "Muli", sans-serif;
  font-size: 10rem;
  font-weight: 600;
  color: rgba(150, 150, 150, 0.15);
  margin-left:20px;
  padding-top:100px;

`;

export const Container = styled.div`
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || "space-evenly"};
  align-items:center;
  width: 100vw; /* Make it full viewport width */
  color: #000;
  height: ${(props) => props.height || "100vh"};
  padding: ${(props) => props.padding || "0"};
  
`;

export const StyledMotionDiv = styled(motion.div)`
  width: 100%;
`;

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const textVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};
export const FullScreenOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const FullScreenImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  border-radius: 10px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
`;