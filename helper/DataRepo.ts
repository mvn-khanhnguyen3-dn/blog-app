import fs from "fs";
import data from "../data/data.json";

type Data = {
  id: any;
  title: string;
  description: string;
  name: string;
  date: string;
  author: string;
  position: string;
  imageAuthor: any;
  imageCard: any;
};

const getAll = () => {
  return data;
};

const getById = (id: number) => {
  return data.find((item) => item.id.toString() === id.toString());
};

const create = ({
  id,
  title,
  description,
  name,
  date,
  author,
  position,
  imageAuthor,
  imageCard,
}: Data) => {
  const newData = {
    id,
    title,
    description,
    name,
    date,
    author,
    position,
    imageAuthor,
    imageCard,
  };
  // if (data.find((item) => item.id.toString() === newData.id.toString())) return;

  newData.id = data.length + 10;

  data.push(newData);
  saveData();
};

const update = (
  id: number,
  {
    title,
    description,
    name,
    date,
    author,
    position,
    imageAuthor,
    imageCard,
  }: Data
) => {
  const params = {
    id,
    title,
    description,
    name,
    date,
    author,
    position,
    imageAuthor,
    imageCard,
  };

  const newData = data.find((item) => item.id.toString() === id.toString());

  newData && Object.assign(newData, params);
  saveData();
};

const _delete = (id: number) => {
  const newData = data.filter((item) => item.id.toString() !== id.toString());
  fs.writeFileSync("data/data.json", JSON.stringify(newData, null, 4));
};

const saveData = () => {
  try {
    fs.writeFileSync("data/data.json", JSON.stringify(data, null, 4));
  } catch (error) {
    throw error;
  }
};

export const DataRepo = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};
