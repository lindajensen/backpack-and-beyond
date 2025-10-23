import { StyledForm } from "./styles/NewletterForm.styled";

function NewsletterForm({ className }: { className?: string }) {
  return (
    <StyledForm className={className}>
      <input id="email" type="email" placeholder="Your email" />
      <input type="submit" value="Subscribe" />
    </StyledForm>
  );
}

export default NewsletterForm;

//! https://formspree.io/
