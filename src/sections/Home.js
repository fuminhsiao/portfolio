import React from 'react'
import styled from 'styled-components'
import Cover from '../components/SvgBackground'
import NavBar from '../components/NavBar'


const Section = styled.section`
position: relative;
min-height:100vh;
overflow:hidden;

`


const Home = () => {
  return (
    <Section id='home'>
        <Cover/>
        <NavBar/>
    </Section>
  )
}

export default Home