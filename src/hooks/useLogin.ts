import { useState } from "react";
import { useAuth } from "@/context/AuthContext"; // Ensure this is properly configured

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useAuth(); // Assuming you have a context for global state

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        "https://implicit-electra-sagnify-8514ada8.koyeb.app/api/login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      // Save user details including trader_id
      setUser({
        trader_id: data.trader_id,
        username: data.username,
        email: data.email,
      });

      // Redirect to home page after login
      window.location.href = "/home";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
