import { useState, useEffect } from "react";
import { client } from "../client";
import { PortableText } from "@portabletext/react";

import { Author } from "../types";

import {
  StyledAboutSection,
  StyledCTALink,
} from "./styles/AboutSection.styled";

function AboutSection() {
  const [author, setAuthor] = useState<Author | null>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "author"] [0] {
        name,
        slug,
        image {
          asset-> {
            url
          },
          alt
        },
        intro,
        bio,
        socialLinks[] {
          platform,
          url
        }
      }`
      )
      .then((data: Author) => setAuthor(data))
      .catch((error: unknown) => console.log(error));
  }, []);

  if (!author) {
    return <p>It seems the author took a day off. No info available.</p>;
  }

  return (
    <StyledAboutSection>
      <div>
        {/* <img src={author.image.asset.url} alt={author.image.alt} /> */}
        <img src="/images/author-portrait-cropped1.png" alt="Rae Wilder" />
      </div>

      <div>
        <h2>The Journey Behind the Journal</h2>
        <PortableText value={author.intro} />

        <StyledCTALink to="/about">Read My Story</StyledCTALink>
      </div>
    </StyledAboutSection>
  );
}

export default AboutSection;
