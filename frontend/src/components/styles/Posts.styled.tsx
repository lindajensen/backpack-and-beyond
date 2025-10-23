import styled from "styled-components";

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

  h2 {
    font-family: var(--font-family-headings);
    white-space: nowrap;
    margin: 0;
  }
`;

export const StyledPostSection = styled.section`
  padding: 1.2rem 1.2rem;
`;

export const StyledPostList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.25rem;
`;

export const StyledPostCard = styled.article`
  position: relative;
  height: 30rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  color: #fff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  div {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 2;

    span {
      background-color: #fff;
      color: #161110;
      padding: 0.25rem 0.625rem;
      border-radius: var(--border-radius);
    }

    h3 {
      font-family: var(--font-family-base);
      margin-top: 1.3rem;
    }

    small {
      margin-bottom: 0.7rem;
    }
  }
`;

export const StyledSeeAllLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  gap: 0.4rem;

  svg {
    position: relative;
    top: 3px;
  }
`;
