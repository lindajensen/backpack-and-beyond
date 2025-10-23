// CarouselWrapper.tsx
import styled from "styled-components";

export const StyledCarouselWrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
  overflow: hidden;
  /* padding: 0 1.2rem; */

  .carousel-cell {
    position: relative;
    width: 250px;
    height: 400px;
    border-radius: var(--border-radius);
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 1rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0.8rem;
      /* background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent); */
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      background-color: var(--background-color-dark);
    }

    .overlay h3 {
      /* margin: 0; */
    }

    .overlay p {
      /* margin: 0; */
    }
  }
`;

export const StyledCarouselHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  .custom-arrows {
    display: flex;
    gap: 0.4rem;

    button {
      /* width: 35px;
      height: 35px;
      border-radius: 50%;
      border: 1px solid var(--border-color); */
      border: none;
      background: transparent;
      color: var(--text-color);
      cursor: pointer;
      /* display: flex;
      align-items: center;
      justify-content: center; */

      svg {
        vertical-align: bottom;
        margin-top: 8px;
      }
    }
  }
`;
