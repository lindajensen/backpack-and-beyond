import styled from "styled-components";

export const StyledBlogPostsSection = styled.section`
  margin-top: 1.5rem;
`;

export const StyledBlogList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.25rem;
`;

export const StyledBlogCard = styled.article`
  position: relative;
  height: 30px;
  border-radius: 0.75rem;
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
