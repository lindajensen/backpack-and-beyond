import styled from "styled-components";

export const StyledContactSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.2rem 1.2rem;

  p {
    margin-bottom: 20px;
  }
`;

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;

  input[type="text"] {
    padding: 8px;
    margin-bottom: 10px;
  }

  input[type="submit"] {
    align-self: flex-end;
    padding: 0.625rem 1rem;
    margin-top: 10px;
    background-color: var(--text-color);
    color: #fff;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
  }
`;

export const StyledNameFieldsWrapper = styled.div`
  display: flex;
  gap: 10px;

  div {
    width: 100%;
  }

  input[type="text"] {
    width: 100%;
  }
`;
