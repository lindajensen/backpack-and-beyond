import styled from "styled-components";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

export const StyledNewsletterSection = styled.section`
  border-radius: 12px;
  background-color: var(--background-color-dark);
  color: var(--background-color-light);
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
    background-color: var(--background-color-light);
    line-height: 1.5;
    border: 2px solid var(--background-color-light);
    border-radius: var(--border-radius);
    box-sizing: border-box;
    margin-right: 0.5rem;

    &:focus {
      outline: none;
      /* background: transparent; */
      border: 2px solid var(--primary-color);
    }
  }

  input[type="submit"] {
    padding: 0.4rem 0.8rem;
    border-radius: var(--border-radius);
    border: 1px solid transparent;

    background-color: var(--background-color-light);
    color: var(--text-color);
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
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const StyledTikTokIcon = styled(FaTiktok)`
  display: inline;
  font-size: 2.5rem;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.25rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const StyledXIcon = styled(FaXTwitter)`
  display: inline;
  font-size: 2.5rem;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.25rem;
  color: var(--background-color-light);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const StyledFacebookIcon = styled(FaFacebookF)`
  display: inline;
  font-size: 2.5rem;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.25rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
