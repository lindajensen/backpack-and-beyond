import styled from "styled-components";

export const StyledForm = styled.form`
  /* display: flex;
  flex-direction: column; */

  /* @media (min-width: 900px) {
    flex-direction: row;
    width: 100%;
  } */

  label {
    text-align: left;
    margin-bottom: 0.3rem;
  }

  input[type="email"] {
    /* flex: 2; */
    padding: 0.4rem 0.5rem;
    background-color: transparent;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    /* margin-bottom: 0.5rem; */

    @media (min-width: 900px) {
      margin-bottom: 0;
      margin-right: 0.5rem;
    }
  }

  input[type="submit"] {
    /* flex: 1; */
    padding: 0.4rem 0.5rem;
    background-color: var(--text-color);
    color: #fff;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
  }
`;

export const StyledStatusMessage = styled.p`
  font-style: italic;
`;
