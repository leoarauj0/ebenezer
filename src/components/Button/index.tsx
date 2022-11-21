/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import { Image, Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

type Props = {
  texto: string;
  tipo:
    | "link"
    | "text"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined;
};

export default function CButton(props: Props) {
  return (
    <>
      <div className={styles.container}>
        <button className={styles.button}>
          {props.texto} <div className={styles.fill}></div>
        </button>
      </div>
    </>
  );
}
