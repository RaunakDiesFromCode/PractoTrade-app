export type User = {
  trader_id: string;
  username: string;
  email: string;
};

const USER_KEY = "auth_user";

// Save the user in localStorage, including trader_id
export function setUser(user: User) {
  if (typeof window !== "undefined") {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}

// Get the user from localStorage, including trader_id
export function getUser(): User | null {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(USER_KEY);
    return stored ? JSON.parse(stored) : null;
  }
  return null;
}

// Logout function removes the user from localStorage
export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(USER_KEY);
    window.location.href = "/login"; // Redirect to login page
  }
}
