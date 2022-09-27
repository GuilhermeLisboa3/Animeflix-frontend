import Head from "next/head";
import { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { Footer } from "../src/components/common/footer";
import { HeaderAuth } from "../src/components/common/headerAuth";
import { PasswordForm } from "../src/components/profile/password";
import { UserForm } from "../src/components/profile/user";
import styles from "../styles/profile.module.scss";

const Profile = () => {
  const [form, setForm] = useState("userForm");
  return (
    <>
      <Head>
        <title>Animeflix - Meus Dados</title>
        <link rel="shortcut icon" href="/buttonPlay.svg" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <HeaderAuth />
        </div>
        <Container className={styles.gridContainer}>
          <p className={styles.title}>Minha Conta</p>
          <Row className="pt-3 pb-5">
            <Col md={4} className={styles.btnColumn}>
              <Button
                className={styles.renderForm}
                styles={{ color: form === "userForm" } ? "#FF0044 ": "white"}
                onClick={() => {
                  setForm("userForm");
                }}
              >
                DADOS PESSOAIS
              </Button>
              <Button
                className={styles.renderForm}
                styles={{ color: form === "passwordForm" } ? "#FF0044" : "white"}
                onClick={() => {
                  setForm("passwordForm");
                }}
              >
                SENHA
              </Button>
            </Col>
            <Col md>
              { form === "userForm" ? <UserForm /> : <PasswordForm/>}
            </Col>
          </Row>
        </Container>
        <div className={styles.footer}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Profile;
