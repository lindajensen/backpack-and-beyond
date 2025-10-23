import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CityWithLocations, Location } from "../types";

import {
  StyledLocationsSection,
  StyledFallbackMessage,
  StyledLocationDetails,
} from "./styles/Locations.styled";

function HotelsSection() {
  const { slug } = useParams();
  const [city, setCity] = useState<CityWithLocations | null>(null);
  const [hotels, setHotels] = useState<Location[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/cities/${slug}`)
      .then((response) => response.json())
      .then((data: CityWithLocations) => {
        setCity(data);

        const filteredHotels = data.locations.filter(
          (location) => location.type === "hotel"
        );

        setHotels(filteredHotels);
      })
      .catch((error: unknown) => console.log("Error loading city", error));
  }, [slug]);

  if (!city) {
    return <p>We tried to find this place, but even the GPS gave up.</p>;
  }

  return (
    <StyledLocationsSection id="hotels">
      <h2>Hotels</h2>

      {hotels.length === 0 ? (
        <StyledFallbackMessage>
          No hotels found so I guess we're on a staycation instead.
        </StyledFallbackMessage>
      ) : (
        <ul>
          {hotels.map((hotel) => (
            <li key={hotel.id}>
              <article>
                <div>
                  <img
                    src={`http://localhost:8080/${hotel.image}`}
                    alt={hotel.name}
                  />
                </div>

                <StyledLocationDetails>
                  <h3>{hotel.name}</h3>
                  <p>{hotel.address}</p>
                  <p>{hotel.description}</p>

                  <a
                    href={hotel.link}
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

export default HotelsSection;
