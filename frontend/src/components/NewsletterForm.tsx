import { useState } from "react";

import { StyledForm, StyledStatusMessage } from "./styles/NewletterForm.styled";

function NewsletterForm({ className }: { className?: string }) {
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
    <div>
      <StyledForm className={className} onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          value={email}
          onInput={handleChange}
          placeholder="Your email"
        />
        <input type="submit" value="Subscribe" />
      </StyledForm>

      {emailStatus === "success" && (
        <StyledStatusMessage>Thank you for subscribing!</StyledStatusMessage>
      )}
      {emailStatus === "error" && (
        <StyledStatusMessage>{errorMessage}</StyledStatusMessage>
      )}
    </div>
  );
}

export default NewsletterForm;
