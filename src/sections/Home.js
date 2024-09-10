import React from 'react'
import styled from 'styled-components'
import Cover from '../components/Cover'
import Banner from '../components/Banner'

const Section = styled.section`
position: relative;
min-height:100vh;
overflow:hidden;

`


const Home = () => {
  return (
    <Section id='home'>
        <Cover/>
        <Banner/>
    </Section>
  )
}

export default Home