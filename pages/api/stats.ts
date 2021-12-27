// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};
// https://api.github.com/users/EdvinTr -> general user profile info
// https://api.github.com/users/EdvinTr/events -> returns recent commits etc
// https://api.github.com/users/EdvinTr/repos -> returns all repos

// use GraphQL instead

/* query { 
    user(login: "EdvinTr") {
      contributionsCollection {
        contributionCalendar{
          totalContributions
        }
      }
    }
  } */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
