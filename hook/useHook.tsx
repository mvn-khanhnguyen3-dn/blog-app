import { useState } from "react";

const useHook = () => {
  const [imageCard, setImageCard] = useState();
  const [imageAuthor, setImageAuthor] = useState();

  const readFileAsync: any = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleUpload = async (e: any) => {
    const file = e.target.files[0];
    setImageCard(await readFileAsync(file));
  };
  const handleUploadAuthor = async (e: any) => {
    const file = e.target.files[0];
    setImageAuthor(await readFileAsync(file));
  };
  return {
    imageCard,
    imageAuthor,
    handleUpload,
    handleUploadAuthor,
  };
};

export default useHook;
