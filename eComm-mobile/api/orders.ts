//* API CONNECTION//
const API_URL = process.env.EXPO_PUBLIC_API_URL;

//* ZUSTAND//
import { useAuth } from "@/store/authStore";

//* CREATE ORDER FN//
export async function createOrder(items: any[]) {
  const token = useAuth.getState().token;

  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ order: {}, items }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.log(data);
    throw new Error("Failed!");
  }
  return data;
}
