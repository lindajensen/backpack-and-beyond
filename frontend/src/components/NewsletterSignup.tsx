import { useState } from "react";

import {
  StyledNewsletterSection,
  StyledInstagramIcon,
  StyledTikTokIcon,
  StyledXIcon,
  StyledFacebookIcon,
  StyledStatusMessage,
} from "./styles/NewsletterSignup.styled";

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmailStatus("success");
        setEmail("");
      } else {
        setEmailStatus("error");
        setErrorMessage(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      setEmailStatus("error");
      setErrorMessage("Something went wrong, please try again.");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

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

        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            value={email}
            onInput={handleChange}
            placeholder="Your email"
          />
          <input type="submit" value="Subscribe" />
        </form>

        {emailStatus === "success" && (
          <StyledStatusMessage>Thank you for subscribing!</StyledStatusMessage>
        )}
        {emailStatus === "error" && (
          <StyledStatusMessage>{errorMessage}</StyledStatusMessage>
        )}
      </div>
    </StyledNewsletterSection>
  );
}

export default NewsletterSignup;
