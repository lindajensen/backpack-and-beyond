import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: MySignature;
    src: url("/fonts/DarlingtonDemo-z8xjG.ttf");
  }

  @font-face {
    font-family: "ShelmaAndHugie";
    src: url('/fonts/ShelmaAndHugie-51888.ttf') format('truetype');
  }

:root {
  --background-color-light: #f3f2ec;
  --background-color-dark: #25292b;
  --primary-color:  #f4c542;
  /* --secondary-color: #4a90e2; */
  --accent-color: #204e4b;
  --border-color: #a69f94;
  --text-color: #161110;
  --muted-color: #777;
  --border-radius: 4px;
  --font-family-headings: "Playfair Display", serif;
  --font-family-subheadings: "Montserrat", sans-serif;;
  --font-family-body: "Open Sans", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  color: var(--text-color);
  background-color: var(--background-color-light);
  font-family: var(--font-family-body);
  font-size: 0.9rem;
  line-height: 1.5;
}

img {
	max-width: 100%;
	display: block;
  border-radius: var(--border-radius);
}

h1 {
  font-size: 2rem;
  font-family: var(--font-family-headings);
}

h2 {
  font-size: 1.6rem;
  font-family: var(--font-family-headings);
}

h3, h4 {
  font-family: var(--font-family-subheadings);
}

a {
    font-family: var(--font-family-body);
    text-decoration: none;
    font-size: 0.9rem;
    color: var(--text-color);
  }

  a:visited {
    color: inherit;
  }

  ul {
    list-style-type: none;
  }

`;

export const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1rem;

  &::after {
    content: "";
    flex-grow: 1;
    height: 1px;
    background-color: #ccc;
  }

  h1 {
    font-family: var(--font-family-base);
    white-space: nowrap;
    margin: 0;
  }
`;

export const StyledFormWrapper = styled.div`
  /* margin: 0 auto;

  @media (min-width: 900px) {
    margin: 0;
  } */
`;
