import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";

import { Location } from "../types";

import {
  StyledLocationsSection,
  StyledFallbackMessage,
  StyledLocationDetails,
} from "./styles/Locations.styled";

import { StyledFallbackText } from "./styles/Global";

function HotelsSection() {
  const { slug } = useParams();
  const [hotels, setHotels] = useState<Location[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "location" && city->slug.current == $slug && type == "hotel"]{
          _id,
          name,
          type,
          address,
          description,
          link,
          mainImage {
            asset-> {
              url
            },
            alt
          },
        }`,
        { slug }
      )
      .then((data: Location[]) => setHotels(data))
      .catch((error) => console.log("Error loading hotels:", error));
  }, [slug]);

  if (!slug) {
    return (
      <StyledFallbackText>
        Loading city data... the map is still unfolding.
      </StyledFallbackText>
    );
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
            <li key={hotel._id}>
              <article>
                <div>
                  <img
                    src={hotel.mainImage.asset.url}
                    alt={hotel.mainImage.alt}
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
