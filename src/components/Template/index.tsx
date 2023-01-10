import { Layout, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { DrawerMenu } from "../DrawerMenu";
import Footer from "../FooterHeader";
import { MenuList } from "../MenuLateral";
import MenuTopo from "../MenuTopo";

import styles from "./Template.module.scss";

type Props = {
  children: React.ReactNode;
};

const Template = ({ children }: Props) => {
  return (
    <div className={styles.template}>
      {/* <MenuTopo /> */}

      <MenuList />
      <div
        className={styles.container}
        style={{ overflow: "scroll", overflowX: "hidden", height: "89vh" }}
      >
        <Content>{children}</Content>
      </div>
      <Footer />
    </div>
  );
};

export default Template;
