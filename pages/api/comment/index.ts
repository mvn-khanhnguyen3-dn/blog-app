import { CommentRepo } from "./../../../helper/CommentRepo";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getAll();
    case "POST":
      return createData();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  function getAll() {
    const data = CommentRepo.getAll();
    return res.status(200).json(data);
  }
  function createData() {
    try {
      CommentRepo.create(req.body);
      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}
