import styled from "styled-components";

export const StyledHero = styled.section`
  position: relative;
  height: 100vh;
  background-image: url("/public/images/hero-img.webp");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  z-index: 0;

  div:first-of-type {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  div:last-of-type {
    position: relative;
    z-index: 2;
    max-width: 50rem;
    padding: 2rem;

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-family: var(--font-family-headings);
    }

    p {
      font-size: 1.2rem;
      font-family: var(--font-family-base);
    }
  }
`;
