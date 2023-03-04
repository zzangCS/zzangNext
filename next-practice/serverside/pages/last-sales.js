import { useEffect, useState } from "react/cjs/react.production.min";
import useSWR from "swr";

const LastSales = (props) => {
  const [sales, setSales] = useState(props.sales);
  // 로딩 fallback
  //   const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    "https://next-project-f8b87-default-rtdb.firebaseio.com/sales.json"
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("https://next-project-f8b87-default-rtdb.firebaseio.com/sales.json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const transformedSales = [];

  //         for (const key in data) {
  //           transformedSales.push({
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }

  //         setSales(transformedSales);
  //         setIsLoading(false);
  //       });
  //   }, []);
  if (error) {
    return <p>Failed to load...</p>;
  }

  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username}- ${sale.volume}
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    //프로미스 체인 반환
    "https://next-project-f8b87-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();

  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return {
    props: {
      sales: transformedSales,
    },
    revalidate: 10,
  };
}

export default LastSales;
