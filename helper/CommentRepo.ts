import fs from "fs";
import comment from "../data/comment.json";

type Comment = {
  id: number;
  text: string;
};

const getAll = () => {
  return comment;
};

const getById = (id: number) => {
  return comment.find((item) => item.id.toString() === id.toString());
};

const create = ({ id, text }: Comment) => {
  const newData = {
    id,
    text,
  };

  newData.id = comment.length + 10;

  comment.push(newData);
  saveData();
};

const update = (id: number, text: string) => {
  const params = {
    text,
  };

  const newData = comment?.find((item) => item.id.toString() === id.toString());

  newData && Object.assign(newData, params);
  saveData();
};

const _delete = (id: number) => {
  const newData = comment?.filter(
    (item) => item.id.toString() !== id.toString()
  );
  fs.writeFileSync("data/comment.json", JSON.stringify(newData, null, 4));
};

const saveData = () => {
  try {
    fs.writeFileSync("data/comment.json", JSON.stringify(comment, null, 4));
  } catch (error) {
    throw error;
  }
};

export const CommentRepo = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};
