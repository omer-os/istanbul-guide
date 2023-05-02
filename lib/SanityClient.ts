import { createClient } from "next-sanity";

export const config = {
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2022-05-02",
  useCdn: true,
};
export const sanityClient = createClient(config);
