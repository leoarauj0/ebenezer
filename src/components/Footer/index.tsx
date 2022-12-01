/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import { Image, Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

type Props = {
  // login: boolean;
  // text: string;
};

export default function Footer(props: Props) {
  const [face, setFace] = useState(false);
  const [whats, setWhats] = useState(false);
  const [yt, setYt] = useState(false);
  const [insta, setInsta] = useState(false);

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

      {/* <img
        src="/seap-adv/logo-footer.svg"
        alt="logo"
        style={{ width: "10rem", marginLeft: "-20px" }}
      /> */}
      {/* <span>Secretaria de Estado de Administração Penitenciaria</span> */}

      {/* <span className={styles.data}>{dataAtual}</span> */}
      <div className={styles.usuario}>
        <Space align="end" size={25}>
          <Image
            src={face ? "/icones/face.svg" : "/icones/face-black.svg"}
            alt="Face Logo"
            width={20}
            height={20}
            preview={false}
            className={styles.face}
            onMouseOver={() => setFace(true)}
            onMouseLeave={() => setFace(false)}
            // style={{ margin: "-5px" }}
          />
          <Image
            src={insta ? "/icones/insta.svg" : "/icones/insta-black.svg"}
            alt="Face Logo"
            width={20}
            height={20}
            preview={false}
            className={styles.face}
            onMouseOver={() => setInsta(true)}
            onMouseLeave={() => setInsta(false)}
            // style={{ margin: "-5px" }}
          />
          <Image
            src={yt ? "/icones/yt.svg" : "/icones/yt-black.svg"}
            alt="Face Logo"
            width={20}
            height={20}
            preview={false}
            className={styles.face}
            onMouseOver={() => setYt(true)}
            onMouseLeave={() => setYt(false)}
            // style={{ margin: "-5px" }}
          />
          <Image
            src={whats ? "/icones/whats.svg" : "/icones/whats-black.svg"}
            alt="Face Logo"
            width={20}
            height={20}
            preview={false}
            className={styles.face}
            onMouseOver={() => setWhats(true)}
            onMouseLeave={() => setWhats(false)}
            // style={{ margin: "-5px" }}
          />
        </Space>
      </div>
    </footer>
  );
}
