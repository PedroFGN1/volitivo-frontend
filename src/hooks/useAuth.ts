import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export function useAuth() {
  const { user, isAuthenticated, signIn, signOut } = useContext(AuthContext);

  return { user, isAuthenticated, signIn, signOut };
}
