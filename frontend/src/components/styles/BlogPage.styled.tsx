import styled from "styled-components";

export const StyledBlogSearchSection = styled.section`
  text-align: center;
  padding: 1.2rem 1.2rem;

  h1 {
    margin-bottom: 1rem;
    font-family: var(--font-family-headings);
  }

  form input {
    margin-right: 0.5rem;
    margin-top: 1rem;
  }

  input[type="text"] {
    padding: 0.625rem 1rem;
    background-color: transparent;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
  }

  input[type="submit"] {
    padding: 0.625rem 1rem;
    background-color: var(--text-color);
    color: #fff;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
  }
`;
