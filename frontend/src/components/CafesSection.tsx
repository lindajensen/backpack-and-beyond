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

function CafeSection() {
  const { slug } = useParams();
  const [cafes, setCafes] = useState<Location[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "location" && city->slug.current == $slug && type == "cafe"]{
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
      .then((data: Location[]) => setCafes(data))
      .catch((error) => console.log("Error loading attractions:", error));
  }, [slug]);

  if (!slug) {
    return (
      <StyledFallbackText>
        Loading city data... the map is still unfolding.
      </StyledFallbackText>
    );
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
            <li key={cafe._id}>
              <article>
                <div>
                  <img
                    src={cafe.mainImage.asset.url}
                    alt={cafe.mainImage.alt}
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
