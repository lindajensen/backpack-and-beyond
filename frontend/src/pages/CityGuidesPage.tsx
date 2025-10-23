import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { CityLink } from "../types";

import { StyledCityGuidesPageSection } from "../components/styles/CityGuidesPage.styled";
import { StyledHeading } from "../components/styles/Global";

function CityGuidesPage() {
  const [cities, setCities] = useState<CityLink[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/cities")
      .then((response) => response.json())
      .then((data: CityLink[]) => {
        setCities(data);
      });
  }, []);

  return (
    <StyledCityGuidesPageSection>
      <StyledHeading>
        <h1>City Guides</h1>
      </StyledHeading>

      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <Link to={`/city-guides/${city.slug}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </StyledCityGuidesPageSection>
  );
}

export default CityGuidesPage;

// https://anywhereweroam.com/cuba/
