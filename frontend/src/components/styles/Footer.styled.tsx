import styled from "styled-components";
import NewsletterForm from "../NewsletterForm";

export const StyledTopFooter = styled.footer`
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid #ccc;
  padding: 1.2rem 1.2rem;

  div {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    gap: 4rem;
    text-align: left;
  }
`;

export const StyledFooterSocials = styled.ul`
  display: flex;
  gap: 0.625rem;
  justify-content: center;
  margin-top: 1rem;

  @media (min-width: 900px) {
    justify-content: left;
  }
`;

export const StyledFooterBrandLink = styled.a`
  font-family: "ShelmaAndHugie", "Brush Script MT", cursive;
  font-size: 2.5rem;
`;

export const StyledBottomFooter = styled.footer`
  text-align: center;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
`;

export const StyledFooterNewsletterForm = styled(NewsletterForm)`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  max-width: 480px;
  margin: 0.5rem auto;
  box-sizing: border-box;

  @media (min-width: 900px) {
    gap: 0.1rem;
  }

  input[type="email"],
  input[type="submit"] {
    width: 70%;
  }

  input[type="submit"] {
    width: 30%;
  }
`;
