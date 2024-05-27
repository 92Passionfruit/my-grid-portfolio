import React, { useState } from "react";
import styled from "@emotion/styled";
import { colors, mq } from "../styles";

interface Reflection {
  id: string;
  blocker: string;
  process: string | null;
  solution: string;
}

interface Project {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  developmentTools: string;
  developmentMonth: string;
  developmentYear: number;
  link: string;
  reflection: Reflection;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isReflectionOpen, setIsReflectionOpen] = useState(false);

  const toggleReflection = () => {
    setIsReflectionOpen(!isReflectionOpen);
  };

  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src={project.thumbnail} alt={`${project.title} thumbnail`} />
      </CardImageContainer>
      <DevelopmentDate>
        Developed {project.developmentMonth}, {project.developmentYear}
      </DevelopmentDate>
      <CardContent>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <DevelopmentInfo>
          <DevelopmentTools>{project.developmentTools}</DevelopmentTools>
        </DevelopmentInfo>
      </CardContent>
      <CardFooter>
        <ReflectionLink onClick={toggleReflection}>
          View Reflection{" "}
          {isReflectionOpen ? <CaretUp>▴</CaretUp> : <CaretDown>▾</CaretDown>}
        </ReflectionLink>
        {project.id === "project_06" ? (
          <StyledText>{project.link}</StyledText>
        ) : (
          <CardLink
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </CardLink>
        )}
      </CardFooter>
      {isReflectionOpen && (
        <ReflectionContent>
          <p>Blocker: {project.reflection.blocker}</p>
          <p>Process: {project.reflection.process}</p>
          <p>Solution: {project.reflection.solution}</p>
        </ReflectionContent>
      )}
    </CardContainer>
  );
};

export default ProjectCard;

/** Project Card styled components */
const CardContainer = styled.div({
  borderRadius: 6,
  color: "#202020",
  backgroundSize: "cover",
  backgroundColor: "white",
  boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.15)",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [mq[0]]: {
    width: "90%",
  },
  [mq[1]]: {
    width: "47%",
  },
  [mq[2]]: {
    width: "31%",
  },
  height: 380,
  margin: 10,
  overflow: "hidden",
  position: "relative",
});

const CardContent = styled.div({
  padding: 18,
  paddingTop: 6,
});

const CardTitle = styled.h3({
  textAlign: "center",
  fontSize: "1.4em",
  lineHeight: "1em",
  fontWeight: 700,
  marginBottom: "0.5em",
});

const CardDescription = styled.p({
  textAlign: "center",
  marginBottom: "1em",
  fontSize: "0.9em",
});

const DevelopmentInfo = styled.div({
  textAlign: "center",
});

const DevelopmentTools = styled.p({
  fontSize: "0.75em",
  fontStyle: "italic",
  margin: "0",
});

const DevelopmentDate = styled.p({
  fontSize: "0.7em",
  margin: "0",
  padding: "0.3em",
  alignSelf: "flex-end",
  opacity: 0.7,
});

const CardImageContainer = styled.div({
  height: 220,
  position: "relative",
  background: "#CECD97",
  overflow: "hidden",
  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const CardImage = styled.img({
  objectFit: "cover",
  objectPosition: "center",
  width: "100%",
  height: "100%",
  filter: "grayscale(60%)",
});

const StyledText = styled.div({
  color: "#BA6C6E",
  textDecoration: "none",
  fontSize: "0.9em",
  cursor: "pointer",
});

const CardFooter = styled.div({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 1em",
  paddingBottom: "0.5em",
});

const CardLink = styled.a({
  textDecoration: "underline",
  color: "blue",
  fontSize: "0.9em",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#0D98BA",
  },
  cursor: "pointer",
});

const ReflectionLink = styled.a({
  color: "#202020",
  textDecoration: "none",
  fontSize: "0.9em",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#BA6C6E",
  },
  cursor: "pointer",
});

const ReflectionContent = styled.div({
  padding: "0 18px",
  fontSize: "10px",
});

const CaretUp = styled.span({
  fontSize: "22px",
});
const CaretDown = styled.span({
  fontSize: "16px",
});
