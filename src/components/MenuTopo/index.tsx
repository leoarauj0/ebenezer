/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from "react";
// import { UsuarioContext } from "../../context/UsuarioContext";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import type { BadgeProps } from "antd";
import {
  Image,
  Avatar,
  Button,
  Space,
  Row,
  Col,
  DatePicker,
  Popover,
  Calendar,
  Badge,
} from "antd";

import {
  FacebookOutlined,
  InstagramOutlined,
  UserOutlined,
  YoutubeOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.scss";
import type { Dayjs } from "dayjs";

type Props = {
  type: string;
};

const dataSemana = format(new Date(), "eeeeee", {
  locale: ptBR,
});

const dataAtual = format(new Date(), "d MMM", {
  locale: ptBR,
});

// ======================================================================
// Calendario
// ======================================================================

const getListData = (value: Dayjs) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
        { type: "error", content: "This is error event." },
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "This is warning event" },
        { type: "success", content: "This is very long usual event。。...." },
        { type: "error", content: "This is error event 1." },
        { type: "error", content: "This is error event 2." },
        { type: "error", content: "This is error event 3." },
        { type: "error", content: "This is error event 4." },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};
// ======================================================================

export default function MenuTopo(props: Props) {
  const [menu, setMenu] = useState(true);

  // ======================================================================
  // Calendario
  // ======================================================================
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };
  // ======================================================================

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
      {props.type === "sistema" ? (
        <Row
          className={
            // (menu ? styles.container : styles.containerActive, styles.sistema)
            styles.sistema
          }
          justify="center"
          align="middle"
        >
          <Col
            xs={2}
            sm={4}
            md={7}
            lg={7}
            xl={7}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "end",
              marginLeft: "-3rem",
            }}
          >
            <Image
              src="/logo-texto-colorida.svg"
              alt="Ebenezer Logo"
              width={"10rem"}
              height={"4rem"}
              preview={false}
              style={{ marginBottom: "-5px" }}
            />
            {/* <h3
            // style={{
            //   color: "#e9836f",
            // }}
            >
              <span>comcat</span>
              <b>ebenezer</b>
            </h3>*/}
          </Col>

          <Col
            xs={2}
            sm={8}
            md={8}
            lg={8}
            xl={8}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Popover
              content={
                <div style={{ width: 1300 }}>
                  {/* <Calendar fullscreen={false} /> */}
                  <Calendar
                    dateCellRender={dateCellRender}
                    monthCellRender={monthCellRender}
                  />
                </div>
              }
            >
              <h3 style={{ textTransform: "capitalize" }}>
                <span style={{ marginRight: "5px" }}>{dataSemana}</span>
                {dataAtual}
              </h3>
            </Popover>
          </Col>

          <Col
            xs={2}
            sm={8}
            md={8}
            lg={8}
            xl={8}
            style={{ display: "flex", justifyContent: "end" }}
          >
            <Space align="center" size={15}>
              <h3>Nome</h3>
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Space>
          </Col>
        </Row>
      ) : (
        <Row className={styles.site} justify="center" align="middle">
          <Col
            xs={2}
            sm={4}
            md={12}
            lg={12}
            xl={12}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "end",
              marginLeft: "5rem",
            }}
          >
            <Image
              src="/logo-texto-colorida.svg"
              alt="Ebenezer Logo"
              width={"12rem"}
              height={"6rem"}
              preview={false}
              style={{ marginBottom: "-5px" }}
            />

            {/* <h3>
              <span>comcat</span>
              <b>ebenezer</b>
            </h3> */}
          </Col>

          <Col
            xs={2}
            sm={4}
            md={8}
            lg={8}
            xl={8}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Space align="center" size={45}>
              <h3>Início</h3>
              <h3>Sobre</h3>
              <h3>Contato</h3>
              <h3>Login</h3>
            </Space>
          </Col>
        </Row>
      )}
    </>
  );
}
