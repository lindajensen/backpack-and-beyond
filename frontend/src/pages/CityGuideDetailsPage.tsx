import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";

import { City } from "../types";

import AttractionsSection from "../components/AttractionsSection";
import MuseumsSection from "../components/MuseumsSection";
import ParksSection from "../components/ParksSection";
import HotelsSection from "../components/HotelsSection";
import RestaurantsSection from "../components/RestaurantsSection";
import CafeSection from "../components/CafesSection";
import BarsSection from "../components/BarsSection";

import {
  StyledCityGuideDetailsSection,
  StyledHeroImage,
  StyledCityHeader,
  StyledAnchorLinks,
} from "../components/styles/CityGuideDetailsPage.styled";

import { StyledFallbackText } from "../components/styles/Global";

function CityGuideDetailsPage() {
  const { slug } = useParams();
  const [city, setCity] = useState<City | null>(null);

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
          _id,
          name,
          "slug": slug.current,
          country,
          description,
          mainImage {
            asset-> {
              url
            },
            alt
          }
        }`
      )
      .then((data) => setCity(data[0]))
      .catch((error: unknown) => console.log(error));
  }, [slug]);

  if (!city) {
    return (
      <StyledFallbackText>
        We tried to find this place, but even the GPS gave up.
      </StyledFallbackText>
    );
  }

  return (
    <StyledCityGuideDetailsSection>
      <StyledHeroImage
        src={city.mainImage.asset.url}
        alt={city.mainImage.alt}
      />

      <StyledCityHeader>
        <h1>{city.name} City Guide</h1>
        <p>{city.description}</p>
        <StyledAnchorLinks>
          <a href="#attractions">Attractions</a>
          <a href="#museums">Museums</a>
          <a href="#parks">Parks</a>
          <a href="#hotels">Hotels</a>
          <a href="#restaurants">Restaurants</a>
          <a href="#cafes">Cafés</a>
          <a href="#bars">Bars</a>
        </StyledAnchorLinks>
      </StyledCityHeader>

      <AttractionsSection />

      <MuseumsSection />

      <ParksSection />

      <HotelsSection />

      <RestaurantsSection />

      <CafeSection />

      <BarsSection />
    </StyledCityGuideDetailsSection>
  );
}

export default CityGuideDetailsPage;
