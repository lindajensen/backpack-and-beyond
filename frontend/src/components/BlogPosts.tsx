import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "../client";

import { Post } from "../types";

import {
  StyledHeading,
  StyledPostSection,
  StyledPostList,
  StyledPostCard,
} from "../components/styles/Posts.styled";

function BlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(publishedAt desc) {
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
      .then((data: Post[]) => setPosts(data))
      .catch((error: unknown) => console.log(error));
  }, []);

  return (
    <StyledPostSection>
      <StyledHeading>
        <h1>Travel Stories</h1>
      </StyledHeading>

      <StyledPostList>
        {posts.map((post) => (
          <li key={post._id}>
            <Link to={`/blog/${post.slug.current}`}>
              <StyledPostCard>
                <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                <div>
                  <p>
                    <span>{post.tags}</span>
                  </p>
                  <h3>{post.title}</h3>
                  <small>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </small>
                  <p>{post.teaser}</p>
                </div>
              </StyledPostCard>
            </Link>
          </li>
        ))}
      </StyledPostList>
    </StyledPostSection>
  );
}

export default BlogPosts;
