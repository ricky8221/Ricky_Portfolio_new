import { Skill } from "@/Typing";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
*[_type == "skill"] | order(progress desc)
`;

type Data = {
  skill: Skill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skill: Skill[] = await sanityClient.fetch(query);

  res.status(200).json({ skill });
}
