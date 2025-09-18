import api, { setAuthToken } from "@/lib/api";

type RegisterPayload = { username?: string; email: string; password: string };
type LoginPayload = { identifier: string; password: string };

export async function register(data: RegisterPayload) {
  // Strapi default: POST /auth/local/register
  const res = await api.post("/auth/local/register", data);
  return res.data;
}

export async function login(data: LoginPayload) {
  // Strapi default: POST /auth/local
  const res = await api.post("/auth/local", data);
  const token = res.data.jwt;
  if (token) setAuthToken(token);
  return res.data;
}

export async function getSession() {
  // Example: Strapi user endpoint (requires Authorization)
  try {
    const res = await api.get("/users/me");
    return res.data;
  } catch (err) {
    return null;
  }
}

export function logout() {
  setAuthToken(undefined);
  // If you store token in cookie, remove it server-side; frontend helper just clears header.
}
