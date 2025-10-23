import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledAboutPageSection = styled.section`
  header {
    background-color: var(--background-color-dark);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 25vh;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  article {
    padding: 0 1.2rem;
    margin-bottom: 1rem;

    @media (min-width: 1201px) {
      padding: 1.2rem 0;
    }
  }

  h2 {
    margin-bottom: 0.5rem;
  }
`;

export const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.2rem 1.2rem;

  p {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 2rem;

    img {
      max-width: 25rem;
    }

    div {
      flex: 1;
    }
  }

  @media (min-width: 1201px) {
    padding: 1.2rem 0;
  }

  ol {
    list-style: none;
    counter-reset: steps;
  }

  ol li {
    counter-increment: steps;
    margin-bottom: 0.4rem;
  }

  ol li::before {
    content: counter(steps);
    margin-right: 0.5rem;
    background: var(--primary-color);
    color: var(--background-color-dark);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: inline-grid;
    place-items: center;
    line-height: 1.2rem;
  }
`;

export const StyledBlogCTA = styled.article`
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 12.5rem;
  margin-bottom: 1rem;

  h2 {
    margin-top: 0.5rem;
  }
`;

export const StyledBlogLink = styled(Link)`
  display: inline-block;
  margin: 1rem auto;
  padding: 0.625rem 1.875rem;
  border-radius: 0.5rem;
  background-color: #fff;
  font-weight: 600;

  &:hover {
  }
`;

export const StyledSocials = styled.article`
  margin-top: 0.5rem;
  ul {
    display: flex;
    gap: 1.25rem;
    margin-top: 1rem;
  }
`;
