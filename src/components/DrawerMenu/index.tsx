/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./styles.module.scss";

import { Layout, Menu, MenuProps } from "antd";

const { Sider } = Layout;

import {
  HomeOutlined,
  DownOutlined,
  UpOutlined,
  LeftOutlined,
  VerticalAlignTopOutlined,
  UpCircleOutlined,
  MenuUnfoldOutlined,
  LoginOutlined,
  RightOutlined,
  MailOutlined,
  DesktopOutlined,
  PicLeftOutlined,
  CheckCircleOutlined,
  IssuesCloseOutlined,
  UnorderedListOutlined,
  SnippetsOutlined,
  UploadOutlined,
  ContactsOutlined,
  ContainerOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export function DrawerMenu() {
  const [fechado, setFechado] = useState(false);
  const [selecionado, setSelecionado] = useState("");
  const [styleMenu, setStyleMenu] = useState({
    width: "16rem",
    opacity: 1,
    scale: "scale(1)",
  });

  const mudaMenu = () => {
    setFechado(!fechado);
    // fechado === false
    //   ? setStyleMenu({ width: "16rem", opacity: 1, scale: "scale(1)" })
    //   : setStyleMenu({ width: "5rem", opacity: 0, scale: "scale(0)" });
  };

  useEffect(() => {
    fechado === false
      ? setStyleMenu({ width: "16rem", opacity: 1, scale: "scale(1)" })
      : setStyleMenu({ width: "6.5rem", opacity: 0, scale: "scale(0)" });
  }, [fechado]);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <div
      className={styles.menuContainer}
      style={{ width: `${styleMenu.width}`, transition: "width 0.5s" }}
    >
      <div className={styles.menuBody}>
        {fechado === true ? (
          <img
            width={38}
            src="/seap-adv/logo.svg"
            style={{
              margin: "0 0 3rem -10px",
            }}
          />
        ) : (
          <img
            width={200}
            src="/seap-adv/logo-header-branca.svg"
            style={{
              margin: "0 0 3rem -10px",
            }}
          />
        )}

        {/* <Menu
          onClick={onClick}
          style={{ width: 256, background: "#040622", color: "#ffffff" }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        /> */}

        <div className={styles.menu}>
          <p>IDENTIFICAÇÃO</p>
        </div>

        <div className={styles.submenu}>
          {/* <Link href={`/arquivos/documentos`}> */}
          {/* <a
              className={styles.link}
              onClick={() => setSelecionado("documentos")}
            > */}
          {selecionado === "documentos" ? (
            <>
              <SnippetsOutlined
                className={styles.icon}
                style={{ color: "#fff" }}
              />
              <p
                style={{
                  opacity: `${styleMenu.opacity}`,
                  transition: "opacity 0.8s",
                  color: "#fff",
                }}
              >
                Documentos Pessoais
              </p>
            </>
          ) : (
            <>
              <SnippetsOutlined className={styles.icon} />
              <p
                style={{
                  opacity: `${styleMenu.opacity}`,
                  transition: "opacity 0.8s",
                }}
              >
                Documentos Pessoais
              </p>
            </>
          )}
          {/* </a> */}
          {/* </Link> */}
        </div>

        <div className={styles.menu}>
          <p>VISITAS</p>
        </div>

        <div className={styles.submenu}>
          {/* <Link href={`/visitas/agendamento`}> */}
          {/* <a
              className={styles.link}
              onClick={() => setSelecionado("agendamento")}
            > */}
          {selecionado === "agendamento" ? (
            <>
              <CheckCircleOutlined
                className={styles.icon}
                style={{ color: "#fff" }}
              />
              <p
                style={{
                  opacity: `${styleMenu.opacity}`,
                  transition: "opacity 0.8s",
                  color: "#fff",
                }}
              >
                Solicitar Visita
              </p>
            </>
          ) : (
            <>
              <CheckCircleOutlined className={styles.icon} />
              <p
                style={{
                  opacity: `${styleMenu.opacity}`,
                  transition: "opacity 0.8s",
                }}
              >
                Solicitar Visita
              </p>
            </>
          )}
          {/* </a> */}
          {/* </Link>
          <Link href={`/visitas/visitasAgendadas`}> */}
          {/* <a className={styles.link}> */}
          <PicLeftOutlined className={styles.icon} />
          <p
            style={{
              opacity: `${styleMenu.opacity}`,
              transition: "opacity 0.8s",
            }}
          >
            Histórico
          </p>
          {/* </a> */}
          {/* </Link>
          <Link href={`/visitas/justificativa`}> */}
          {/* <a className={styles.link}> */}
          <IssuesCloseOutlined className={styles.icon} />
          <p
            style={{
              opacity: `${styleMenu.opacity}`,
              transition: "opacity 0.8s",
              // transform: `${styleMenu.scale}`,
            }}
          >
            Justificativas
          </p>
          {/* </a> */}
          {/* </Link> */}

          {/* <Link href={`/login`}>
            <a className={styles.link}>
              <DesktopOutlined className={styles.icon} />
              <p
                style={{
                  opacity: `${styleMenu.opacity}`,
                  transition: "opacity 0.8s",
                }}
              >
                Login
              </p>
            </a>
          </Link> */}

          {/* <Link href={`/login`}>
            <a className={styles.link}>
              <LoginOutlined className={styles.icon} />
              <p
                style={{
                  opacity: `${styleMenu.opacity}`,
                  transition: "opacity 0.8s",
                }}
              >
                Login
              </p>
            </a>
          </Link> */}
        </div>

        <div className={styles.menu}>
          <p>VÍNCULOS</p>
        </div>

        <div className={styles.submenu}>
          <Link href={`/vinculos/solicitacoes`}>
            {/* <a className={styles.link}> */}
            <MenuUnfoldOutlined className={styles.icon} />
            <p
              style={{
                opacity: `${styleMenu.opacity}`,
                transition: "opacity 0.8s",
                // transform: `${styleMenu.scale}`,
              }}
            >
              Solicitar Vínculo
            </p>
            {/* </a> */}
          </Link>
          {/* <Link href={`/vinculos/meusVinculos`}>
            <a className={styles.link}>
              <UpCircleOutlined />
              <UnorderedListOutlined className={styles.icon} />
              <p
                style={{
                  opacity: `${styleMenu.opacity}`,
                  transition: "opacity 0.8s",
                }}
              >
                Meus Vinculos
              </p>
            </a>
          </Link> */}
        </div>

        <div className={styles.menu}>
          <p>CERTIDÕES</p>
        </div>

        <div className={styles.submenu}>
          <Link href={`/conduta/solicitacoes`}>
            {/* <a className={styles.link}> */}
            <ContainerOutlined className={styles.icon} />
            <p
              style={{
                opacity: `${styleMenu.opacity}`,
                transition: "opacity 0.8s",
                // transform: `${styleMenu.scale}`,
              }}
            >
              Conduta Carcerária
            </p>
            {/* </a> */}
          </Link>
        </div>

        <div className={styles.menu}>
          <p>DECISÕES</p>
        </div>

        <div className={styles.submenu}>
          <Link href={`/decisoes/acompanhamentos`}>
            {/* <a className={styles.link}> */}
            <OrderedListOutlined className={styles.icon} />
            <p
              style={{
                opacity: `${styleMenu.opacity}`,
                transition: "opacity 0.8s",
                // transform: `${styleMenu.scale}`,
              }}
            >
              Acompanhamentos
            </p>
            {/* </a> */}
          </Link>
        </div>

        <div className={styles.menu}>
          <p>CONTATOS</p>
        </div>

        <div className={styles.submenu}>
          {/* <Link href={`/contatos/diretores`}> */}
          {/* <a className={styles.link}> */}
          <ContactsOutlined className={styles.icon} />
          <p
            style={{
              opacity: `${styleMenu.opacity}`,
              transition: "opacity 0.8s",
              // transform: `${styleMenu.scale}`,
            }}
          >
            Diretores
          </p>
          {/* </a> */}
          {/* </Link> */}
        </div>
      </div>
      {/* <a
        className={styles.link}
        onClick={() => {
          mudaMenu();
        }}
      > */}
      {fechado === true ? (
        <LeftOutlined className={styles.icon} />
      ) : (
        <RightOutlined className={styles.icon} />
      )}
      <p
        style={{
          opacity: `${styleMenu.opacity}`,
          transition: "opacity 0.8s",
        }}
      >
        Fechar
      </p>
      {/* </a> */}
    </div>
  );
}
