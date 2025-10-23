import styled from "styled-components";

export const StyledArticleDetailsSection = styled.section`
  max-width: 43.75rem;
  margin: 0 auto;
  padding: 1.2rem 1.2rem;

  h1 {
    text-align: center;
    margin-block: 1rem;
    font-size: 2rem;
    font-family: var(--font-family-headings);
  }

  p:nth-child(2) {
    font-weight: 500;
  }

  img {
    width: 100%;
    display: block;
    margin: 1.2rem 0;
  }

  h3 {
    margin-top: 1rem;
  }

  // created_at
  p:last-child {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: var(--muted-color);
    text-align: right;
    font-style: italic;
  }
`;
