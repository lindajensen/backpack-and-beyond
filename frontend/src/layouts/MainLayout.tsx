import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

import { StyledWrapper } from "../components/styles/Wrapper.styled";

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <StyledWrapper>
        <Navbar />
        <Outlet />
        <Footer />
      </StyledWrapper>
    </>
  );
}

export default MainLayout;
