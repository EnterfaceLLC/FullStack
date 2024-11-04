//* API CONNECTION//
import { API_URL } from "@/config";
import { cookies } from "next/headers";

//* FETCH ORDER FN//
export async function fetchOrders() {
  const token = cookies().get("token")?.value;

  try {
    const res = await fetch(`${API_URL}/orders`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token ?? "",
      },
      //   body: JSON.stringify({ order: {}, items }),
    });
    console.log("ORDERS API TOKEN", token);

    if (!res.ok) {
      console.log(res);
      throw new Error("Failed to fetch orders");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function fetchOrder(id: number) {
  const token = cookies().get("token")?.value;

  try {
    const res = await fetch(`${API_URL}/orders/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token ?? "",
      },
      //   body: JSON.stringify({ order: {}, items }),
    });
    console.log("ORDERS API TOKEN", token);

    if (!res.ok) {
      console.log(res);
      throw new Error("Failed to fetch orders");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
