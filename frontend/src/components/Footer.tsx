import { Link } from "react-router-dom";

import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

import {
  StyledTopFooter,
  StyledFooterColumn,
  StyledFooterSocials,
  StyledFooterBrandLink,
  StyledBottomFooter,
  StyledFooterNewsletterForm,
} from "./styles/Footer.styled";

function Footer() {
  return (
    <>
      <StyledTopFooter>
        <div>
          <StyledFooterBrandLink href="/">
            Backpack & Beyond
          </StyledFooterBrandLink>
          <p>
            Your gateway to real-life travel stories, practical guides, and city
            tips from across the globe.
          </p>
        </div>

        <StyledFooterColumn>
          <h4>Explore</h4>
          <ul>
            <li>
              <Link to="/city-guides">City Guides</Link>
            </li>
            <li>
              <Link to="/articles">Travel Articles</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </StyledFooterColumn>

        <div>
          <h4>Stay Updated</h4>
          <p>
            Subscribe to get new posts and travel tips straight to your inbox!
          </p>

          <StyledFooterNewsletterForm />

          <div>
            <StyledFooterSocials>
              <li>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={25} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter size={25} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={25} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={25} />
                </a>
              </li>
            </StyledFooterSocials>
          </div>
        </div>
      </StyledTopFooter>

      <StyledBottomFooter>
        <small>&copy; 2025 Backpack & Beyond</small>
      </StyledBottomFooter>
    </>
  );
}

export default Footer;
