import dotenv from 'dotenv'
import { Octokit } from "@octokit/rest";

dotenv.config()

const octokit = new Octokit({
  auth: process.env.ACCESS_TOKEN,
  baseUrl: process.env.BASE_URL,
  timeZone: 'Asia/Tokyo',
});

octokit.paginate(octokit.issues.listForRepo, {
  owner: process.env.OWNER,
  repo: process.env.REPO,
}).then((issues) => {
  issues.forEach((issue) => {
    console.log(`#${issue.number}`, issue.title);
  });
}).catch((e) => {
  console.error(e);
});