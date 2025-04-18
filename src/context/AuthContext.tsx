"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User, getUser, setUser as storeUser } from "@/lib/auth";

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null);

  useEffect(() => {
    const localUser = getUser();
    if (localUser) {
      setUserState(localUser);
    }
  }, []);

  const setUser = (user: User | null) => {
    setUserState(user);
    if (user) storeUser(user);
    else localStorage.removeItem("auth_user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
