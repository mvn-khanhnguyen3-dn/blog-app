import Form from "../components/Form";
import { useState } from "react";
import { useRouter } from "next/router";
import { FetchData } from "../helper/FetchData";
import useHook from "../hook/useHook";

const Create = () => {
  type Inputs = {
    file?: File;
    name?: string;
    date?: string;
    title?: string;
    description?: string;
    author?: string;
    position?: string;
  };

  let router = useRouter();

  const { imageCard, imageAuthor, handleUpload, handleUploadAuthor } =
    useHook();

  const [data, setData] = useState<Inputs>();

  const onSubmit = (item: any) => {
    setData(item);
    FetchData.post("http://localhost:3000/api/blog", {
      ...item,
      imageAuthor,
      imageCard,
    });
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };
  return (
    <Form
      topic="Create Blog"
      {...data}
      onSubmit={onSubmit}
      imageCard={imageCard}
      imageAuthor={imageAuthor}
      handleUpload={handleUpload}
      handleUploadAuthor={handleUploadAuthor}
    />
  );
};

export default Create;
