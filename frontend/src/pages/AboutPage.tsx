import { useState, useEffect } from "react";
import { client } from "../client";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";

import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

import { Author } from "../types";

import {
  StyledUl,
  StyledOl,
  StyledLi,
  StyledParagraph,
} from "../components/styles/PortableTextComponents.styled";

import {
  StyledAboutPageSection,
  StyledIntro,
  StyledBlogCTA,
  StyledBlogLink,
  StyledSocials,
} from "../components/styles/AboutPage.styled";

function AboutPage() {
  const [author, setAuthor] = useState<Author | null>(null);

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

  const iconMap: Record<string, React.ReactNode> = {
    Instagram: <FaInstagram size={45} />,
    TikTok: <FaTiktok size={45} />,
    Facebook: <FaFacebookF size={45} />,
    X: <FaXTwitter size={45} />,
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "author"] {
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
      .then((data) => setAuthor(data[0]))
      .catch((error: unknown) => console.log(error));
  }, []);

  if (!author) {
    return <p>It seems the author took a day off. No info available.</p>;
  }

  return (
    <StyledAboutPageSection>
      <header>
        <h1>About Me</h1>
        <p>
          Read more about me and discover my journey and passion for travel.
        </p>
      </header>

      <StyledIntro>
        <img src="/images/author-portrait-cropped2.webp" alt="Rae Wilder" />

        <div>
          <h2>Capturing journeys through photography and words</h2>
          <p>
            I'm a freelance travel photographer and writer with a passion for
            capturing the beauty of everyday moments on the road. Through my
            lens and words, I share stories that inspire curiosity, connection,
            and the courage to explore beyond the familiar.
          </p>

          <ol>
            <li>Freelance Travel Photography</li>
            <li>Travel Writing and storytelling</li>
            <li>Sharing Tips for Curious Explorers</li>
          </ol>
        </div>
      </StyledIntro>

      <article>
        <h2>My Story</h2>
        <PortableText value={author.bio} components={components} />
      </article>

      <StyledBlogCTA>
        <h2>Every journey begins with a story worth telling</h2>
        <StyledBlogLink to="/blog">Read my Blog</StyledBlogLink>
      </StyledBlogCTA>

      <article>
        <h2>Behind the Lens</h2>
        <p>
          When I'm on the road, I start each day looking for moments that feel
          authentic and alive. I combine travel photography with writing,
          capturing both the sights and the stories behind them. From scouting
          locations to editing photos and drafting posts, my workflow is about
          balancing spontaneity with reflection, so every image and word truly
          represents the journey.
        </p>
      </article>

      <StyledSocials>
        <h2>Stay in Touch!</h2>
        <p>
          Want to follow my adventures or get in touch? Find me on social media
          and join the journey.
        </p>

        <ul>
          {author.socialLinks.map((socialLink, index) => (
            <li key={index}>
              {" "}
              <a
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {iconMap[socialLink.platform]}
              </a>
            </li>
          ))}
        </ul>
      </StyledSocials>
    </StyledAboutPageSection>
  );
}

export default AboutPage;
