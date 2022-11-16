import axios from "axios";
import Router from "next/router";
import { createContext, ReactNode, useState } from "react";
import { api } from "../../services/api";
import qs from "qs";

type SignInCredenciais = {
  username: string;
  password: string;
};

type AuthContextData = {
  signIn(credenciais: SignInCredenciais): Promise<void>;
  autenticado: boolean;
};

type Usuario = {
  username;
  roles;
  permissions;
};

type AuthProviderProps = { children: ReactNode };

export const AutenticadoContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<Usuario>();

  const autenticado = false;

  //sigle login oauth2?

  const CLIENT_ID = "siisp-app";
  const CLIENT_SECRET = "secret";

  async function signIn({ username, password }: SignInCredenciais) {
    const headers = {
      Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const data = `username=${username}&password=${password}&grant_type=password`;

    try {
      console.log("data: " + data);
      const response = await api.post(
        "https://sistemas.seap.ma.gov.br/oauth/token",
        data,
        { headers }
      );
      const { permissions, roles } = response.data();

      console.log(response.data.roles);

      setUsuario({ username, roles, permissions });

      Router.push("/dashboard");
      console.warn(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AutenticadoContext.Provider value={{ signIn, autenticado }}>
      {children}
    </AutenticadoContext.Provider>
  );
}
