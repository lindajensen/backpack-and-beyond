import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "../client";

import { Post } from "../types";
import { Article } from "../types";

import { StyledHighlightBarSection } from "./styles/HighlightBar.styled";

function HighlightBar() {
  const [latestPost, setLatestPost] = useState<Post | null>(null);
  const [latestArticle, setLatestArticle] = useState<Article | null>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(publishedAt desc) [0] {
          _id,
          title,
          slug,
          mainImage {
            asset-> {
              url
            },
            alt
          },
          tags,
          quote,
          quote_author,
          teaser,
          body,
          is_featured,
          author-> {
            name,
            image
          },
          publishedAt
        }`
      )
      .then((data: Post) => setLatestPost(data))
      .catch((error: unknown) => console.log(error));

    client
      .fetch(
        `*[_type == "article"] | order(publishedAt desc) [0]{
            _id,
            title,
            slug,
            mainImage {
              asset-> {
                url
              },
              alt
            },
            tags,
            teaser,
            body,
            is_featured,
            author-> {
              name,
              image
            },
            publishedAt
          }`
      )
      .then((data: Article) => setLatestArticle(data))
      .catch((error: unknown) => console.log(error));
  }, []);

  if (!latestPost) {
    return <p>Latest Post: Coming soon!</p>;
  }

  if (!latestArticle) {
    return <p>Latest Article: Coming soon!</p>;
  }

  return (
    <StyledHighlightBarSection>
      <article>
        <Link to="/next-trip">Next Trip: Tokyo, Japan</Link>
      </article>

      <article>
        <p>Workshop: Travel Photography</p>
      </article>

      <article>
        <p>Where should I go next? Vote here!</p>
      </article>

      <article>
        <Link to={`blog/${latestPost.slug.current}`}>
          Latest Post: {latestPost.title}
        </Link>
      </article>

      <article>
        <Link to={`article/${latestArticle.slug.current}`}>
          Latest Article: {latestArticle.title}
        </Link>
      </article>
    </StyledHighlightBarSection>
  );
}

export default HighlightBar;
