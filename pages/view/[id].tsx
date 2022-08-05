import { FetchData } from "../../helper/FetchData";
import DetailBlog from "../../components/DetailBlog";

export async function getServerSideProps({ params }: any) {
  const res = await FetchData.get(
    `http://localhost:3000/api/blog/${params.id}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
}

const View = ({ data }: any) => {
  return <DetailBlog {...data} />;
};
export default View;
