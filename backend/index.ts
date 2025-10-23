// Core-modules and third-party modules
import express, { Request, Response, response } from "express";
import cors from "cors";
import dotenv from "dotenv";

// Config
dotenv.config();

// Database Setup
import { Client } from "pg";

// Types
import { Post } from "../frontend/src/types/index";
import { Article } from "../frontend/src/types/index";
import { CityLink } from "../frontend/src/types/index";
import { City } from "../frontend/src/types/index";

// App Instances and Middleware
const app = express();
const port = 8080;

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
//! GET /posts - Retrieve all posts
// app.get("/posts", async (request: Request, response: Response) => {
//   try {
//     const result = await client.query<Post>("SELECT * FROM posts");

//     const posts = result.rows;
//     response.status(200).send(posts);
//   } catch (error) {
//     console.log("Error fetching posts:", error);
//     response.status(500).send({ message: "Something went wrong" });
//   }
// });

//! GET /posts/featured - Retreive featured posts
// app.get("/posts/featured", async (request: Request, response: Response) => {
//   try {
//     const result = await client.query<Post>(
//       `SELECT * FROM Posts
//        WHERE is_featured = true
//       `
//     );

//     const featuredPosts = result.rows;
//     response.status(200).send(featuredPosts);
//   } catch (error) {
//     console.log("Error fetching posts:", error);
//     response.status(500).send({ message: "Something went wrong" });
//   }
// });

//! GET /posts/:id - Retrieve specific post
// app.get("/posts/:id", async (request: Request, response: Response) => {
//   try {
//     const result = await client.query<Post>(
//       `
//       SELECT *
//       FROM posts
//       WHERE id = $1
//       `,
//       [request.params.id]
//     );

//     const post = result.rows[0];

//     if (result.rows.length === 0) {
//       response.status(404).send({ message: "Post not found" });
//     } else {
//       response.status(200).send(post);
//     }
//   } catch (error) {
//     console.log("Error fetching post:", error);
//     response.status(500).send({ message: "Something went wrong" });
//   }
// });

//! GET /articles - Retrieve all articles
// app.get("/articles", async (request: Request, response: Response) => {
//   try {
//     const result = await client.query<Article>("SELECT * FROM articles");

//     const articles = result.rows;
//     response.status(200).send(articles);
//   } catch (error) {
//     console.log("Error fetching articles:", error);
//     response.status(500).send({ message: "Something went wrong" });
//   }
// });

//! GET /articles/:id - Retrieve specific article
// app.get("/articles/:id", async (request: Request, response: Response) => {
//   try {
//     const result = await client.query<Article>(
//       `
//       SELECT *
//       FROM articles
//       WHERE id = $1
//       `,
//       [request.params.id]
//     );

//     const article = result.rows[0];

//     if (result.rows.length === 0) {
//       response.status(404).send({ message: "Article not found" });
//     } else {
//       response.status(200).send(article);
//     }
//   } catch (error) {
//     console.log("Error fetching article:", error);
//     response.status(500).send({ message: "Something went wrong" });
//   }
// });

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

// app.get("/cities/:slug", async (request, response) => {
//   try {
//     const result = await client.query<City>(
//       `
//       SELECT *
//       FROM cities
//       WHERE slug = $1
//       `,
//       [request.params.slug]
//     );

//     const city = result.rows[0];
//     response.status(200).send(city);
//   } catch (error) {
//     console.log("Error fetching city:", error);
//     response.status(500).send({ message: "Something went wrong" });
//   }
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
