import { useState } from "react";

import {
  StyledContactSection,
  StyledContactForm,
  StyledNameFieldsWrapper,
} from "../components/styles/ContactPage.styled";

import { StyledHeading } from "../components/styles/Global";

function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // "loading", "success", "error"

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          company,
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        setStatus("success");

        // Clear UI
        setFirstName("");
        setLastName("");
        setCompany("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  }

  return (
    <StyledContactSection>
      <StyledHeading>
        <h1>Contact</h1>
      </StyledHeading>
      <p>
        Want to work together? Fill in the form and I'll get back to you ASAP.
      </p>

      <StyledContactForm onSubmit={handleSubmit}>
        <StyledNameFieldsWrapper>
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              id="first-name"
              required
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              required
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </StyledNameFieldsWrapper>

        <label htmlFor="company">Company Name</label>
        <input
          id="company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          required
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          cols={30}
          rows={10}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <input type="submit" value="Send" />

        {status === "success" && <p>Message sent successfully!</p>}
        {status === "error" && <p>Failed to send message. Please try again.</p>}
      </StyledContactForm>
    </StyledContactSection>
  );
}

export default ContactPage;
