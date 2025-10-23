import styled from "styled-components";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

export const StyledNewsletterSection = styled.section`
  border: 4px solid var(--background-color-dark);
  border-radius: 12px;
  text-align: center;
  margin: 1.2rem 1.2rem;
  padding: 1.563rem;

  div {
    max-width: 31.25rem;
    margin: 0 auto;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  form {
    display: flex;
    width: 100%;
    max-width: 25rem;
    margin: 0 auto;
  }

  input[type="email"] {
    flex: 1;
    padding: 0.4rem 0.5rem;
    background-color: transparent;
    line-height: 1.5;
    border: 2px solid var(--background-color-dark);
    border-radius: var(--border-radius);
    box-sizing: border-box;
    margin-right: 0.5rem;

    &:focus {
      outline: none;
      background: transparent;
      border: 2px solid var(--primary-color);
    }
  }

  input[type="submit"] {
    padding: 0.4rem 0.8rem;
    border-radius: var(--border-radius);
    border: 1px solid transparent;
    background-color: var(--text-color);
    color: #fff;
    line-height: 1.5;
    cursor: pointer;
  }
`;

export const StyledInstagramIcon = styled(FaInstagram)`
  display: inline;
  font-size: 3rem;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.25rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

export const StyledTikTokIcon = styled(FaTiktok)`
  display: inline;
  font-size: 2.5rem;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.25rem;

  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

export const StyledXIcon = styled(FaXTwitter)`
  display: inline;
  font-size: 2.5rem;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.25rem;

  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

export const StyledFacebookIcon = styled(FaFacebookF)`
  display: inline;
  font-size: 2.5rem;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.25rem;

  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;
