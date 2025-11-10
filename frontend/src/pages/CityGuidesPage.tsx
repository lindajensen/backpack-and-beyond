import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "../client";

import { CityLink } from "../types";

import { StyledCityGuidesPageSection } from "../components/styles/CityGuidesPage.styled";
import { StyledHeading } from "../components/styles/Global";

function CityGuidesPage() {
  const [cities, setCities] = useState<CityLink[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "city"] {
          _id,
          name,
          slug
        }`
      )
      .then((data: CityLink[]) => setCities(data))
      .catch((error: unknown) => console.log(error));
  }, []);

  return (
    <StyledCityGuidesPageSection>
      <StyledHeading>
        <h1>City Guides</h1>
      </StyledHeading>

      <ul>
        {cities.map((city) => (
          <li key={city._id}>
            <Link to={`/city-guides/${city.slug.current}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </StyledCityGuidesPageSection>
  );
}

export default CityGuidesPage;
