import React, { PropsWithChildren } from "react";
import { Header, Footer } from ".";
import styled from "@emotion/styled";
import { widths, unit } from "../styles";

interface LayoutProps {
  fullWidth?: boolean;
  grid?: boolean;
}

/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */
const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  fullWidth,
  children,
  grid,
}) => {
  return (
    <>
      <Header />
      <PageContainer fullWidth={fullWidth} grid={grid}>
        {children}
      </PageContainer>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default Layout;

/** Layout styled components */
const PageContainer = styled.div<LayoutProps>`
  display: flex;
  justify-content: ${({ grid }) => (grid ? "center" : "top")};
  flex-direction: ${({ grid }) => (grid ? "row" : "column")};
  flex-wrap: wrap;
  align-self: center;
  flex-grow: 1;
  max-width: ${({ fullWidth }) =>
    fullWidth ? undefined : `${widths.regularPageWidth}px`};
  width: 100%;
  padding: ${({ fullWidth }) => (fullWidth ? 0 : `${unit * 2}px`)};
  padding-bottom: unit * 5;
  height: calc(
    75vh - 75px
  ); /* Adjust the height according to your header and footer height */
  overflow-y: auto;
`;
