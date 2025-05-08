import { useEffect, useState } from "react";
import { Product } from "./api";

export function ProductTable(props: {
  products: Product[];
  onCompareChange: (productId: string, compared: boolean) => void;
}) {
  const { products, onCompareChange } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Compare</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, i) => (
          <ProductRow
            key={i}
            products={products}
            productId={product.id}
            onCompareChange={(compared) => {
              onCompareChange(product.id, compared);
            }}
          />
        ))}
      </tbody>
    </table>
  );
}

function ProductRow(props: {
  products: Product[];
  productId: string;
  onCompareChange: (compared: boolean) => void;
}) {
  const { products, productId, onCompareChange } = props;
  const product = products[products.findIndex((p) => p.id == productId)];

  const [compared, setCompared] = useState<boolean>(false);

  useEffect(() => {
    onCompareChange(compared);
  }, [compared]);

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>
        <input
          type="checkbox"
          checked={compared}
          onChange={(e) => setCompared(e.currentTarget.checked)}
        />
      </td>
    </tr>
  );
}
