import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

const Container = styled.div`
  position: absolute;
  top: 5px;
  left: 20px;

  width: 100%;
  color: #000;
  z-index: 20;

  a{
    display:flex;
    align-items:center;
    color:#000;
    
  }

  svg{
    width: 4rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap:round;

    g{
        path{
            stroke:#000;
        }
    }

  }
`;

const textVariants ={
    hidden:{
        opacity:0,
        x:-100,
    },
    visible:{
        opacity:1,
        x:-5,


        transition:{
            duration:2,
            delay:3.5,
            ease:'easeInOut'
    }
    },
}

const pathVariants ={
    hidden:{
        opacity:0,
        pathLength:0,
    },
    visible:{
        opacity:1,
        pathLength:1,
        transition:{
        duration:2,
        ease:'easeInOut'
    }
    },
}


const Text = styled(motion.span)`
font-size: ${props=>props.theme.fontxs};
color: #000;
font-weight: 100;
padding-left: 16px;
padding-top:3px;
`

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">
          
          <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
            <path

            variants={pathVariants}
            initial="hidden"
            animate="visible"

             d="M254 470 c-32 -13 -54 -50 -54 -90 0 -41 14 -60 47 -60 21 0 22 -4
             25 -82 l3 -83 40 0 40 0 3 78 3 77 30 0 c26 0 30 3 27 23 -2 16 -11 23 -30 25
             -24 3 -28 8 -28 33 0 26 3 29 20 24 29 -9 60 12 60 40 0 25 -1 25 -82 24 -46
             0 -93 -4 -104 -9z m176 -14 c0 -23 -25 -36 -59 -30 -31 6 -31 6 -31 -34 0 -38
             2 -41 32 -44 42 -4 50 -28 9 -28 l-30 0 -3 -77 c-3 -77 -3 -78 -30 -81 l-28
             -3 0 134 c0 73 -3 137 -7 140 -15 15 -33 -18 -31 -57 l1 -41 7 45 7 45 1 -43
             c2 -30 -3 -44 -13 -48 -23 -9 -45 15 -45 50 0 63 37 85 143 86 59 0 77 -3 77
             -14z" />

             
          </g>
        </svg>


        <Text variants={textVariants} initial="hidden"
            animate="visible">
            Designs of Fumin Hsiao
        </Text>
      </Link>

    </Container>
  );
};

export default Logo;
