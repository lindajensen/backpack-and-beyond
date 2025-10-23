// import NewsletterForm from "./NewsletterForm";

import {
  StyledNewsletterSection,
  StyledInstagramIcon,
  StyledTikTokIcon,
  StyledXIcon,
  StyledFacebookIcon,
} from "./styles/NewsletterSignup.styled";

// import { StyledFormWrapper } from "./styles/Global";

function NewsletterSignup() {
  return (
    <StyledNewsletterSection>
      <div>
        <h2>
          Find me on{" "}
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledTikTokIcon />
          </a>{" "}
          <a
            href="https://www.x.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledXIcon />
          </a>{" "}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledInstagramIcon />
          </a>{" "}
          {/* and{" "} */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledFacebookIcon />
          </a>{" "}
          or subscribe for more travel tips!
        </h2>

        {/* <StyledFormWrapper>
          <NewsletterForm />
        </StyledFormWrapper> */}

        <form>
          <input id="email" type="email" placeholder="Your email" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </StyledNewsletterSection>
  );
}

export default NewsletterSignup;
