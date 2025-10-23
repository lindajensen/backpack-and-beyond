import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CityWithLocations, Location } from "../types";
import {
  StyledLocationsSection,
  StyledFallbackMessage,
  StyledLocationDetails,
} from "./styles/Locations.styled";

function MuseumsSection() {
  const { slug } = useParams();
  const [city, setCity] = useState<CityWithLocations | null>(null);
  const [museums, setMuseums] = useState<Location[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/cities/${slug}`)
      .then((response) => response.json())
      .then((data: CityWithLocations) => {
        setCity(data);

        const filteredMuseums = data.locations.filter(
          (location) => location.type === "museum"
        );

        setMuseums(filteredMuseums);
      })
      .catch((error: unknown) => console.log("Error loading city", error));
  }, [slug]);

  if (!city) {
    return <p>We tried to find this place, but even the GPS gave up.</p>;
  }

  return (
    <StyledLocationsSection id="museums">
      <h2>Museums</h2>

      {museums.length === 0 ? (
        <StyledFallbackMessage>
          No museums found. Guess it's time to make some history instead.
        </StyledFallbackMessage>
      ) : (
        <ul>
          {museums.map((museum) => (
            <li key={museum.id}>
              <article>
                <div>
                  <img
                    src={`http://localhost:8080/${museum.image}`}
                    alt={museum.name}
                  />
                </div>

                <StyledLocationDetails>
                  <h3>{museum.name}</h3>
                  <p>{museum.address}</p>
                  <p>{museum.description}</p>

                  <a
                    href={museum.link}
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

export default MuseumsSection;
