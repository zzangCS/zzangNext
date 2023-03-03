import fs from "fs/promises";
import path from "path";
import Link from "next/link";

function HomePage(props) {
  const { products } = props; //props객체의 products 키를 가져올 수 있음
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  // process는 노드의 전역객체
  console.log("Re generation");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData); //js객체로 파싱
  return {
    props: {
      products: data.products,
    },
    revalidate: 10, //초 단위: 재생성될 시간
    // notFound:true, 404페이지 반환-데이터패칭 실패시
    // redirect:{destination:'/no-data'} 리다이렉트-데이터패칭 실패시
  };
}

export default HomePage;
