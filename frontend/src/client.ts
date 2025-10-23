import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "4x22fza1",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-07-27",
});
