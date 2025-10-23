import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 1.2rem 1.2rem;
`;

export const StyledNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.div`
  a {
    font-family: "ShelmaAndHugie", "Brush Script MT", cursive;
    font-size: 2.6rem;
  }
`;

export const StyledHamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledNavLinks = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  align-items: ${({ $isOpen }) => ($isOpen ? "flex-start" : "center")};
  gap: 1rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 5.4rem;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--background-color-dark);
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    z-index: 999;
  }

  a {
    color: var(--text-color);

    &:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    @media (max-width: 768px) {
      color: #fff;
      font-size: 2.5rem;
      font-weight: 200;

      &:hover {
        text-underline-offset: 12px;
      }
    }
  }

  a:visited {
    color: var(--text-color);

    @media (max-width: 768px) {
      color: #fff;
      font-size: 2.5rem;
      font-weight: 200;
    }
  }
`;
