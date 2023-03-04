import { useEffect, useState } from "react/cjs/react.production.min";
import useSWR from "swr";

const LastSales = () => {
  const [sales, setSales] = useState();
  // 로딩 fallback
  const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    "https://next-project-f8b87-default-rtdb.firebaseio.com/sales.json"
  );

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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No data yet</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sales.id}></li>
      ))}
    </ul>
  );
};

export default LastSales;
