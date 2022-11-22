/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import { Image, Avatar, Button, Space } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  UserOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.scss";

type Props = {
  // texto: string;
};

export default function CMenu(props: Props) {
  const [menu, setMenu] = useState(true);

  const mudaMenu = () => {
    if (window.scrollY >= 80) {
      setMenu(false);
      console.log(true);
    } else {
      setMenu(true);

      console.log(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", mudaMenu);
  }

  return (
    <div className={menu ? styles.container : styles.containerActive}>
      {/* <Space align="center"> */}
      <Space align="center" size={1}>
        <Image
          src="/logo-menu.png"
          alt="Ebenezer Logo"
          width={300}
          height={100}
          preview={false}
          style={{ margin: "-5px" }}
        />
        {/* <Image
          src="/logo-colorida.svg"
          alt="Ebenezer Logo"
          width={50}
          height={50}
          preview={false}
          style={{ margin: "-5px" }}
        />
        <h3>Comunidade Católica Ebenezer</h3> */}
      </Space>
      <Space align="center" size={45}>
        <h3>Início</h3>
        <h3>Sobre</h3>
        <h3>Contato</h3>
        <h3>Login</h3>
        <Space align="center" size={10}>
          <h3>
            <FacebookOutlined />
          </h3>
          <h3>
            <InstagramOutlined />
          </h3>
          <h3>
            <YoutubeOutlined />
          </h3>
        </Space>
      </Space>
      {/* </Space> */}
    </div>
  );
}
