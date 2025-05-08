import { useEffect, useState } from "react";
import { fetchProducts, Product } from "./api";

export function ProductComparisonTable(props: {
  comparedProductIds: string[];
}) {
  const { comparedProductIds } = props;

  const [products, setProducts] = useState<Product[] | undefined>(undefined);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          {comparedProductIds.map((productId, i) => (
            <th key={i}>
              {products?.find((product) => product.id == productId)?.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Description</th>
          {comparedProductIds.map((productId, i) => (
            <td key={i}>
              {
                products?.find((product) => product.id === productId)
                  ?.description
              }
            </td>
          ))}
        </tr>
        <tr>
          <th>Price</th>
          {comparedProductIds.map((productId, i) => (
            <td key={i}>
              {products?.find((product) => product.id === productId)?.price}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
