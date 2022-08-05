import Form from "../../components/Form";
import { FetchData } from "../../helper/FetchData";
import { useRouter } from "next/router";
import useHook from "../../hook/useHook";

interface typeData {
  id?: number;
  title?: string;
  description?: string;
  name?: string;
  date?: string;
  author?: string;
  position?: string;
  imageAuthor?: HTMLImageElement | any;
  imageCard?: HTMLImageElement | any;
}

export async function getServerSideProps({ params }: any) {
  const res = await FetchData.get(
    `http://localhost:3000/api/blog/${params.id}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
}
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

const Update = ({ data }: any) => {
  let router = useRouter();
  const {
    imageCard = data?.imageCard,
    imageAuthor = data?.imageAuthor,
    handleUpload,
    handleUploadAuthor,
  } = useHook();

  const onSubmit = (newData: typeData) => {
    const id = router.query.id;
    FetchData.put(`http://localhost:3000/api/blog/${id}`, {
      id,
      ...newData,
      imageCard,
      imageAuthor,
    });
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };
  return (
    <Form
      topic="Edit Blog"
      onSubmit={onSubmit}
      {...data}
      imageAuthor={imageAuthor}
      imageCard={imageCard}
      handleUpload={handleUpload}
      handleUploadAuthor={handleUploadAuthor}
    />
  );
};
export default Update;
