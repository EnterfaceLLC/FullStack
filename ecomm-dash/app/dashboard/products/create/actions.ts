"use server";

//* API FN//
import { API_URL } from "@/config";
import { cookies } from "next/headers";

//* NEXTJS//
import { redirect } from "next/navigation";

//* ACTION FN//
export async function createProduct(
  name: string,
  description: string,
  price: number
) {
  let redirectURL = "/dashboard/products";
  try {
    const token = cookies().get("token")?.value;

    const res = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, price }),
    });

    if (!res.ok) {
      if (res.status === 401) {
        cookies().delete("token");
        redirectURL = "/login";
      } else {
        throw new Error("Failed to create products");
      }
    }
  } catch (error) {
    redirectURL = `/dashboard/products/create?errorMessage=${encodeURIComponent(
      "Failed to create product"
    )}`;
  } finally {
    redirect(redirectURL);
  }
}
