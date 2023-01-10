import { Col, Image, Layout, Row, Button, Space } from "antd";
import { Content } from "antd/lib/layout/layout";
import { DrawerMenu } from "../../DrawerMenu";
import FooterHeader from "../../FooterHeader";
import { MenuList } from "../../MenuLateral";
import MenuTopo from "../../MenuTopo";

import styles from "./Site.module.scss";

type Props = {
  children: React.ReactNode;
};

const SiteTemplate = ({ children }: Props) => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <MenuTopo type="site" />
        <div
          className={styles.container}
          style={
            {
              // overflow: "scroll",
              // overflowX: "hidden",
              // height: "69vh",
            }
          }
        ></div>
        <FooterHeader />
      </div>

      <div
        style={{
          padding: "1rem 8rem",
          backgroundColor: "#ebeef0",
          backgroundImage: "url(/oracao.svg)",
          // backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Row justify="center">
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={8}
            style={{
              padding: "1rem",
            }}
          >
            <Button type="primary"> Últimas Postagens </Button>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Space align="center" size={25}>
              <h3>Formações</h3>
              <h3>Pregações</h3>
              <h3>Liturgia</h3>
              <h3>Formações</h3>
              <h3>Pregações</h3>
              <h3>Liturgia</h3>
            </Space>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col
            xs={24}
            sm={24}
            md={6}
            lg={6}
            xl={6}
            style={{
              padding: "1rem",
            }}
          >
            <div
              style={{
                backgroundImage: "url(/header/home2.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "30vh",

                borderRadius: "15px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",

                boxShadow: "2px 8px 10px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(2,0,25,0) 0%, rgba(2,0,25,0.15730042016806722) 5%, rgba(1,0,11,0.3841911764705882) 28%, rgba(0,0,0,0.5214460784313726) 60%)",
                  width: "100vw",
                  height: "15vh",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  borderRadius: "0 0 15px 15px",

                  padding: "0 1rem",
                }}
              >
                <h3
                  style={{
                    color: "#ffffff",
                  }}
                >
                  <span>Formação com Manoel Guilherme</span>
                  <br />
                  <b>10/01/2023</b>
                </h3>
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={6}
            lg={6}
            xl={6}
            style={{
              padding: "1rem",
            }}
          >
            <div
              style={{
                backgroundImage:
                  "url(https://santonamorooficial.com/wp-content/uploads/2020/08/namoro-santo-600x320.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "30vh",

                borderRadius: "15px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",

                boxShadow: "2px 8px 10px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(2,0,25,0) 0%, rgba(2,0,25,0.15730042016806722) 5%, rgba(1,0,11,0.3841911764705882) 28%, rgba(0,0,0,0.5214460784313726) 60%)",
                  width: "100vw",
                  height: "15vh",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  borderRadius: "0 0 15px 15px",

                  padding: "0 1rem",
                }}
              >
                <h3
                  style={{
                    color: "#ffffff",
                  }}
                >
                  <span>Namoro Santo</span>
                  <br />
                  <b>10/01/2023</b>
                </h3>
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={6}
            lg={6}
            xl={6}
            style={{
              padding: "1rem",
            }}
          >
            <div
              style={{
                backgroundImage: "url(/header/home2.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "30vh",

                borderRadius: "15px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",

                boxShadow: "2px 8px 10px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(2,0,25,0) 0%, rgba(2,0,25,0.15730042016806722) 5%, rgba(1,0,11,0.3841911764705882) 28%, rgba(0,0,0,0.5214460784313726) 60%)",
                  width: "100vw",
                  height: "15vh",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  borderRadius: "0 0 15px 15px",

                  padding: "0 1rem",
                }}
              >
                <h3
                  style={{
                    color: "#ffffff",
                  }}
                >
                  <span>Formação com Manoel Guilherme</span>
                  <br />
                  <b>10/01/2023</b>
                </h3>
              </div>
            </div>
          </Col>
        </Row>

        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
        <p>lol</p>
      </div>
      <Content>{children}</Content>
    </div>
  );
};

export default SiteTemplate;
