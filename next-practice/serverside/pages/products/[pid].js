import fs from "fs/promises";
import path from "path";

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData); //js객체로 파싱

  return data;
}

export async function getStaticProps(context) {
  // 더미데이터 중 상품 하나만 반환하고 싶음
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  //필터링
  const product = data.products.find((product) => product.id === productId);

  //product가 없으면 404페이지 띄우기
  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);

  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: "blocking",
  };
}

export default ProductDetailPage;
