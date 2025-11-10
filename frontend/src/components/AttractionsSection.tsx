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

function AttractionsSection() {
  const { slug } = useParams();
  const [attractions, setAttractions] = useState<Location[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "location" && city->slug.current == $slug && type == "attraction"]{
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
      .then((data: Location[]) => setAttractions(data))
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
            <li key={attraction._id}>
              <article>
                <div>
                  <img
                    src={attraction.mainImage.asset.url}
                    alt={attraction.mainImage.alt}
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
