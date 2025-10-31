// Core-modules and third-party modules
import express, { Request, Response, response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import MailerLite from "@mailerlite/mailerlite-nodejs";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

// Config
dotenv.config();

// Database Setup
import { Client } from "pg";

// Types
import { CityLink } from "../frontend/src/types/index";
import { City } from "../frontend/src/types/index";

// App Instances and Middleware
const app = express();
const port = 8080;

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_API_KEY || "",
});

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const client = new Client({
  connectionString: process.env.PGURI,
});

client
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Database connection error:", err));

// ROUTES --------------------------------------------------
// GET /cities - Retrieve all cities with their IDs, names, and slugs
app.get("/cities", async (request, response) => {
  try {
    const result = await client.query<CityLink>(
      "SELECT id, name, slug FROM cities"
    );

    const cities = result.rows;
    response.status(200).send(cities);
  } catch (error) {
    console.log("Error fetching cities:", error);
    response.status(500).send({ message: "Something went wrong" });
  }
});

// GET /cities - Retrieve all cities with their IDs, names, and slugs
app.get("/cities", async (request, response) => {
  try {
    const result = await client.query<CityLink>(
      "SELECT id, name, slug FROM cities"
    );

    const cities = result.rows;
    response.status(200).send(cities);
  } catch (error) {
    console.log("Error fetching cities:", error);
    response.status(500).send({ message: "Something went wrong" });
  }
});

// GET /cities/:slug - Retrieve specific city and its locations
app.get("/cities/:slug", async (request, response) => {
  try {
    const result = await client.query<City>(
      `
      SELECT
        cities.id,
        cities.name,
        cities.slug,
        cities.country,
        cities.description,
        cities.image,
        COALESCE(
          json_agg(
            json_build_object(
              'id', locations.id,
              'name', locations.name,
              'type', locations.type,
              'address', locations.address,
              'description', locations.description,
              'image', locations.image,
              'link', locations.link
            )
          ) FILTER (WHERE locations.id IS NOT NULL),
          '[]'
        ) AS locations
      FROM cities
      LEFT JOIN locations ON locations.city_id = cities.id
      WHERE cities.slug = $1
      GROUP BY cities.id;
      `,
      [request.params.slug]
    );

    const city = result.rows[0];
    response.status(200).send(city);
  } catch (error) {
    console.log("Error fetching city:", error);
    response.status(500).send({ message: "Something went wrong" });
  }
});

// POST /api/subscribe - Subscribe to newsletter
app.post("/api/subscribe", async (request, response) => {
  const { email } = request.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    response.status(400).json({ error: "Email address is required" });
  }

  if (!emailRegex.test(email)) {
    response.status(400).json({ error: "Please enter a valid email address" });
    return;
  }

  try {
    await mailerlite.subscribers.createOrUpdate({
      email: email,
      status: "active",
      groups: ["169413242807911810"],
    });

    response.json({ success: true });
  } catch (error) {
    console.error("MailerLite error:", error);
    response.status(500).send({ error: "Failed to subscribe" });
  }
});

// POST /api/contact - Send contact form
app.post("/api/contact", async (request, response) => {
  const { firstName, lastName, company, email, subject, message } =
    request.body;

  if (!firstName || !lastName || !email || !message) {
    response.status(400).json({ error: "Required fields missing" });
    return;
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "icloud",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    } as SMTPTransport.Options);

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: subject || `New message from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Company: ${company || "Not Available"}

        Message:
        ${message}
`,
    });

    response.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    response.status(500).json({ error: "Failed to send message" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
