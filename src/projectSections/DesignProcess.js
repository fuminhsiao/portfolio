import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { PageTitle, PageTitleWrapper } from "../styles/Typography";

const DesignProcessWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: auto; /* 允许水平滚动 */
  white-space: nowrap; /* 禁止步骤换行 */
`;

const StyledMotionDiv = styled(motion.div)`
  position: relative;
  width: 100%;
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const StepItem = styled(motion.div)`
  width: 200px;  /* 放大圆形以适应文本 */
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 3px solid #000;
  margin: 30px; /* 控制步骤之间的间距 */

  &:nth-child(odd) {
    align-self: flex-start;
    margin-bottom: 350px;
  }

  &:nth-child(even) {
    align-self: flex-end;
    margin-top: 350px;
  }
`;

const StepTitle = styled.h2`
  margin: 0;
  font-size: 2.2rem;
  color: #000;
  text-align: center;
  font-weight: 500;
  line-height: 1.2; /* 调整行高，使两行文字更好地居中 */
  word-break: break-word; /* 强制长单词换行 */
  word-wrap: break-word; /* 确保正常换行 */
  white-space: normal; /* 允许正常换行 */
  max-width: 80%; /* 控制文本最大宽度，确保能够换行 */
`;

const Connector = styled.div`
  position: absolute;
  left: 50%;
  width: 3px;
  height: 40px; /* 连接线的长度 */
  background-color: #000;
  transform: translateX(-50%);
  border-radius: 2px; /* 使连接线的两端圆形 */

  ${({ position }) => position === "even" ? 'bottom: -50px;' : 'top: -50px;'}
`;

const HorizontalLine = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;  /* 缩短水平线的长度 */
  right: 10%;
  height: 3px;
  background-color: #000;
  border-radius: 2px; /* 使水平线的两端圆形 */
`;

const DesignProcess = ({ projectId }) => {
  const [designProcess, setDesignProcess] = useState([]);

  useEffect(() => {
    // 从 Django API 获取 DesignProcess 数据
    fetch(`/api/design_processes/?project=${projectId}`)
      .then(response => response.json())
      .then(data => setDesignProcess(data))
      .catch(error => console.error('Error fetching design process:', error));
  }, [projectId]);

  if (designProcess.length === 0) {
    return <div>No design process available</div>;
  }

  return (
    <StyledMotionDiv>
      <PageTitleWrapper>
        <PageTitle>Design Process</PageTitle>
      </PageTitleWrapper>
      <DesignProcessWrapper>
        <HorizontalLine />
        <StepContainer>
          {designProcess.map((process, index) => (
            process.steps.map((step, stepIndex) => (
              <StepItem
                key={stepIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: stepIndex * 0.3, // 确保动画按顺序交替显示
                  ease: 'easeInOut',
                }}
              >
                <StepTitle>{step.process_step.name}</StepTitle>
                <Connector position={stepIndex % 2 === 0 ? 'even' : 'odd'} />
              </StepItem>
            ))
          ))}
        </StepContainer>
      </DesignProcessWrapper>
    </StyledMotionDiv>
  );
};

export default DesignProcess;
