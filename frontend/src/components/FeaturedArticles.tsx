import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "../client";

import { Article } from "../types";

import { FaArrowRightLong } from "react-icons/fa6";

import {
  StyledHeading,
  StyledPostSection,
  StyledPostList,
  StyledPostCard,
  StyledSeeAllLinkWrapper,
} from "./styles/Posts.styled";

function FeaturedArticles() {
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "article" && is_featured == true]{
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
      .then((data: Article[]) => setFeaturedArticles(data))
      .catch((error: unknown) => console.log(error));
  }, []);

  return (
    <StyledPostSection>
      <StyledHeading>
        <h2>Travel Tips and Guides</h2>
      </StyledHeading>

      <StyledPostList>
        {featuredArticles.map((featuredArticle) => (
          <li key={featuredArticle._id}>
            <Link to={`/blog/${featuredArticle.slug.current}`}>
              <StyledPostCard>
                <img
                  src={featuredArticle.mainImage.asset.url}
                  alt={featuredArticle.mainImage.alt}
                />
                <div>
                  <p>
                    <span>{featuredArticle.tags}</span>
                  </p>
                  <h3>{featuredArticle.title}</h3>
                  <small>
                    {new Date(featuredArticle.publishedAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </small>
                  <p>{featuredArticle.teaser}</p>
                </div>
              </StyledPostCard>
            </Link>
          </li>
        ))}
      </StyledPostList>

      <StyledSeeAllLinkWrapper>
        <Link to="/articles">See all articles</Link>
        <FaArrowRightLong />
      </StyledSeeAllLinkWrapper>
    </StyledPostSection>
  );
}

export default FeaturedArticles;
