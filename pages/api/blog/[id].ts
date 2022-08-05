import { DataRepo } from "../../../helper/DataRepo";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest | any,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return getById();
    case "PUT":
      return updateData();
    case "DELETE":
      return deleteData();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  function getById() {
    const data = DataRepo.getById(req.query.id);
    return res.status(200).json(data);
  }
  function updateData() {
    try {
      DataRepo.update(req.query.id, req.body);
      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
  function deleteData() {
    try {
      DataRepo.delete(req.query.id);
      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}
