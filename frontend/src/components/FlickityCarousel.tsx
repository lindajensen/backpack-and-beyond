import { useRef } from "react";
import Flickity from "react-flickity-component";

import { Slide, FlickityCarouselProps } from "../types";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import {
  StyledCarouselWrapper,
  StyledCarouselHeader,
} from "./styles/FlickityCarousel.styled";

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  contain: true,
  cellAlign: "left",
  groupCells: true,
};

function FlickityCarousel({ slides }: FlickityCarouselProps) {
  const ref = useRef<any>(null);
  // const ref = React.useRef<null>(null);

  function handlePrev() {
    ref.current.previous();
  }

  function handleNext() {
    ref.current.next();
  }

  return (
    <StyledCarouselWrapper>
      <StyledCarouselHeader>
        <h2>What I'm Excited About</h2>
        <div className="custom-arrows">
          {/* <button onClick={handlePrev}>‹</button>
          <button onClick={handleNext}>›</button> */}
          <button onClick={handlePrev}>
            <FaArrowCircleLeft size={30} />
          </button>
          <button onClick={handleNext}>
            <FaArrowCircleRight size={30} />
          </button>
        </div>
      </StyledCarouselHeader>

      <Flickity
        flickityRef={(c) => (ref.current = c)}
        className="carousel"
        elementType="div"
        options={flickityOptions}
        disableImagesLoaded
        reloadOnUpdate
        static
      >
        {slides.map((slide, index) => (
          <div className="carousel-cell" key={index}>
            <img src={slide.mainImage.asset.url} alt={slide.mainImage.alt} />
            <div className="overlay">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </Flickity>
    </StyledCarouselWrapper>
  );
}

export default FlickityCarousel;
