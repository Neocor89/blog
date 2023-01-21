/* SETUP PREVIEW SANITY CLIENT */
import { createClient } from "next-sanity";

// Import the existing Sanity Client
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

// Export Variable with the Sanity Client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // "_true_" before deployement
});