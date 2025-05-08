import { useState } from "react";
import { ProductSearch } from "./ProductSearch";
import { ProductTable } from "./ProductTable";
import { Product } from "./api";
import { ProductComparisonTable } from "./ProductComparisonTable";

export function ProductListPage() {
  const [comparing, setComparing] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [comparedProductIds, setComparedProductIds] = useState<string[]>([]);

  return (
    <div>
      <button
        onClick={() => {
          if (comparing) {
            setComparing(false);
          } else {
            setComparing(true);
          }
        }}
      >
        {comparing ? "Finish Comparison" : "Compare"}
      </button>
      <ProductSearch setProducts={setFilteredProducts} />
      {comparing ? (
        <ProductComparisonTable comparedProductIds={comparedProductIds} />
      ) : (
        <ProductTable
          products={filteredProducts}
          onCompareChange={(productId, compared) => {
            if (compared) {
              const newComparedIds = [];
              comparedProductIds.map((productId) =>
                newComparedIds.push(productId)
              );
              newComparedIds.push(productId);
              setComparedProductIds(newComparedIds);
            } else {
              const newComparedIds: string[] = [];
              comparedProductIds.map((comparedProductId) => {
                if (comparedProductId == productId) return;
                newComparedIds.push(comparedProductId);
              });
              setComparedProductIds(newComparedIds);
            }
          }}
        />
      )}
    </div>
  );
}
