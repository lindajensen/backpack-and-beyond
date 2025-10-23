import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

function CityGuideDetailsPage() {
  const { slug } = useParams();
  const [city, setCity] = useState<City | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/cities/${slug}`)
      .then((response) => response.json())
      .then((data: City) => {
        setCity(data);
        console.log(data);
      })
      .catch((error: unknown) => console.log("Error loading city", error));
  }, [slug]);

  if (!city) {
    return <p>We tried to find this place, but even the GPS gave up.</p>;
  }

  return (
    <StyledCityGuideDetailsSection>
      <StyledHeroImage src={`http://localhost:8080/${city.image}`} alt="" />

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
