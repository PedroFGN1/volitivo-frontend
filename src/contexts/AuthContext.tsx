import { api } from "@/services/apiClient";
import { createContext, useEffect, useState } from "react";
import Router from "next/router";
import { setCookie, parseCookies, destroyCookie } from "nookies";

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  user: User | undefined;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type User = {
  email: string;
  permissions: string[];
  roles: string[];
};

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export const signOut = () => {
  destroyCookie(undefined, "nextauth.token");
  destroyCookie(undefined, "nextauth.refreshToken");

  authChannel.postMessage("signOut");

  Router.push("/");
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    authChannel = new BroadcastChannel("auth");

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case "signOut":
          // signOut();
          destroyCookie(undefined, "nextauth.token");
          destroyCookie(undefined, "nextauth.refreshToken");
          Router.push("/");
          break;
        default:
          break;
      }
    };
  }, []);

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();

    if (token) {
      api
        .get("/me")
        .then((response) => {
          const { email, permissions, roles } = response.data;

          setUser({ email, permissions, roles });
        })
        .catch((err) => {
          console.log("Error: AuthProvider");
          console.log(err);

          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/sessions", {
        email,
        password,
      });

      // console.log(response.data);

      const { token, refreshToken, permissions, roles } = response.data;

      setUser({
        email,
        permissions,
        roles,
      });

      setCookie(undefined, "nextauth.token", token, {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });

      setCookie(undefined, "nextauth.refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      Router.push("/dashboard");
    } catch (err) {
      console.log("Error: signIn");
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}
