import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  categories: Page[]
}

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const pages = await sanityClient.fetch(query)
}