import "../styles/globals.scss";
// import "antd/dist/antd.css";
// import "../styles/antd.less";
import styles from "../styles/app.module.scss";
import type { AppProps } from "next/app";
import { UsuarioContext } from "../context/UsuarioContext";
import { AuthProvider } from "../context/AuthContext";
import { ConfigProvider, theme } from "antd";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        // algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#6e3e36",
          // colorPrimary: "#9c584b",
        },
      }}
    >
      <AuthProvider>
        <UsuarioContext.Provider value={"Léo Araújo"}>
          {/* <div className={styles.wrapper}> */}
          {/* <Menu /> */}
          <main>
            <Component {...pageProps} />
          </main>
          {/* </div> */}
        </UsuarioContext.Provider>
      </AuthProvider>
    </ConfigProvider>
  );
}
