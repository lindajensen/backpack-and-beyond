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

function BarsSection() {
  const { slug } = useParams();
  const [bars, setBars] = useState<Location[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "location" && city->slug.current == $slug && type == "bar"]{
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
      .then((data: Location[]) => setBars(data))
      .catch((error) => console.log("Error loading bars:", error));
  }, [slug]);

  if (!slug) {
    return (
      <StyledFallbackText>
        Loading city data... the map is still unfolding.
      </StyledFallbackText>
    );
  }

  return (
    <StyledLocationsSection id="bars">
      <h2>Bars & Nightlife</h2>

      {bars.length === 0 ? (
        <StyledFallbackMessage>
          No bars in sight, so either this place is super chill or we took a
          wrong turn.
        </StyledFallbackMessage>
      ) : (
        <ul>
          {bars.map((bar) => (
            <li key={bar._id}>
              <article>
                <div>
                  <img src={bar.mainImage.asset.url} alt={bar.mainImage.alt} />
                </div>

                <StyledLocationDetails>
                  <h3>{bar.name}</h3>
                  <p>{bar.address}</p>
                  <p>{bar.description}</p>

                  <a href={bar.link} target="_blank" rel="noopener noreferrer">
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

export default BarsSection;
