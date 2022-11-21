/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import { Image, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

type Props = {
  // login: boolean;
  // text: string;
};

export default function Footer(props: Props) {
  const usuario = useContext(UsuarioContext);
  const dataAtual = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  return (
    <footer className={styles.footer}>
      {/* <img
        src="/seap-adv/logo-header.svg"
        alt="logo"
        style={{ width: "15rem" }}
      /> */}
      {/* <h3>{props.text}</h3> */}
      {/* <span className={styles.data}>{dataAtual}</span> */}

      <img
        src="/seap-adv/logo-footer.svg"
        alt="logo"
        style={{ width: "10rem", marginLeft: "-20px" }}
      />
      {/* <span>Secretaria de Estado de Administração Penitenciaria</span> */}

      <div className={styles.usuario}>
        <span className={styles.data}>{dataAtual}</span>
      </div>
    </footer>
  );
}
