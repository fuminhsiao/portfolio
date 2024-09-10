import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import image1 from '../assets/Images/smartmockups_lrpdivfj.jpg'
import image2 from '../assets/Images/image-screen-psd-download.jpg'
import image3 from '../assets/Images/smartmockups_l2yuxc2h.jpg'
import image4 from '../assets/Images/smartmockups_l1mvifiy_edited.jpg'

// 樣式設定
const Container = styled.div`
  position: relative;
  width: 1024px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
`;

// 讓 Item 本身成為 <a> 並且具有 href 屬性
const Item = styled.a`
  flex: 1 1 calc(50% - 20px);
  max-width: calc(50% - 20px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none; /* 移除默認的文字下劃線 */
  color: inherit; /* 保持文字顏色與父容器一致 */
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 95.91%; /* 1.3:1 aspect ratio */
  overflow: hidden;
  border-radius: 20px;

  &:hover img {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
`;

const Title = styled.h3`
  margin: 10px 0 5px;
  font-size: 1.2em;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1em;
`;

const FlexItemComponent = () => {
  return (
    <Container>
      <Item as={Link} to="/projects/1">
        <ImageWrapper>
          <Image src={image1} alt="UCEA Website Development" />
        </ImageWrapper>
        <Title>UCEA Website Development</Title>
        <Description>Website Redesign&Development</Description>
      </Item>

      <Item href="https://fuminhsiao.wixsite.com/fumin-hsiao/icademify" target="_blank" rel="noopener noreferrer">
        <ImageWrapper>
          <Image src={image2} alt="iCademify" />
        </ImageWrapper>
        <Title>iCademify</Title>
        <Description>Conference App UX Research&Design</Description>
      </Item>

      <Item href="https://fuminhsiao.wixsite.com/fumin-hsiao/the-a-team" target="_blank" rel="noopener noreferrer">
        <ImageWrapper>
          <Image src={image3} alt="The A-team" />
        </ImageWrapper>
        <Title>The A-team</Title>
        <Description>UX Research&Design Tool</Description>
      </Item>

      <Item href="https://fuminhsiao.wixsite.com/fumin-hsiao/um-magic-bus" target="_blank" rel="noopener noreferrer">
        <ImageWrapper>
          <Image src={image4} alt="U-M Magic Bus" />
        </ImageWrapper>
        <Title>U-M Magic Bus</Title>
        <Description>App Redesign</Description>
      </Item>
    </Container>
  );
};

export default FlexItemComponent;
