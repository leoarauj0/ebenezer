import Link from "next/link";
import styles from "./styles.module.scss";
import {
  Input,
  Button,
  Tooltip,
  Modal,
  Form,
  Radio,
  Spin,
  Popconfirm,
} from "antd";
import FormItem from "antd/lib/form/FormItem";
const { Search } = Input;

import { Layout } from "antd";

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
  DesktopOutlined,
  BarChartOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

export function MenuList() {
  const [modalCadastro, setModalCadastro] = useState(false);
  const [fechado, setFechado] = useState(false);
  const [styleMenu, setStyleMenu] = useState({
    width: "16rem",
    opacity: 1,
    scale: "scale(1)",
  });

  const mudaMenu = () => {
    setFechado(!fechado);
    fechado === false
      ? setStyleMenu({ width: "16rem", opacity: 1, scale: "scale(1)" })
      : setStyleMenu({ width: "5rem", opacity: 0, scale: "scale(0)" });
  };

  // useEffect(() => {
  //   fechado === true ? setWidthMenu({ width: "5rem" }) : { width: "16rem" };
  // }, [fechado]);

  return (
    <div
      className={styles.menuContainer}
      style={{ width: `${styleMenu.width}`, transition: "width 0.5s" }}
    >
      {/* aula 2 - 53min */}

      <div>
        <Link legacyBehavior href={`/home`}>
          <a className={styles.link}>
            {/* <HomeOutlined className={styles.icon} /> */}
            <BarChartOutlined className={styles.icon} />
            <h3
              style={{
                opacity: `${styleMenu.opacity}`,
                transition: "opacity 0.8s",
              }}
            >
              Início
            </h3>
          </a>
        </Link>
        <br />
        <Link legacyBehavior href={`/senhas`}>
          <a className={styles.link}>
            <FileDoneOutlined className={styles.icon} />
            <h3
              style={{
                opacity: `${styleMenu.opacity}`,
                transition: "opacity 0.8s",
              }}
            >
              Senhas
            </h3>
          </a>
        </Link>
        <br />
        <Link legacyBehavior href={`/painel`}>
          <a className={styles.link} target="_blank" rel="noopener noreferrer">
            <DesktopOutlined className={styles.icon} />
            <h3
              style={{
                opacity: `${styleMenu.opacity}`,
                transition: "opacity 0.8s",
              }}
            >
              Painel
            </h3>
          </a>
        </Link>
        <br />

        {/* <Link legacyBehavior href={`/login`}>
          <a className={styles.link}>
            <LoginOutlined className={styles.icon} />
            <h3
              style={{
                opacity: `${styleMenu.opacity}`,
                transition: "opacity 0.8s",
              }}
            >
              Login
            </h3>
          </a>
        </Link> */}
      </div>
      <a
        className={styles.link}
        onClick={() => {
          mudaMenu();
        }}
      >
        {fechado === true ? (
          <LeftOutlined className={styles.icon} />
        ) : (
          <RightOutlined className={styles.icon} />
        )}
        <h3
          style={{
            opacity: `${styleMenu.opacity}`,
            transition: "opacity 0.8s",
          }}
        >
          Fechar
        </h3>
      </a>
      {/* <Modal
        title="Cadastro de Usuário"
        visible={modalCadastro}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
        footer={
          [
            // <Button
            //   key="submit"
            //   type="primary"
            //   // loading={loading}
            //   onClick={handleOk}
            // >
            //   Submit
            // </Button>,
          ]
        }
      >
        <Spin indicator={antIcon} spinning={loading}>
          <Form
            // {...formItemLayout}
            layout="vertical"
            form={form}
            name="cadastroUsuario"
            onFinish={handleOk}
            // initialValues={{ layout: formLayout }}
            // onValuesChange={onFormLayoutChange}
          >
            <h2>Cadastro de Usuário:</h2>
            <FormItem name="tipoPessoa" label="">
              <Radio.Group>
                <Radio
                  value={"detento"}
                  onChange={() => {
                    setTipoUsuario("Detento");
                    setVerFuncionario(false);
                  }}
                >
                  Detento
                </Radio>
                <Radio
                  value={"funcionario"}
                  onChange={() => {
                    setTipoUsuario("Funcionário");
                    setVerDetento(false);
                  }}
                >
                  Funcionário
                </Radio>
              </Radio.Group>
            </FormItem>
            {tipoUsuario === "Detento" ? (
              <FormItem name="idPessoa" label="Pesquisar Matricula">
                <Search
                  placeholder="Insira a matricula do detento"
                  onSearch={pesquisarMatriculaDetento}
                  style={{ width: "100%" }}
                />
              </FormItem>
            ) : tipoUsuario === "Funcionário" ? (
              <FormItem name="idPessoa" label="Pesquisar Matricula">
                <Search
                  placeholder="Insira a matricula do funcionario"
                  onSearch={pesquisarMatriculaFuncionario}
                  style={{ width: "100%" }}
                />
              </FormItem>
            ) : null}
            {verFuncionario === true ? (
              <>
                <FormItem name="codFuncionario" label="">
                  <h4>Codigo: {funcionario.id}</h4>
                </FormItem>
                <FormItem name="nomeFuncionario" label="">
                  <h4>Nome: {funcionario.nome}</h4>
                </FormItem>
              </>
            ) : verDetento === true ? (
              <>
                <FormItem name="codDetento" label="">
                  <h4>Codigo: {detento.id}</h4>
                </FormItem>
                <FormItem name="nomeDetento" label="">
                  <h4>Nome: {detento.nome}</h4>
                </FormItem>
              </>
            ) : null}
            {verFuncionario || verDetento ? (
              <>
                <FormItem name="dataRetirada" label="Data de Retirada:">
                  <h4> {dataAtual} </h4>
                </FormItem>
                <FormItem name="dataEntrega" label="Data de Devolução:">
                  <h4> {dataDevolucao} </h4>
                </FormItem>
                <FormItem>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%", background: "#04d361" }}
                    loading={buttonLoad}
                    onClick={() => form.resetFields()}
                  >
                    Confirmar
                  </Button>
                </FormItem>
              </>
            ) : null}
          </Form>
        </Spin>
      </Modal> */}
    </div>
  );
}
