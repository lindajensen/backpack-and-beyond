import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CityWithLocations, Location } from "../types";

import {
  StyledLocationsSection,
  StyledFallbackMessage,
  StyledLocationDetails,
} from "./styles/Locations.styled";

function RestaurantsSection() {
  const { slug } = useParams();
  const [city, setCity] = useState<CityWithLocations | null>(null);
  const [restaurants, setRestaurants] = useState<Location[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/cities/${slug}`)
      .then((response) => response.json())
      .then((data: CityWithLocations) => {
        setCity(data);

        const filteredRestaurants = data.locations.filter(
          (location) => location.type === "restaurant"
        );

        setRestaurants(filteredRestaurants);
      })
      .catch((error: unknown) => console.log("Error loading city", error));
  }, [slug]);

  if (!city) {
    return <p>We tried to find this place, but even the GPS gave up.</p>;
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
            <li key={restaurant.id}>
              <article>
                <div>
                  <img
                    src={`http://localhost:8080/${restaurant.image}`}
                    alt={restaurant.name}
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
