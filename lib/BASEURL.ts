export let BASEURL: string;

if (process.env.NODE_ENV === "development" || process.env.DEV === "dev") {
  BASEURL = "http://localhost:3000";
}

if (process.env.VERCEL_URL) {
  BASEURL = `https://${process.env.VERCEL_URL}`;
}
