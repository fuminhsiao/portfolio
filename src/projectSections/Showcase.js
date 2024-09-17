import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ShowcaseWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShowcaseContainer = styled.div`
  position: relative;
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover .showcase-image {
    transform: scale(1.1); /* 图片在悬停时放大 */
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const ShowcaseImage = styled(motion.img)`
  width: 1200px;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Dark Overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const OverlayText = styled.a`
  color: #fff;
  font-family: "Muli", sans-serif;
  font-size: 2rem;
  text-decoration: none;
  padding: 2rem;
  border-radius: 50%; /* 圆形边框 */
  border: 5px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px; /* 设置宽度和高度，使其成为圆形 */
  height: 150px;
  text-align: center; /* 确保文本在圆形内居中 */
  font-weight:900;
`;

const Showcase = ({ projectId }) => {
  const [showcases, setShowcases] = useState([]);

  useEffect(() => {
    // 使用 fetch 从 Django API 获取 Showcase 数据
    fetch(`https://django-portfolio-k1kg.onrender.com/api/showcases/?project=${projectId}`)
      .then(response => response.json())
      .then(data => setShowcases(data))
      .catch(error => console.error('Error fetching showcases:', error));
  }, [projectId]);

  if (showcases.length === 0) {
    return <div>No showcases available</div>;
  }

  return (
    <>
      {showcases.map((showcase, index) => (
        <ShowcaseWrapper key={index}>
          <ShowcaseContainer>
            <ShowcaseImage
              src={showcase.image}
              alt={`Showcase ${index + 1}`}
              className="showcase-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <Overlay className="overlay">
              {showcase.link && (
                <OverlayText
                  href={showcase.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-text"
                >
                  SHOWCASE
                </OverlayText>
              )}
            </Overlay>
          </ShowcaseContainer>
        </ShowcaseWrapper>
      ))}
    </>
  );
};

export default Showcase;
