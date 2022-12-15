import { Layout, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { DrawerMenu } from "../DrawerMenu";
import Footer from "../Footer";
import { MenuList } from "../Menu";
import CMenu2 from "../Menu2";

import styles from "./Template.module.scss";

type Props = {
  children: React.ReactNode;
};

const Template = ({ children }: Props) => {
  return (
    <div className={styles.template}>
      <CMenu2 />

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
