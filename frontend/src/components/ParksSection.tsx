import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CityWithLocations, Location } from "../types";

import {
  StyledLocationsSection,
  StyledFallbackMessage,
  StyledLocationDetails,
} from "./styles/Locations.styled";

function ParksSection() {
  const { slug } = useParams();
  const [city, setCity] = useState<CityWithLocations | null>(null);
  const [parks, setParks] = useState<Location[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/cities/${slug}`)
      .then((response) => response.json())
      .then((data: CityWithLocations) => {
        setCity(data);

        const filteredParks = data.locations.filter(
          (location) => location.type === "park"
        );

        setParks(filteredParks);
      })
      .catch((error: unknown) => console.log("Error loading city", error));
  }, [slug]);

  if (!city) {
    return <p>We tried to find this place, but even the GPS gave up.</p>;
  }

  return (
    <StyledLocationsSection id="parks">
      <h2>Parks</h2>

      {parks.length === 0 ? (
        <StyledFallbackMessage>
          No parks found. Maybe the concrete jungle is all the greenery we get.
        </StyledFallbackMessage>
      ) : (
        <ul>
          {parks.map((park) => (
            <li key={park.id}>
              <article>
                <div>
                  <img
                    src={`http://localhost:8080/${park.image}`}
                    alt={park.name}
                  />
                </div>

                <StyledLocationDetails>
                  <h3>{park.name}</h3>
                  <p>{park.address}</p>
                  <p>{park.description}</p>

                  <a href={park.link} target="_blank" rel="noopener noreferrer">
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

export default ParksSection;
