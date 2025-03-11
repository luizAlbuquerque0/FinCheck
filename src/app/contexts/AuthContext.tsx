import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { localStorageKeys } from "../config/localStorageKeys";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/UserServices";
import { httpClient } from "../services/HttpClient";
import toast from "react-hot-toast";
import { PageLoader } from "../../view/components/PageLoader";

interface AuthContextValue {
  signedIn: boolean;
  signIn: (accessToken: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(() => {
    const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
    return !!accessToken;
  });

  const { isError, data, isFetching, isSuccess } = useQuery({
    queryKey: ["users", "me"],
    queryFn: () => usersService.me(),
    enabled: signedIn,
  });

  const signIn = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    setSignedIn(false);
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error("Sessão expirada, faça login novamente");
      signOut();
    }
  }, [isError, signOut]);

  return (
    <AuthContext.Provider
      value={{ signedIn: isSuccess && signedIn, signIn, signOut }}
    >
      <PageLoader isLoading={isFetching} />
      {children}
    </AuthContext.Provider>
  );
}
