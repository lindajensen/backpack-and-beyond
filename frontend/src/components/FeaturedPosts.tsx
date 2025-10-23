import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "../client";

import { Post } from "../types";

import { FaArrowRightLong } from "react-icons/fa6";

import {
  StyledHeading,
  StyledPostSection,
  StyledPostList,
  StyledPostCard,
  StyledSeeAllLinkWrapper,
} from "../components/styles/Posts.styled";

function FeaturedPosts() {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && is_featured == true]{
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
      .then((data: Post[]) => setFeaturedPosts(data))
      .catch((error: unknown) => console.log(error));
  }, []);

  return (
    <StyledPostSection>
      <StyledHeading>
        <h2>Featured Posts</h2>
      </StyledHeading>

      <StyledPostList>
        {featuredPosts.map((featuredPost) => (
          <li key={featuredPost._id}>
            <Link to={`/blog/${featuredPost.slug.current}`}>
              <StyledPostCard>
                <img
                  src={featuredPost.mainImage.asset.url}
                  alt={featuredPost.mainImage.alt}
                />
                <div>
                  <p>
                    <span>{featuredPost.tags}</span>
                  </p>
                  <h3>{featuredPost.title}</h3>
                  <small>
                    {new Date(featuredPost.publishedAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </small>
                  <p>{featuredPost.teaser}</p>
                </div>
              </StyledPostCard>
            </Link>
          </li>
        ))}
      </StyledPostList>

      <StyledSeeAllLinkWrapper>
        <Link to="/blog">See all posts</Link>
        <FaArrowRightLong />
      </StyledSeeAllLinkWrapper>
    </StyledPostSection>
  );
}

export default FeaturedPosts;
