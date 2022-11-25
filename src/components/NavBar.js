import React, { useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion';
import Logo from './Logo';
import { useLocomotiveScroll } from 'react-locomotive-scroll';


const NavContainer = styled(motion.div)`
width:100%;
z-index:6;

position: absolute;
top:${props => props.click ? "0" : `-${props.theme.navHeight}`};


display:flex;
justify-content: center;
align-items: center;

transition: all 0.3s ease;

`

const MenuItems = styled(motion.ul)`
position:relative;
height: ${props=>props.theme.navHeight};
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
list-style: none;

display: flex;
justify-content: space-around;
align-items: center;

width: 100%;
padding: 0 10rem;
`

const MenuBtn =styled.div`
background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
list-style-type: style none;
color: ${props => props.theme.body};
width: 20rem;
height: 5rem;
transition:0.5s;
:hover{
    background-color: #c0c0c0;
    
}

a{
    color: #fff;
}

position: absolute;
top: 100%;
left: 50%;
transform: translateX(-50%);
border-bottom: #000 solid 1px;
border-left: #000 solid 1px;
border-right: #000 solid 1px;
border-bottom-left-radius:  10px;
border-bottom-right-radius:  10px;


display: flex;
justify-content: center;
align-items: center;

font-size: ${props => props.theme.fontmd};
font-weight: 600;
text-transform: uppercase;


cursor: pointer;
`
const MenuItem = styled(motion.li)`
text-transform:uppercase;
color: ${props => props.theme.text};
font-family:"Montserrat";
cursor:pointer;


`





const NavBar = () => {
    const {scroll}=useLocomotiveScroll();
    const handleScroll =(id) =>{
        let elem =document.querySelector(id);

        scroll.scrollTo(elem,
            {
                duration:'2000',
                easing:[0.25,0.0,0.35,1.0]
            })
    }
    const[click, setClick]= useState(false);

  return (
    
    <NavContainer click={click} 
    initial={{
        y:'-100%'
    }}
    animate={{
        y:0
    }}
    transition={{
        duration:2, delay: 2
    }}
    >
        <MenuItems
        drag="y"
        dragConstraints={{
            top:0,
            bottom: 70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin

        >
         <MenuBtn onClick={()=>setClick(!click)}
         
         
         >  <Logo/>  </MenuBtn>

        <MenuItem
        onClick={()=>handleScroll('#home')}
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, Y:0}}
        >Home</MenuItem>

        <MenuItem
                onClick={()=>handleScroll('#about')}

        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, Y:0}}
        >About</MenuItem>

        <MenuItem
                onClick={()=>handleScroll('#design')}

        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, Y:0}}
        >Design</MenuItem>

        <MenuItem
                onClick={()=>handleScroll('#contact')}

        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, Y:0}}
        >Contact</MenuItem>
        </MenuItems>
       

    </NavContainer>
  )
}

export default NavBar