import styled from "styled-components";

export const StyledHighlightBarSection = styled.section`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem;
  margin-left: 0.8rem;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  article {
    flex: 0 0 auto;
    scroll-snap-align: start;
    padding: 0.5rem 1rem;
    background-color: #fff;
    background-color: var(--background-color-dark);
    color: #fff;
    border-radius: var(--border-radius);
    min-width: 10rem;
    font-weight: 600;
    white-space: nowrap;
    text-align: center;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;

    /* &:hover {
      transform: translateY(-2px);
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
    } */

    a {
      /* Detta eller annan färg? */
      &:hover {
        text-decoration: underline;
        text-underline-offset: 6px;
      }

      &:visited {
        color: inherit;
      }
    }
  }
`;
