import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FullScreenImage, FullScreenOverlay, Container, PageTitle, PageTitleWrapper, TextTitle } from "../styles/Typography";
import { motion } from "framer-motion";

const StyledMotionDiv = styled(motion.div)`
  position: relative;
  width: 100%;
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  width: 1024px;
`;

const TextBlock = styled(motion.div)`
  width: 50%;
  font-family: "Muli", sans-serif;
  font-size: 1.3rem;
  font-weight: 300;
  color: #000;
  line-height: normal;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const ImageBlock = styled(motion.img)`
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  cursor: pointer;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: opacity 0.3s ease;
  z-index: 1;
  pointer-events: none;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center; /* Ensure that the image is centered */

  &:hover ${ImageBlock} {
    opacity: 1;
  }

  &:hover ${ImageOverlay} {
    opacity: 0;
  }
`;

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger the appearance of each child
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    x: -100, // Start off-screen to the left
  },
  visible: {
    opacity: 1,
    x: 0, // Animate to the original position
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const GatherData = ({ projectId }) => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  useEffect(() => {
    if (projectId) {
      fetch(`https://django-portfolio-k1kg.onrender.com/api/pages/?project=${projectId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch page data");
          }
          return response.json();
        })
        .then((data) => {
          setPageData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [projectId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!pageData || pageData.length === 0) {
    return <div>No content available</div>;
  }

  const gatherDataPage = pageData.find((page) => page.title === "Gather Data");

  if (gatherDataPage) {
    return (
      <StyledMotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <PageTitleWrapper>
          <PageTitle variants={textVariants}>{gatherDataPage.title}</PageTitle>
        </PageTitleWrapper>
        {gatherDataPage.text_layers.map((layer, index) => {
          const imageLayer = gatherDataPage.image_layers[index];

          return (
            <Container key={index}>
              <ContentBlock>
                <TextBlock variants={textVariants}>
                  {layer.title && <TextTitle variants={textVariants}>{layer.title}</TextTitle>}
                  {layer.text}
                </TextBlock>
                {imageLayer && (
                  <ImageWrapper>
                    <ImageBlock
                      variants={textVariants}
                      src={imageLayer.image}
                      alt={imageLayer.alt_text}
                      onClick={() => setFullScreenImage(imageLayer.image)}
                    />
                    <ImageOverlay />
                  </ImageWrapper>
                )}
              </ContentBlock>
              {fullScreenImage && (
          <FullScreenOverlay onClick={() => setFullScreenImage(null)}>
            <FullScreenImage src={fullScreenImage} />
          </FullScreenOverlay>
        )}
            </Container>
          );
        })}


      </StyledMotionDiv>
    );
  }

  return <div>This page does not match Gather Data</div>;
};

export default GatherData;
