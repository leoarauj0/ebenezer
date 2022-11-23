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
  const [face, setFace] = useState(false);
  const [whats, setWhats] = useState(false);
  const [yt, setYt] = useState(false);
  const [insta, setInsta] = useState(false);

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
    <>
      <div className={styles.container}>
        {/* <Space align="center"> */}
        {/* <Space align="center" size={1}> */}
        <Image
          src="/logo-menu.png"
          alt="Ebenezer Logo"
          width={"100%"}
          height={140}
          preview={false}
          // style={{ margin: "-5px" }}
        />
        <Space align="center" size={15} className={styles.social}>
          <Image
            src={face ? "/icones/face.svg" : "/icones/face-black.svg"}
            alt="Face Logo"
            width={25}
            height={25}
            preview={false}
            className={styles.face}
            onMouseOver={() => setFace(true)}
            onMouseLeave={() => setFace(false)}
            // style={{ margin: "-5px" }}
          />
          <Image
            src={insta ? "/icones/insta.svg" : "/icones/insta-black.svg"}
            alt="Face Logo"
            width={25}
            height={25}
            preview={false}
            className={styles.face}
            onMouseOver={() => setInsta(true)}
            onMouseLeave={() => setInsta(false)}
            // style={{ margin: "-5px" }}
          />
          <Image
            src={yt ? "/icones/yt.svg" : "/icones/yt-black.svg"}
            alt="Face Logo"
            width={25}
            height={25}
            preview={false}
            className={styles.face}
            onMouseOver={() => setYt(true)}
            onMouseLeave={() => setYt(false)}
            // style={{ margin: "-5px" }}
          />
          <Image
            src={whats ? "/icones/whats.svg" : "/icones/whats-black.svg"}
            alt="Face Logo"
            width={25}
            height={25}
            preview={false}
            className={styles.face}
            onMouseOver={() => setWhats(true)}
            onMouseLeave={() => setWhats(false)}
            // style={{ margin: "-5px" }}
          />
        </Space>
      </div>
      <div className={styles.menu}>
        {/* </Space> */}
        {/* <Space align="center" size={105}> */}
        <div className={styles.content}>
          <h3></h3>
          <h3>Início</h3>
          <h3>Sobre</h3>
          <h3>Contato</h3>
          <h3>Login</h3>
          <h3></h3>

          {/* </Space> */}
          {/* </Space> */}
        </div>
      </div>
    </>
  );
}
