export let url: string;

if (process.env.NODE_ENV === "development" || process.env.TEST) {
  url = "http://localhost:3000";
}
