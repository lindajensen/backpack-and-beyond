import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { client } from "../client";

import { Article } from "../types";

import {
  StyledHeading,
  StyledPostSection,
  StyledPostList,
  StyledPostCard,
} from "../components/styles/Posts.styled";

function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "article"] | order(publishedAt desc){
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
      .then((data) => setArticles(data))
      .catch((error: unknown) => console.log(error));
  }, []);

  return (
    <StyledPostSection>
      <StyledHeading>
        <h1>Travel Articles</h1>
      </StyledHeading>

      <StyledPostList>
        {articles.map((article) => (
          <li key={article._id}>
            <Link to={`/article/${article.slug.current}`}>
              <StyledPostCard>
                <img
                  src={article.mainImage.asset.url}
                  alt={article.mainImage.alt}
                />
                <div>
                  <p>
                    <span>{article.tags}</span>
                  </p>
                  <h3>{article.title}</h3>
                  <small>
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </small>
                  <p>{article.teaser}</p>
                </div>
              </StyledPostCard>
            </Link>
          </li>
        ))}
      </StyledPostList>
    </StyledPostSection>
  );
}

export default ArticlesPage;
