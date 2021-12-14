// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    category: "",
    created_by: "",
    created_at: "timestamp here",
    description: "",
    img_src: "",
    participants: [],
    title: "",
  });
}
