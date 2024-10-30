const API_URL = process.env.NEXT_PUBLIC_API_URL;
// const API_URL =
//   "https://d1b393cf-5b4c-472d-ab78-2546de141354.us-east-1.cloud.genez.io";

export async function listProducts() {
  console.log("URL:", API_URL);
  const res = await fetch(`${API_URL}/products`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Error");
  }
  return data;
}

export async function fetchProductById(id: number) {
  const res = await fetch(`${API_URL}/products/${id}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Error");
  }
  return data;
}
