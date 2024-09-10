import React from 'react';
import { Container } from '../styles/Typography';
import FlexItemComponent from '../components/FlexItemComponent';
import Fishbone from '../components/FishBone';
import styled from 'styled-components'


const Section = styled.section`
position: relative;
min-height:100vh;
overflow:hidden;

`
const Project = () => {
  return (
    <Section id='project'>
      <Container height="none">
        <Fishbone/>
      <FlexItemComponent />
    </Container>
    </Section>
    
  );
};

export default Project;
