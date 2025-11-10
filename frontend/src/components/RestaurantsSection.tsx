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

function RestaurantsSection() {
  const { slug } = useParams();
  const [restaurants, setRestaurants] = useState<Location[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "location" && city->slug.current == $slug && type == "restaurant"]{
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
      .then((data: Location[]) => setRestaurants(data))
      .catch((error) => console.log("Error loading restaurants:", error));
  }, [slug]);

  if (!slug) {
    return (
      <StyledFallbackText>
        Loading city data... the map is still unfolding.
      </StyledFallbackText>
    );
  }

  return (
    <StyledLocationsSection id="restaurants">
      <h2>Restaurants</h2>

      {restaurants.length === 0 ? (
        <StyledFallbackMessage>
          No restaurants found. Looks like it's instant noodles tonight.
        </StyledFallbackMessage>
      ) : (
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant._id}>
              <article>
                <div>
                  <img
                    src={restaurant.mainImage.asset.url}
                    alt={restaurant.mainImage.alt}
                  />
                </div>

                <StyledLocationDetails>
                  <h3>{restaurant.name}</h3>
                  <p>{restaurant.address}</p>
                  <p>{restaurant.description}</p>

                  <a
                    href={restaurant.link}
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

export default RestaurantsSection;
