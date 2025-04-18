// lib/auth.ts
export type User = {
  trader_id: string;
  username: string;
};

const USER_KEY = "auth_user";

export function setUser(user: User) {
  if (typeof window !== "undefined") {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}

export function getUser(): User | null {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(USER_KEY);
    return stored ? JSON.parse(stored) : null;
  }
  return null;
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth_user");
    window.location.href = "/login"; // or router.push if you're in a hook
  }
}
