import { Layout, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { DrawerMenu } from "../../DrawerMenu";
import Footer from "../../Footer";
import { MenuList } from "../../Menu";
import CMenu2 from "../../Menu2";

import styles from "./Sistema.module.scss";

type Props = {
  children: React.ReactNode;
};

const SistemaTemplate = ({ children }: Props) => {
  return (
    <div className={styles.template}>
      <CMenu2 />

      <div className={styles.container}>
        <MenuList />
        <div
          style={{
            background: "#eff3f7",
            borderRadius: "35px 0 0 0",
            width: `100vw`,
          }}
        >
          <div
            className={styles.main}
            style={{
              overflow: "scroll",
              overflowX: "auto",
              height: `93vh`,
            }}
          >
            <Content>{children}</Content>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SistemaTemplate;
