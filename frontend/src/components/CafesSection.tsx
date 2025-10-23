import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CityWithLocations, Location } from "../types";

import {
  StyledLocationsSection,
  StyledFallbackMessage,
  StyledLocationDetails,
} from "./styles/Locations.styled";

function CafeSection() {
  const { slug } = useParams();
  const [city, setCity] = useState<CityWithLocations | null>(null);
  const [cafes, setCafes] = useState<Location[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/cities/${slug}`)
      .then((response) => response.json())
      .then((data: CityWithLocations) => {
        setCity(data);

        const filteredCafes = data.locations.filter(
          (location) => location.type === "café"
        );

        setCafes(filteredCafes);
      })
      .catch((error: unknown) => console.log("Error loading city", error));
  }, [slug]);

  if (!city) {
    return <p>We tried to find this place, but even the GPS gave up.</p>;
  }

  return (
    <StyledLocationsSection id="cafes">
      <h2>Cafés</h2>

      {cafes.length === 0 ? (
        <StyledFallbackMessage>
          No coffee spots in sight. Better start boiling water in the hotel
          kettle.
        </StyledFallbackMessage>
      ) : (
        <ul>
          {cafes.map((cafe) => (
            <li key={cafe.id}>
              <article>
                <div>
                  <img
                    src={`http://localhost:8080/${cafe.image}`}
                    alt={cafe.name}
                  />
                </div>

                <StyledLocationDetails>
                  <h3>{cafe.name}</h3>
                  <p>{cafe.address}</p>
                  <p>{cafe.description}</p>

                  <a href={cafe.link} target="_blank" rel="noopener noreferrer">
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

export default CafeSection;
