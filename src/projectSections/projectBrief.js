import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  color: #000;
`;

const Title = styled(motion.h1)`
    font-size: ${props => props.theme.fontxxxl};
    font-weight:500;
    color:#000;
    padding:0;
    max-width:768px;
    margin-bottom:20px;
`;



const Tag = styled(motion.h4)`
  font-weight: 300;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #000;
  text-decoration: underline;
`;
const Description = styled(motion.p)`
  font-weight: 300;
  font-size: 1.25rem;
  margin-top: 2rem;
  color: #000;
`;

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const ProjectBrief = ({ projectId }) => {
  const [brief, setBrief] = useState(null);

  useEffect(() => {
    // 使用 fetch 从 Django API 获取 ProjectBrief 数据
    fetch(`/api/projectbriefs/`)
      .then(response => response.json())
      .then(data => {
        // 检查是否有足够的数据来使用projectId - 1作为索引
        if (data.length > projectId - 1) {
          setBrief(data[projectId - 1]); // 使用 projectId - 1 作为索引
        } else {
          console.error("Project ID exceeds the available data range.");
        }
      })
      .catch(error => console.error("Error fetching project brief:", error));
  }, [projectId]);
  
  if (!brief) {
    return <div>Loading...</div>;
  }
  return (
    <>
      
      <Container>
        <Title variants={textVariants} initial="hidden" animate="visible">
          {brief.project_title}
        </Title>

        <div>
          {brief.tags.map((tag, index) => (
            <Tag key={index} variants={textVariants} initial="hidden" animate="visible">
              {tag.name}
            </Tag>
          ))}
        </div>
        <Description variants={textVariants} initial="hidden" animate="visible">
          {brief.project_des}
        </Description>
      </Container>
    </>
  );
};

export default ProjectBrief;
