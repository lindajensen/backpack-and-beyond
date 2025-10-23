import { useState, useEffect } from "react";
import { client } from "../client";

import { NextTripInterface, Slide } from "../types";

import CountDownTimer from "../components/CountDownTimer";
import FlickityCarousel from "../components/FlickityCarousel";
import NewsletterForm from "../components/NewsletterForm";

import { StyledNextTripSection } from "../components/styles/NextTrip.styled";
import { StyledHeading } from "../components/styles/Global";

function NextTrip() {
  const [nextTripSlides, setNextTripSlides] = useState<Slide[]>([]);
  const [nextTripData, setNextTripData] = useState<NextTripInterface | null>(
    null
  );
  // const [nextTripData, setNextTripData] = useState<NextTripInterface[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "nextTrip"] {
          title,
          slug,
          intro,
          departureDate,
          carouselSlides[] {
            title,
            description,
            mainImage {
              asset-> {
                url
              },
              alt
            },
          }
        }`
      )
      .then((data) => {
        setNextTripData(data[0]);
        setNextTripSlides(data[0].carouselSlides);
      });
  }, []);

  if (!nextTripData) {
    return <p>No upcoming trip planned...yet! Check back soon.</p>;
  }

  return (
    <StyledNextTripSection>
      <StyledHeading>
        <h1>{nextTripData.title}</h1>
      </StyledHeading>
      <p>{nextTripData.intro}</p>
      <CountDownTimer departureDate={nextTripData.departureDate} />

      <FlickityCarousel slides={nextTripSlides} />
      {/* <CountDownTimer departureDate={nextTripData.departureDate} /> */}

      <h3>Subscribe to get notified when the story drops</h3>
      <NewsletterForm />
    </StyledNextTripSection>
  );
}

export default NextTrip;
