import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledAboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1.2rem 1.2rem;
  margin-top: 1rem;

  div:first-child {
    width: 100%;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;

    div:first-child {
      flex: 0 0 23.75rem;
    }

    div:last-child {
      flex: 1;
      text-align: left;
    }
  }
`;

export const StyledCTALink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.625rem 1.875rem;
  background-color: var(--primary-color);
  border: 1px solid transparent;
  border-radius: var(--border-radius);
`;
