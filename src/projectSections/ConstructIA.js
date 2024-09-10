import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FullScreenImage, FullScreenOverlay, Container, PageTitle, PageTitleWrapper, TextBlock, TextTitle } from "../styles/Typography";

const StyledMotionDiv = styled(motion.div)`
  position: relative;
  width: 100%;
`;

const ContentBlock = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 1024px;
`;

const ImageBlock = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
    transition: opacity 0.3s ease;
    z-index: 0; /* Ensure image is behind the overlay */
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  transition: opacity 0.3s ease;
  z-index: 1;
  pointer-events: none;
  opacity: 1; /* Initially, the overlay is visible */
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  &:hover ${ImageBlock} img {
    opacity: 1;
  }

  &:hover ${ImageOverlay} {
    opacity: 0;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ConstructIA = ({ projectId }) => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  useEffect(() => {
    if (projectId) {
      fetch(`/api/pages/?project=${projectId}`)
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

  const constructIAPage = pageData.find((page) => page.title === "Construct IA");

  if (constructIAPage) {
    return (
      <StyledMotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <PageTitleWrapper>
          <PageTitle>{constructIAPage.title}</PageTitle>
        </PageTitleWrapper>

        {constructIAPage.text_layers.map((layer, index) => {
          const imageLayer = constructIAPage.image_layers[index];

          return (
            <Container key={index}>
              <ContentBlock variants={itemVariants}>
                <TextBlock variants={itemVariants}>
                  {layer.title && <TextTitle>{layer.title}</TextTitle>}
                  {layer.text}
                </TextBlock>
                {imageLayer && (
                  <ImageWrapper>
                    <ImageBlock onClick={() => setFullScreenImage(imageLayer.image)}>
                      <img src={imageLayer.image} alt={imageLayer.alt_text} />
                    </ImageBlock>
                    <ImageOverlay />
                  </ImageWrapper>
                )}
              </ContentBlock>        {fullScreenImage && (
          <FullScreenOverlay
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            onClick={() => setFullScreenImage(null)}
          >
            <FullScreenImage src={fullScreenImage} />
          </FullScreenOverlay>
        )}
            </Container>
          );
        })}


      </StyledMotionDiv>
    );
  }

  return <div>This page does not match Construct IA</div>;
};

export default ConstructIA;
