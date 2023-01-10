import { Layout, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { DrawerMenu } from "../../DrawerMenu";
import Footer from "../../FooterHeader";
import { MenuList } from "../../MenuLateral";
import MenuTopo from "../../MenuTopo";

import styles from "./Sistema.module.scss";

type Props = {
  children: React.ReactNode;
};

const SistemaTemplate = ({ children }: Props) => {
  return (
    <div className={styles.template}>
      <MenuTopo type="sistema" />

      <div className={styles.container}>
        <MenuList />
        <div
          style={{
            background: "#ececf2",
            borderRadius: "25px 0 0 0",
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
