import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion';


import img1 from '../assets/Images/letter-f.png'
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Section = styled.section`
font-family: "Philosopher";
position: relative;
min-height:100vh;
width:100vw;
display:flex;
margin: 0 auto;
background-color: rgba(201, 184, 166, 0.3);
display:flex;
flex-direction:column;
align-items:center;


`
const LogoContainer = styled(motion.div)`
width:100%;
display:flex;
flex-direction:column;
align-items:center;

.contact{
    position:absolute;
    top:25em;
    display:flex;
flex-direction:column;
align-items:center;
}

h2{
    color: #000;
    font-weight:100;
}

`
const MenuItems = styled(motion.ul)`
height: ${props=>props.theme.navHeight};
color: #000;
list-style: none;

display: flex;
justify-content: space-around;
align-items: center;

width: 80%;
border-top: #000 solid 1px;
border-bottom: #000 solid 1px;
margin-top:5em;

`
const MenuItem = styled(motion.li)`
text-transform:uppercase;
color: #000;
max-width:200px;
font-size: ${(props) => props.theme.fontxl};
cursor:pointer;
transition:0.3s;

:hover{
    color:#f88717;
    text-shadow: 1px 1px 1px #696969;
}
@media (max-width: 900px){
    font-size: ${(props) => props.theme.fontmd};


}


`

const Contact = () => {
    const {scroll}=useLocomotiveScroll();
    const handleScroll =(id) =>{
        let elem =document.querySelector(id);

        scroll.scrollTo(elem,
            {
                duration:'2000',
                easing:[0.25,0.0,0.35,1.0]
            })
    }
    const handleScroll2 =(id) =>{
        let elem =document.querySelector(id);

        scroll.scrollTo(elem,
            {
                offset:'-3554',
                duration:'2000',
                easing:[0.25,0.0,0.35,1.0]
            })
    }



  return (


    <Section id="contact">
        <LogoContainer data-scroll data-scroll-speed="-3">
            <img src={img1} alt="logo"></img>
            <div className='contact'>
<h2>Fumin Hsiao's Design</h2>
            <h2>fumin@umich.edu</h2>
            <h2>517-312-7484</h2>
            </div>
            

        </LogoContainer>
        <MenuItems data-scroll data-scroll-speed="5">
        
            <MenuItem onClick={()=>handleScroll('#home')}
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, Y:0}}
        >Top</MenuItem> 
           
        


        <MenuItem
        onClick={()=>handleScroll('#about')}
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, Y:0}}
        >About</MenuItem>


        <MenuItem
        onClick={()=>handleScroll2('#design')}
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, Y:0}}
        >Design </MenuItem>
        <a href='https://linkedin.com/in/fuminhsiao' target="_blank" rel="noreferrer">
            <MenuItem
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, Y:0}}
        >Linkedin</MenuItem>
        </a>
        
        <a href='https://github.com/fuminhsiao/fumin.git' target="_blank" rel="noreferrer" >
            <MenuItem
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, Y:0}}
        >Github</MenuItem>
        </a>
        <a href='https://www.fuminhsiao.com/' target="_blank" rel="noreferrer">
             <MenuItem
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, Y:0}}
        >Fujian </MenuItem>
        </a>
       
        </MenuItems>
        
    </Section>
    
  )
}

export default Contact