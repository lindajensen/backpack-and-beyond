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

function ParksSection() {
  const { slug } = useParams();
  const [parks, setParks] = useState<Location[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "location" && city->slug.current == $slug && type == "park"]{
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
      .then((data: Location[]) => setParks(data))
      .catch((error) => console.log("Error loading parks:", error));
  }, [slug]);

  if (!slug) {
    return (
      <StyledFallbackText>
        Loading city data... the map is still unfolding.
      </StyledFallbackText>
    );
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
            <li key={park._id}>
              <article>
                <div>
                  <img
                    src={park.mainImage.asset.url}
                    alt={park.mainImage.alt}
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
