import { useEffect, useState } from "react";
import { Product, searchProducts } from "./api";

export function ProductSearch(props: {
  setProducts: (products: Product[]) => void;
}) {
  const { setProducts } = props;

  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    searchProducts(query).then(setProducts);
  }, [query]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.currentTarget.value)}
    />
  );
}
