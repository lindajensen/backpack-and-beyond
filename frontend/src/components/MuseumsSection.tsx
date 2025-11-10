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

function MuseumsSection() {
  const { slug } = useParams();
  const [museums, setMuseums] = useState<Location[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "location" && city->slug.current == $slug && type == "museum"]{
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
      .then((data: Location[]) => setMuseums(data))
      .catch((error) => console.log("Error loading museums:", error));
  }, [slug]);

  if (!slug) {
    return (
      <StyledFallbackText>
        Loading city data... the map is still unfolding.
      </StyledFallbackText>
    );
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
            <li key={museum._id}>
              <article>
                <div>
                  <img
                    src={museum.mainImage.asset.url}
                    alt={museum.mainImage.alt}
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
