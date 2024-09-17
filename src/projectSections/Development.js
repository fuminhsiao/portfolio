import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { PageTitleWrapper, Container, FullScreenImage, FullScreenOverlay, PageTitle, TextBlock, TextTitle } from "../styles/Typography";

const StyledMotionDiv = styled(motion.div)`
  position: relative;
  width: 100%;
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1024px;
  height: 100vh;
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

const LinkBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10px;
`;

const LinkItem = styled.a`
  font-size: 1.5rem;
  color: #0066cc;
  margin-right: 15px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Development = ({ projectId }) => {
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

  const developmentPage = pageData.find((page) => page.title === "Development");

  if (developmentPage && developmentPage.text_layers.length > 0) {
    return (
      <StyledMotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >          
        <PageTitleWrapper><PageTitle>{developmentPage.title}</PageTitle></PageTitleWrapper>

        <Container key="all-text-layers">
  <ContentBlock>
    {developmentPage.text_layers.map((textLayer, index) => (
      <TextBlock key={`text-layer-${index}`}>
        {textLayer.title && <TextTitle>{textLayer.title}</TextTitle>}
        {textLayer.text}
      </TextBlock>
    ))}
  </ContentBlock>
</Container>

        {/* Image layers with links */}
        {developmentPage.image_layers.slice(0, 4).map((imageLayer, index) => (
          <Container key={`image-layer-${index}`}>
            <ContentBlock>
              <TextBlock>
                {imageLayer.title && <TextTitle>{imageLayer.title}</TextTitle>}
                {imageLayer.text}
              </TextBlock>
              <ImageWrapper>
                <ImageBlock onClick={() => setFullScreenImage(imageLayer.image)}>
                  <img src={imageLayer.image} alt={imageLayer.alt_text} />
                </ImageBlock>
                <ImageOverlay />
              </ImageWrapper>
              <LinkBlock>
                {imageLayer.links.map((link, linkIndex) => (
                  <LinkItem key={linkIndex} href={link.url} target="_blank">
                    {link.title}
                  </LinkItem>
                ))}
              </LinkBlock>
            </ContentBlock>
                    {/* Full-screen image overlay */}
        {fullScreenImage && (
          <FullScreenOverlay onClick={() => setFullScreenImage(null)}>
            <FullScreenImage src={fullScreenImage} />
          </FullScreenOverlay>
        )}
          </Container>
        ))}


      </StyledMotionDiv>
    );
  }

  return <div>This page does not match Development</div>;
};

export default Development;
