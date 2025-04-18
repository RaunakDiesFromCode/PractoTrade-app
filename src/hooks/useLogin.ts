// import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export function useLogin() {
  // const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useAuth();

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

      setUser(data); // now updates global state too
      window.location.href = "/home"; // hard redirect
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
