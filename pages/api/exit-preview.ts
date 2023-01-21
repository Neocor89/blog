import { NextApiRequest, NextApiResponse } from "next";

// Exit Sanity Preview
export default function exit(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData();
  res.writeHead(307, { location: "/" });
  res.end();
}