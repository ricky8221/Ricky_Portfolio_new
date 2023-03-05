import { Experience } from "@/Typing";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq `
*[_type == "experiences"] | order(_createdAt asc) {
  ...,
  technologies[] ->
    
}
`

type Data = {
    experiences: Experience[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const experiences: Experience[] = await sanityClient.fetch(query);

    res.status(200).json({ experiences })
  }