import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"
import LogoBackground from './LogoBackground/Logobackground'

const SvgContainer = styled.section`
width:100%;
height:100vh;

position:relative;
text-align:center;
.logo-background{
    position: relative;
    top:5em;
}

`
const DarkOverlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
left:0;
right:0;
z-index: 1;


background-color:${props=>`rgba(201, 184, 166, 0.3)`};
`

const Title = styled(motion.div)`
height: 90vh;
position: absolute;
top: 0;
bottom: 0;
left:0;
right:0;
z-index: 5;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${props=>props.theme.text};

div{
    display:flex;
    flex-direction:row;
}
.name{
    margin:0 20px;
}

h1{
    font-family: 'Philosopher';
    font-size: ${props => props.theme.fontBig};
    text-shadow: 1px 1px 1px #7e7e7e;
    font-weight:500;
    color:#f88717;
    padding:0;
}
h2{
    font-family: 'Philosopher';
    font-size: ${props => props.theme.fontxxl};
    text-shadow: 1px 1px 1px #fff;
    font-weight: 300;
    color: #000;
    text-transform: capitalize, 
    margin:0;
}

@media (max-width: 900px){
    .name-container{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .name{
        padding:0;
        margin:0;
    }
    h1{
        font-size: 150px;
        padding:0;
        margin:0;
        height:110px;
 
    }

}
`

const container ={
    hidden:{
        opacity:0,
    },
    show:{
        opacity:1,
        transition:{
            delayChildren: 2,
            staggerChildren:0.3,
    }
    },
}

const item ={
    hidden:{
        opacity:0,
    },
    show:{
        opacity:1,

    
    },
}

const Cover = () => {
  return (
    <SvgContainer>
        <DarkOverlay/>
        <Title variants={container} initial="hidden" animate="show">
        <h2 data-scroll data-scroll-delay='0.04' data-scroll-speed="2">Meet Your <br/>Facinating Futuristic<br/>UX Designer</h2>
            <div className='name-container'>
                <div className='name'>
                    <motion.h1 variants={item} data-scroll data-scroll-delay='0.013' data-scroll-speed="4">
                    F
                </motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.009' data-scroll-speed="4">
                    u
                </motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.006' data-scroll-speed="4">
                    m
                </motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.004' data-scroll-speed="4">
                    i
                </motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.002' data-scroll-speed="4">
                    n
                </motion.h1>
                </div>
                <div className='name'>
                   <motion.h1 variants={item} data-scroll data-scroll-delay='0.002' data-scroll-speed="4">
                    H
                </motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.004' data-scroll-speed="4">
                    s
                </motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.006' data-scroll-speed="4">
                    i
                </motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.009' data-scroll-speed="4">
                    a
                </motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.013' data-scroll-speed="4">
                    o
                </motion.h1> 
                </div>
                
            </div>
            
        </Title>
        <div className='logo-background'>
<LogoBackground/>
        </div>
        
    </SvgContainer>
  )
}

export default Cover