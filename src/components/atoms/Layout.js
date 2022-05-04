import React from "react";
import { ThemeProvider } from "styled-components";
// import "typeface-ubuntu";
// import "typeface-roboto";
import GlobalStyles from "../../foundation/globalStyles";
import theme from "../../theme";
import Header from "../organisms/Header"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <>
        <Header />
          {children}
        </>
      </ThemeProvider>
    </>
  );
};

export default Layout;
