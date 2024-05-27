import React, { PropsWithChildren } from "react";
import { colors, widths } from "../styles";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import logo from "../assets/space_cat_logo.png";

/**
 * Header renders the top navigation
 * for this particular tutorial level, it only holds the home button
 */
const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <HeaderBar>
      <Container>
        <HomeButtonContainer>
          <HomeLink to="/">
            <HomeButton>
              <LogoContainer>
                <Logo src="sarah-beanie-square.png" />
              </LogoContainer>
              <Title>
                <h3>Sarah Borracci</h3>
                <div>Full Stack Developer (in training)</div>
              </Title>
            </HomeButton>
          </HomeLink>
        </HomeButtonContainer>
        {children}
      </Container>
    </HeaderBar>
  );
};

export default Header;

/** Header styled components */
const HeaderBar = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: "solid 3px #717035",
  boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.15)",
  padding: "5px 30px",
  height: 150,
  backgroundColor: "white",
});

const Container = styled.div({
  width: `${widths.regularPageWidth}px`,
});

const HomeLink = styled(Link)({
  textDecoration: "none",
});

const HomeButtonContainer = styled.div({
  display: "flex",
  flex: 1,
});

const HomeButton = styled.div({
  display: "flex",
  flexDirection: "row",
  color: "#717035",
  alignItems: "center",

  cursor: "default",
  // ":hover": {
  //   color: "#BA6C6E",
  // },
});

const LogoContainer = styled.div({ display: "flex", alignSelf: "center" });

const Logo = styled.img({
  height: 120,
  width: 120,
  marginRight: 8,
});

const Title = styled.div({
  display: "flex",
  flexDirection: "column",
  h3: {
    lineHeight: "1em",
    marginBottom: 0,
    fontSize: "2.5em",
  },
  div: {
    fontSize: "1.5em",
    lineHeight: "0.8em",
    paddingLeft: 2,
  },
});
