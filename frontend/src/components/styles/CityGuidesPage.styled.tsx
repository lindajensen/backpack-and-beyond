import styled from "styled-components";

export const StyledCityGuidesPageSection = styled.section`
  padding: 1.2rem 1.2rem;

  h1 {
    margin-bottom: 0.8rem;
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 0.8rem;
  }

  li {
    width: 100%;
    /* max-width: 37.5rem; */
    text-align: center;
  }

  li a {
    display: block;
    padding: 0.938rem;
    border: 2px solid var(--background-color-dark);
    border-radius: var(--border-radius);
  }

  li a:hover {
    background-color: var(--background-color-dark);
    color: #fff;
  }
`;
