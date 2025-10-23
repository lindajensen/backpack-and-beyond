import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";

import {
  StyledHeader,
  StyledNavContainer,
  StyledLogo,
  StyledHamburgerWrapper,
  StyledNavLinks,
} from "./styles/Navbar.styled";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <StyledHeader>
        <StyledNavContainer>
          <StyledLogo>
            <Link
              aria-label="Return to DevAcademy homepage"
              onClick={() => setIsOpen(false)}
              to="/"
            >
              Backpack & Beyond
            </Link>
          </StyledLogo>

          <StyledHamburgerWrapper>
            <Hamburger
              aria-expanded={isOpen}
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              toggled={isOpen}
              toggle={setIsOpen}
            />
          </StyledHamburgerWrapper>

          <StyledNavLinks $isOpen={isOpen}>
            <Link to="/city-guides" onClick={() => setIsOpen(false)}>
              City Guides
            </Link>

            <Link to="/articles" onClick={() => setIsOpen(false)}>
              Articles
            </Link>

            <Link to="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </StyledNavLinks>
        </StyledNavContainer>
      </StyledHeader>
    </>
  );
}

export default Navbar;
