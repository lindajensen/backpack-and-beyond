import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CityWithLocations, Location } from "../types";

import {
  StyledLocationsSection,
  StyledFallbackMessage,
  StyledLocationDetails,
} from "./styles/Locations.styled";

function BarsSection() {
  const { slug } = useParams();
  const [city, setCity] = useState<CityWithLocations | null>(null);
  const [bars, setBars] = useState<Location[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/cities/${slug}`)
      .then((response) => response.json())
      .then((data: CityWithLocations) => {
        setCity(data);

        const filteredBars = data.locations.filter(
          (location) => location.type === "bar"
        );

        setBars(filteredBars);
      })
      .catch((error: unknown) => console.log("Error loading city", error));
  }, [slug]);

  if (!city) {
    return <p>We tried to find this place, but even the GPS gave up.</p>;
  }

  return (
    <StyledLocationsSection id="bars">
      <h2>Bars & Nightlife</h2>

      {bars.length === 0 ? (
        <StyledFallbackMessage>
          No bars in sight, so either this place is super chill or we took a
          wrong turn.
        </StyledFallbackMessage>
      ) : (
        <ul>
          {bars.map((bar) => (
            <li key={bar.id}>
              <article>
                <div>
                  <img
                    src={`http://localhost:8080/${bar.image}`}
                    alt={bar.name}
                  />
                </div>

                <StyledLocationDetails>
                  <h3>{bar.name}</h3>
                  <p>{bar.address}</p>
                  <p>{bar.description}</p>

                  <a href={bar.link} target="_blank" rel="noopener noreferrer">
                    Visit website
                  </a>
                </StyledLocationDetails>
              </article>
            </li>
          ))}
        </ul>
      )}
    </StyledLocationsSection>
  );
}

export default BarsSection;
