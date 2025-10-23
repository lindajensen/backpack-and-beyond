import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";

import { Article } from "../types";

import { StyledArticleDetailsSection } from "../components/styles/ArticleDetailsPage.styled";

import {
  StyledUl,
  StyledOl,
  StyledLi,
  StyledParagraph,
} from "../components/styles/PortableTextComponents.styled";

import {
  // StyledPostContent,
  StyledSignature,
} from "../components/styles/BlogDetailsPage.styled";

function ArticleDetailsPage() {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  const components: Partial<PortableTextReactComponents> = {
    list: {
      bullet: (props) => <StyledUl>{props.children}</StyledUl>,
      number: (props) => <StyledOl>{props.children}</StyledOl>,
    },
    listItem: {
      bullet: (props) => <StyledLi>{props.children}</StyledLi>,
      number: (props) => <StyledLi>{props.children}</StyledLi>,
    },
    block: {
      normal: (props) => <StyledParagraph>{props.children}</StyledParagraph>,
    },
  };

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
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
      .then((data) => setArticle(data[0]))
      .catch((error: unknown) => console.log(error));
  }, [slug]);

  if (!article) {
    return (
      <p>Looks like this article took a detour and got lost along the way.</p>
    );
  }

  return (
    <StyledArticleDetailsSection>
      <h1>{article.title}</h1>
      <p>{article.teaser}</p>

      <img src={article.mainImage.asset.url} alt={article.mainImage.alt} />

      <PortableText value={article.body} components={components} />

      <StyledSignature>
        <strong>- {article.author.name}</strong>
      </StyledSignature>

      <p>
        Published on{" "}
        {new Date(article.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </StyledArticleDetailsSection>
  );
}

export default ArticleDetailsPage;
