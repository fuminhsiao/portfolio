import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Container, PageTitle, PageTitleWrapper, TextBlock, TextTitle } from "../styles/Typography";

const StyledMotionDiv = styled(motion.div)`
  width: 100%;
`;

const ContentBlock = styled.div`
  width: 1024px;
  margin: 0 auto; /* Center the block */
  display: flex;
  flex-direction: column;
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

const DefineProblem = ({ projectId }) => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <div>No text layers available</div>;
  }

  const defineProblemPage = pageData.find((page) => page.title === "Define Problems");

  if (defineProblemPage) {
    return (
      <StyledMotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <PageTitleWrapper>
          <PageTitle variants={textVariants}>{defineProblemPage.title}</PageTitle>
        </PageTitleWrapper>
          <Container justifyContent="center">
          <ContentBlock>

            {defineProblemPage.text_layers.map((layer, index) => (
              <motion.div key={index} variants={textVariants}>
                {layer.title && (
                  <TextTitle variants={textVariants}>{layer.title}</TextTitle>
                )}
                <TextBlock variants={textVariants}>{layer.text}</TextBlock>
              </motion.div>
            ))}
                    </ContentBlock>

          </Container>
      </StyledMotionDiv>
    );
  }

  return <div>This page does not match Define Problem</div>;
};

export default DefineProblem;
