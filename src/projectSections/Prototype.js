import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { PageTitle, PageTitleWrapper, TextTitle, FullScreenImage, FullScreenOverlay, Container } from "../styles/Typography";

const StyledMotionDiv = styled(motion.div)`
  position: relative;
  width: 100%;
`;

const ContentBlock = styled(motion.div)`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  gap: 20px;
`;

const TextBlock = styled(motion.div)`
  display: flex;
  flex-direction: column;
  font-family: "Muli", sans-serif;
  font-size: 1.3rem;
  font-weight: 300;
  color: #000;
  flex: 1;
  text-align: left;
`;

const ImageBlock = styled(motion.img)`
  width: 100%;
  max-width: 500px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  opacity: 0.5;
  transition: opacity 0.3s ease;
  cursor: pointer;
`;

const ImageBlockFullWidth = styled(motion.img)`
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  opacity: 0.5;
  transition: opacity 0.3s ease;
  cursor: pointer;
`;

const ImageOverlay = styled(motion.div)`
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
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '40%')};
  max-width: ${({ fullWidth }) => (fullWidth ? 'none' : '500px')};
  display: flex;
  justify-content: center;

  &:hover ${ImageBlock}, &:hover ${ImageBlockFullWidth} {
    opacity: 1;
  }

  &:hover ${ImageOverlay} {
    opacity: 0;
  }
`;

const LinkBlock = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 10px;
`;

const LinkItem = styled(motion.a)`
  font-size: 1.3rem;
  color: #0066cc;
  margin-right: 15px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const containerVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.3 },
  },
};

const Prototype = ({ projectId }) => {
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

  const prototypePage = pageData.find((page) => page.title === "Prototype");

  if (prototypePage && prototypePage.image_layers.length >= 2) {
    const firstImageLayer = prototypePage.image_layers[0];
    const secondImageLayer = prototypePage.image_layers[1];

    return (
      <StyledMotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <PageTitleWrapper><PageTitle>{prototypePage.title}</PageTitle></PageTitleWrapper>

          <Container>
            <ContentBlock>
              <TextBlock>
                {firstImageLayer.title && <TextTitle>{firstImageLayer.title}</TextTitle>}
                {firstImageLayer.text}
              </TextBlock>
              
              <ImageWrapper>
                <ImageBlock
                  src={firstImageLayer.image}
                  alt={firstImageLayer.alt_text}
                  onClick={() => setFullScreenImage(firstImageLayer.image)}
                />
                <ImageOverlay />
              </ImageWrapper>
            </ContentBlock>
            {fullScreenImage && (
            <FullScreenOverlay onClick={() => setFullScreenImage(null)}>
              <FullScreenImage src={fullScreenImage} />
            </FullScreenOverlay>
          )}
          </Container>

          <Container>
            <ContentBlock reverse>
              <ImageWrapper fullWidth>
                <ImageBlockFullWidth
                  src={secondImageLayer.image}
                  alt={secondImageLayer.alt_text}
                  onClick={() => setFullScreenImage(secondImageLayer.image)}
                />
                <ImageOverlay />
              </ImageWrapper>
              <TextBlock>
                {secondImageLayer.title && <TextTitle>{secondImageLayer.title}</TextTitle>}
                {secondImageLayer.text}
                <LinkBlock>
                  {secondImageLayer.links.map((link, linkIndex) => (
                    <LinkItem key={linkIndex} href={link.url} target="_blank">
                      {link.title}
                    </LinkItem>
                  ))}
                </LinkBlock>
              </TextBlock>
            </ContentBlock>
            {fullScreenImage && (
            <FullScreenOverlay onClick={() => setFullScreenImage(null)}>
              <FullScreenImage src={fullScreenImage} />
            </FullScreenOverlay>
          )}
          </Container>


      </StyledMotionDiv>
    );
  }

  return <div>This page does not match Prototype</div>;
};

export default Prototype;
