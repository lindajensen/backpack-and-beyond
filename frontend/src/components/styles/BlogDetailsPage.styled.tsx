import styled from "styled-components";

export const StyledBlogDetailsSection = styled.section`
  max-width: 43.75rem;
  margin: 0 auto;
  padding: 1.2rem 1.2rem;

  h1 {
    text-align: center;
    margin-top: 1rem;
    font-size: 2rem;
    font-family: var(--font-family-headings);
  }

  p:last-child {
    margin-top: 2rem;
    font-size: 0.9rem;
    color: var(--muted-color);
    text-align: right;
    font-style: italic;
  }
`;

export const StyledQuoteWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledBlockquote = styled.blockquote`
  position: relative;
  font-family: "Playfair Display", serif;
  font-weight: 800;
  padding: 1.875rem 1.25rem;
  width: 100%;
  max-width: 43.75rem;
  z-index: 1;
  margin-top: 1.875rem;
  margin-bottom: 3.75rem;
  align-self: center;
  border-top: solid 1px;
  border-bottom: solid 1px;

  &::after {
    content: "”";
    position: absolute;
    font-size: 10rem;
    line-height: 0;
    bottom: -2.125rem;
    right: 1.875rem;
  }

  h2 {
    font-family: var(--font-family-headings);
    position: relative;
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1;
    margin: 0;

    @media (min-width: 600px) {
      font-size: 3.75rem;
    }
  }

  cite {
    display: block;
    position: relative;
    color: #292a2b;
    font-size: 1.4rem;
    font-weight: normal;
    line-height: 1;
    margin: 0;
    padding-top: 1.25rem;
    z-index: 1;
  }
`;

export const StyledPostContent = styled.p`
  margin-bottom: 1rem;
`;

export const StyledSignature = styled.p`
  font-family: "MySignature", cursive;
  font-size: 2.2rem;
  margin-top: 1rem;
`;
