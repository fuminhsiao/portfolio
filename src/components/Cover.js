import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"
import LogoBackground from './LogoBackground/Logobackground'
import { Container } from '../styles/Typography'

const SvgContainer = styled.section`
width:1024px;

position:relative;
.logo-background{
    position: relative;
    top:5em;
}

`


const Title = styled(motion.div)`
position: absolute;
top: 0;
bottom: 0;
left:0;
right:0;
z-index: 5;

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

div{
    display:flex;
    flex-direction:row;
}
.name{
    margin:0 20px 0 0;
}

h1{
    font-size: 5rem;
    font-weight:100;
    padding:0;
}
h2{
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
            delayChildren: 0,
            staggerChildren:0.1,
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
    <Container><SvgContainer>
        <Title variants={container} initial="hidden" animate="show">
            <div className='name-container'>
                <div className='name'>
                    <motion.h1 variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed="4">
                    F
                </motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed="4">
                    u
                </motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed="4">
                    m
                </motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed="4">
                    i
                </motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed="4">
                    n
                </motion.h1>
                </div>
                <div className='name'>
                   <motion.h1 variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed="4">
                    H
                </motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed="4">
                    s
                </motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed="4">
                    i
                </motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed="4">
                    a
                </motion.h1>
                <motion.h1 variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed="4">
                    o
                </motion.h1> 
                </div>
                
            </div>
            <h2 data-scroll data-scroll-delay='0.04' data-scroll-speed="5">Creating delightful user experiences and driving business impact.</h2>

        </Title>
        <div className='logo-background'>
<LogoBackground/>
        </div>
        
    </SvgContainer></Container>
    
  )
}

export default Cover