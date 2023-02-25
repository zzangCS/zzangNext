import fs from 'fs/promises';
import path from 'path';

function HomePage(props) {
  const { products } = props; //props객체의 products 키를 가져올 수 있음
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  // process는 노드의 전역객체
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData); //js객체로 파싱
  return {
    props: {
      products: data.products
    },
  };
}

export default HomePage;
