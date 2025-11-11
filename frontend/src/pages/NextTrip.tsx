import { useState, useEffect } from "react";
import { client } from "../client";

import { NextTripInterface, Slide } from "../types";

import CountDownTimer from "../components/CountDownTimer";
import FlickityCarousel from "../components/FlickityCarousel";
import { StyledStatusMessage } from "../components/styles/NewletterForm.styled";

import {
  StyledNextTripSection,
  StyledNewsletterContent,
} from "../components/styles/NextTrip.styled";
import { StyledHeading } from "../components/styles/Global";

function NextTrip() {
  const [nextTripSlides, setNextTripSlides] = useState<Slide[]>([]);
  const [nextTripData, setNextTripData] = useState<NextTripInterface | null>(
    null
  );
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    client
      .fetch(
        `*[_type == "nextTrip"] {
          title,
          slug,
          intro,
          departureDate,
          carouselSlides[] {
            title,
            description,
            mainImage {
              asset-> {
                url
              },
              alt
            },
          }
        }`
      )
      .then((data) => {
        setNextTripData(data[0]);
        setNextTripSlides(data[0].carouselSlides);
      });
  }, []);

  if (!nextTripData) {
    return <p>No upcoming trip planned...yet! Check back soon.</p>;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    function clearStatus() {
      setTimeout(() => {
        setEmailStatus("");
        setErrorMessage("");
      }, 5000);
    }

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

      clearStatus();
    } catch (error) {
      console.error("Error:", error);
      setEmailStatus("error");
      setErrorMessage("Something went wrong, please try again.");
      clearStatus();
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  return (
    <StyledNextTripSection>
      <StyledHeading>
        <h1>{nextTripData.title}</h1>
      </StyledHeading>
      <p>{nextTripData.intro}</p>
      <CountDownTimer departureDate={nextTripData.departureDate} />

      <FlickityCarousel slides={nextTripSlides} />

      <StyledNewsletterContent>
        <h3>Subscribe to get notified when the story drops</h3>
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
      </StyledNewsletterContent>
    </StyledNextTripSection>
  );
}

export default NextTrip;
