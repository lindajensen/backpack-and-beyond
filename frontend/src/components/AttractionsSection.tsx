import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CityWithLocations, Location } from "../types";

import {
  StyledLocationsSection,
  StyledFallbackMessage,
  StyledLocationDetails,
} from "./styles/Locations.styled";

function AttractionsSection() {
  const { slug } = useParams();
  const [city, setCity] = useState<CityWithLocations | null>(null);
  const [attractions, setAttractions] = useState<Location[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/cities/${slug}`)
      .then((response) => response.json())
      .then((data: CityWithLocations) => {
        setCity(data);

        const filteredAttractions = data.locations.filter(
          (location) => location.type === "attraction"
        );

        setAttractions(filteredAttractions);
      })
      .catch((error: unknown) => console.log("Error loading city", error));
  }, [slug]);

  if (!city) {
    return <p>We tried to find this place, but even the GPS gave up.</p>;
  }

  return (
    <StyledLocationsSection id="attractions">
      <h2>Attractions</h2>

      {attractions.length === 0 ? (
        <StyledFallbackMessage>
          No attractions found. Maybe getting lost in the streets is the
          attraction.
        </StyledFallbackMessage>
      ) : (
        <ul>
          {attractions.map((attraction) => (
            <li key={attraction.id}>
              <article>
                <div>
                  <img
                    src={`http://localhost:8080/${attraction.image}`}
                    alt={attraction.name}
                  />
                </div>

                <StyledLocationDetails>
                  <h3>{attraction.name}</h3>
                  <p>{attraction.address}</p>
                  <p>{attraction.description}</p>

                  <a
                    href={attraction.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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

export default AttractionsSection;
