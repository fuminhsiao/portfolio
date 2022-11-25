import React from "react";
import styled from "styled-components";

import img2 from "../assets/Images/whiteboard.jpg";
import img3 from "../assets/Images/Sticky.png";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;
  margin: 0 auto;
  @media (max-width: 900px){
    flex-direction:column;

}
  
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Philosopher";
  font-weight: 300;

  position: absolute;
  top: 10rem;
  left: 0;
  z-index: 5;
  @media (max-width: 900px){
    position: relative;
    top:5rem;

}
`;
const Left = styled.div`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 300;
  width: 50%;
  position: relative;
  z-index: 5;
  margin-top: 20%;
  @media (max-width: 900px){
    width: 100%;

}
`;
const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .img-bg {
    position: absolute;
    bottom: 0;
    height: 100%;
    width: auto;
    left: -30%;
  }
  .small-img-1 {
    width: 100%;
    position: absolute;
    right: -10%;
    bottom: 10%;
    opacity: 0.9;
  }
  .small-img-2 {
    width: 50%;
    position: absolute;
    left: 70%;
    bottom: 50%;
    opacity: 0.9;
  }
  @media (max-width: 900px){
    opacity:0;

}
`;
const About = () => {
  return (
    <Section id="about">
      <Title
        data-scroll
        data-scroll-speed="-1"
        data-scroll-direction="horizontal"
      >
        About Me
      </Title>
      <Left data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal" >
        Fumin Hsiao is a UX designer who approaches the optimal user experience
        design strategy through a transparent, iterative process in order to
        create things that matter.
        <br />
        <br />
        Working for up to five years in the mechanical industrial sector and
        operating my own audio brand. I seen several companies fail as a result
        of poor UX designs and conflicts between engineers and designers, which
        prompted me to return to the University of Michigan to study design
        science. <br /><br />For a comprehensive view of web development, I delve into
        full-stack web design, including React and Django, in addition to UX
        Design.
      </Left>
      <Right>
        <img
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="horizontal"
          src={img2}
          className="small-img-1"
          alt="About Us"
        />
        <img
          data-scroll
          data-scroll-speed="3"
          src={img3}
          className="small-img-2"
          alt="About Us"
        />
      </Right>
    </Section>
  );
};

export default About;
