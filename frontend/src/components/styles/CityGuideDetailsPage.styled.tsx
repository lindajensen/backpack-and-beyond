import styled from "styled-components";

export const StyledCityGuideDetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;

  h1 {
    margin-top: 1rem;
  }

  p {
    max-width: 100ch;
  }
`;

export const StyledHeroImage = styled.img`
  border-radius: 0;
`;

export const StyledCityHeader = styled.div`
  padding: 1.2rem 1.2rem;
`;

export const StyledAnchorLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
  margin-block: 1rem;

  a {
    border: 1px solid var(--background-color-dark);
    padding: 0.4rem 0.8rem;
    border-radius: var(--border-radius);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }
`;
