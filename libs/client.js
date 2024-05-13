import { createClient } from "microcms-js-sdk";

export const client = createClient({
serviceDomain: "nextjs-blog-test",
apiKey: process.env.API_KEY,

})
