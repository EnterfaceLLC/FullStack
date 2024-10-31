"use server";

//* API FN//
import { login, signup } from "@/api/auth";

//* NEXTJS//
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleLogin(email: string, password: string) {
  let redirectURL = `/login?errorMessage=${encodeURIComponent(
    "Failed to login"
  )}`;

  try {
    const res = await login(email, password);
    console.log("Login RESPONSE", res);

    if (res.token) {
      cookies().set("token", res.token);
      redirectURL = "/dashboard";
    }
  } catch (er) {
    console.log(er);
  } finally {
    redirect(redirectURL);
  }
}

export async function handleSignup(email: string, password: string) {
  let redirectURL = `/login?errorMessage=${encodeURIComponent(
    "Failed to signup"
  )}`;

  try {
    const res = await signup(email, password);
    console.log("SignUp RESPONSE", res);

    if (res.token) {
      cookies().set("token", res.token);
      redirectURL = "/dashboard";
    }
  } catch (er) {
    console.log(er);
  } finally {
    redirect(redirectURL);
  }
}
