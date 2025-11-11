import styled from "styled-components";

export const StyledNextTripSection = styled.section`
  padding: 1.2rem 1.2rem;
`;

export const StyledNewsletterContent = styled.div`
  h3 {
    margin-bottom: 0.6rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-bottom: 0.6rem;
  }

  input[type="email"] {
    flex: 1;
    padding: 0.4rem 0.5rem;
    background-color: var(--background-color-light);
    line-height: 1.5;
    border: 2px solid #ccc;
    border-radius: var(--border-radius);
    max-width: 430px;
  }

  input[type="submit"] {
    background-color: var(--background-color-dark);
    color: var(--background-color-light);
    padding: 0.625rem 1.875rem;
    border-radius: var(--border-radius);
    font-weight: 600;
    border: none;
  }

  @media (min-width: 500px) {
    form {
      flex-direction: row;
    }
  }
`;
