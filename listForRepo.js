import dotenv from 'dotenv'
import { Octokit } from "@octokit/rest";

dotenv.config()

const octokit = new Octokit({
  auth: process.env.ACCESS_TOKEN,
  baseUrl: process.env.BASE_URL,
  timeZone: 'Asia/Tokyo',
});

octokit.issues.listForRepo({
  owner: process.env.OWNER,
  repo: process.env.REPO,
}).then((response) => {
  console.log(response.data.length);
  response.data.forEach((issue) => {
    console.log(`#${issue.number}`, issue.title);
  });
}).catch((e) => {
  console.error(e);
});