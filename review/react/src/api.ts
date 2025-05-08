export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
}

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`/api/products`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const json = await response.json();
  return json as Product[];
}

export async function searchProducts(query: string): Promise<Product[]> {
  const response = await fetch(`/api/products?search=${query}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const json = await response.json();
  return json as Product[];
}
