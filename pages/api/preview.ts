import { NextApiRequest, NextApiResponse } from "next";

// Handling response
export default function preview(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({});
  res.writeHead(307, { location: "/" });
  res.end();
}