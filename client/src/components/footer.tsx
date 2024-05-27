import React from "react";
import styled from "@emotion/styled";
import { colors, ApolloIcon } from "../styles";
import { SocialIcon } from "react-social-icons";

/**
 * Footer is useless component to make our app look a little closer to a real website!
 */
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <a href="https://au.linkedin.com/in/sarah-borracci-1b68442b2">
        <SocialIcon url="www.linkedin.com" />
        &nbsp; Visit my LinkedIn profile
      </a>
      &nbsp; &nbsp; &nbsp;
      <a href="https://github.com/92Passionfruit">
        <SocialIcon url="www.github.com" />
        &nbsp; Check me out on GitHub
      </a>
    </FooterContainer>
  );
};

export default Footer;

/** Footer styled components */
const FooterContainer = styled.footer({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  color: "#717035",
  height: "7rem",
  padding: "1rem",
  backgroundColor: "white",
  borderTop: "solid 3px #717035",
  textDecoration: "none",
  fontSize: "1.5rem",
  transition: "color 0.3s ease",
  "& > a": {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      fontWeight: "bold",
    },
    cursor: "pointer",
  },
  "@media (max-width: 768px)": {
    fontSize: "1.5rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "0",
  },
});
