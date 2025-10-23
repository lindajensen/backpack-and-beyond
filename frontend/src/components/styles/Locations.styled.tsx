import styled from "styled-components";

export const StyledFallbackMessage = styled.p`
  font-style: italic;
  color: var(--muted-color);
  text-align: center;
  margin-bottom: 0.6rem;
`;

export const StyledLocationsSection = styled.section`
  padding: 1.2rem 1.2rem;

  h2 {
    margin-bottom: 0.8rem;
  }

  li {
    margin-bottom: 1.5rem;
  }

  article {
    text-align: left;
  }
`;

export const StyledLocationDetails = styled.div`
  h3 {
    margin-top: 0.5rem;
  }
  // Location address
  p:nth-child(2) {
    margin-top: 0.2rem;
    margin-bottom: 0.6rem;
  }

  // Location description
  p:nth-child(3) {
    margin-bottom: 1rem;
  }

  a {
    padding: 0.5rem 0.625rem;
    border: 1px solid var(--background-color-dark);
    border-radius: var(--border-radius);
  }
`;
