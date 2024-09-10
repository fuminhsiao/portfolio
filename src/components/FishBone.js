import React from "react";
import styled from "styled-components";

// 樣式設定
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1024px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const Description = styled.p`
  margin-bottom: 20px;
  color: #666;
`;

const LinksContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  gap: 20px;
`;

const LinkButton = styled.a`
  padding: 10px 20px;
  border: 1px solid #333;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius:10px;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const ProgressFishboneContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 40px 0; /* 避免與其他內容重疊的間距 */
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #e0e0e0;
  position: relative;
`;

const Progress = styled.div`
  position: absolute;
  width: 70%; /* 這裡可以設置進度百分比 */
  height: 100%;
  background: linear-gradient(to right, #add8e6, #0000ff); /* 從淺藍到深藍的漸層 */
`;

const FishboneItemsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const FishboneItem = styled.div`
  text-align: center;
  width: 14%; /* 每個項目占整體寬度的14% (7項) */
  position: relative;
  text-transform: uppercase;
  &:before {
    content: "";
    position: absolute;
    top: -30px; /* 將斜線從進度條指向下方 */
    left: 50%;
    transform: translateX(-50%) rotate(45deg); /* 固定為斜向下的線條 */
    width: 30px;
    height: 2px;
    background-color: ${(props) => props.lineColor}; /* 根據傳入的顏色設置連接線的顏色 */
  }

  span {
    display: block;
    margin-top: 10px; /* 保持項目文字距離斜線一段距離 */
    color: #333;
  }
`;

const Fishbone = () => {
  const colors = [
    "#ADD8E6", // 淺藍色
    "#87CEEB", // 天藍色
    "#4682B4", // 鋼藍色
    "#1E90FF", // 道奇藍
    "#0000FF", // 藍色
    "#00008B", // 暗藍色
    "#000080", // 海軍藍
  ];

  return (
    <Container>
      <Title>Projects</Title>
      <Description>
        Regular reviews of past projects help assess whether an effective design
        process is being followed. During the last review, it became apparent
        that establishing a model could better manage projects, rather than
        relying on WIX for manual content and layout entry each time. By
        analyzing design patterns, the conclusion was made to build models using
        Django and render the portfolio with React. In the future, the custom
        input interface will allow for quick addition of new projects.
        <br />
        <br />
        Current progress: <br />
        Test with project 1 - UCEA Website Development
      </Description>

      {/* 增加兩個連結 */}
      <LinksContainer>
        <LinkButton href="https://github.com/fuminhsiao/test-portfolio" target="_blank">
          GITHUB
        </LinkButton>
        <LinkButton href="https://fuminhsiao.wixsite.com/fumin-hsiao" target="_blank">
          OLD PORTFOLIO
        </LinkButton>
      </LinksContainer>

      <ProgressFishboneContainer>
        {/* 進度條 */}
        <ProgressBar>
          <Progress />
        </ProgressBar>

        {/* 魚骨圖的所有項目都在下方 */}
        <FishboneItemsContainer>
          <FishboneItem lineColor={colors[0]}>
            <span>PLAN</span>
          </FishboneItem>
          <FishboneItem lineColor={colors[1]}>
            <span>Analyze Projects</span>
          </FishboneItem>
          <FishboneItem lineColor={colors[2]}>
            <span>Establish Django Model</span>
          </FishboneItem>
          <FishboneItem lineColor={colors[3]}>
            <span>Create React Frontend</span>
          </FishboneItem>
          <FishboneItem lineColor={colors[4]}>
            <span>Test with projects</span>
          </FishboneItem>
          <FishboneItem lineColor={colors[5]}>
            <span>Revise Models and frontend</span>
          </FishboneItem>
          <FishboneItem lineColor={colors[6]}>
            <span>Finish with all projects</span>
          </FishboneItem>
        </FishboneItemsContainer>
      </ProgressFishboneContainer>
    </Container>
  );
};

export default Fishbone;
