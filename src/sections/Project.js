import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import img1 from "../assets/Images/1.gif";
import img2 from "../assets/Images/2.gif";
import img3 from "../assets/Images/pic3.jpg";
import img4 from "../assets/Images/pic4.jpg";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color:${props=>`rgba(201, 184, 166, 0.3)`};
  

`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Philosopher";
  font-weight: 300;
  color: #f89c1a;
  position: absolute;
  top: 10rem;
  left: 2%;
  z-index: 20;
  @media (max-width: 900px){
    font-size: ${(props) => props.theme.fontxxl};
    top: 10rem;
    left:0;


}
`;

const Left = styled.div`
  width: 25%;
  background-color:${props=>`rgba(201, 184, 166, 0.3)`};
  color: #000;

  min-height: 100vh;
  z-index: 5;
  
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
    font-family: "Philosopher";
  }
  @media (max-width: 900px){
    width: 30%;
    p{
      font-size: ${(props) => props.theme.fontmd};
      width:100%;

    }

}
`;
const Right = styled.div`
  position: absolute;
  left: 25%;
  padding-left: 20%;
  min-height: 100vh;
  

  background-color: #222222;
  display: flex;

  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
    font-family: "Philosopher";
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 900px){
    left: 30%;


}
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 50rem;
  margin-right: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover  {
    h1 {
      color: #f89c1a;
    }
  }
  img {
    width: auto;
    height: 70vh;
    cursor: pointer;
  }

  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-aligh: center;
    cursor: pointer;
    color: #fff;
    transition: 0.5s;
  }
  @media (max-width: 900px){
    width:30em;
    h1{
      font-size:22px;
    }
    img {
      height: 30vh;
    }

}
`;

const Project = ({ img, title = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          pin: true,
          markers: false,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none,",
      });
      // horizontal
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          markers: false,
        },
        x: -pinWrapWidth,
        ease: "none,",
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {};
  }, []);

  return (
    <Section id='design' ref={ref}>
      <Title data-scroll data-scroll-speed="-1">
        Designs
      </Title>
      <Left>
        <p>
          # UX Design<br/>
          # UX Research<br/>
          # Interaction Design<br/>
          # Ecological Interface Design<br/>
          # Teamwork Framework Design<br/>
          # Analytical Design Process<br/>
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <a href="https://www.fuminhsiao.com/um-magic-bus">
          <Project img={img1} title="U-M Magic Bus" />
        </a>
        
        <a href="https://www.fuminhsiao.com/the-a-team">
          <Project img={img4} title="The A Team" />
        </a>
        <a href="https://www.fuminhsiao.com/um-sofing">
          <Project img={img2} title="U-M Sofing" />
        </a>

        <a href="https://www.fuminhsiao.com/varistand">
          <Project img={img3} title="VariStand" />
        </a>
      </Right>
    </Section>
  );
};

export default Projects;
