import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";

import { Post } from "../types";

import {
  StyledBlogDetailsSection,
  StyledQuoteWrapper,
  StyledBlockquote,
  StyledSignature,
} from "../components/styles/BlogDetailsPage.styled";

import {
  StyledUl,
  StyledOl,
  StyledLi,
  StyledParagraph,
} from "../components/styles/PortableTextComponents.styled";

function BlogDetailsPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  const components: Partial<PortableTextReactComponents> = {
    list: {
      bullet: (props) => <StyledUl>{props.children}</StyledUl>,
      number: (props) => <StyledOl>{props.children}</StyledOl>,
    },
    listItem: {
      bullet: (props) => <StyledLi>{props.children}</StyledLi>,
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
      .then((data) => setPost(data[0]))
      .catch((error: unknown) => console.log(error));
  }, [slug]);

  if (!post) {
    return <p>Not all who wander are lost, but this post might be.</p>;
  }

  return (
    <StyledBlogDetailsSection>
      <h1>{post.title}</h1>

      <StyledQuoteWrapper>
        <StyledBlockquote>
          <h2>{post.quote}</h2>
          <cite>&mdash; {post.quote_author}</cite>
        </StyledBlockquote>
      </StyledQuoteWrapper>

      <PortableText value={post.body} components={components} />

      <p>I hope you've enjoyed tagging along. Talk soon!</p>

      <StyledSignature>
        <strong>- {post.author.name}</strong>
      </StyledSignature>

      <p>
        Published on{" "}
        {new Date(post.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </StyledBlogDetailsSection>
  );
}

export default BlogDetailsPage;
