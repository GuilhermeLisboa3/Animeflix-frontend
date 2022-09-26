import Head from "next/head";
import { Button, Col, Container, Row } from "reactstrap";
import { Footer } from "../src/components/common/footer";
import { HeaderAuth } from "../src/components/common/headerAuth";
import { UserForm } from "../src/components/profile/user";
import styles from "../styles/profile.module.scss";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Animeflix - Meus Dados</title>
        <link rel="shortcut icon" href="/buttonPlay.svg" type="image/x-icon" />
      </Head>
      <main>
        <div className={styles.header}>
            <HeaderAuth />
        </div>
        <Container className="py-5">
          <p className={styles.title}>Minha Conta</p>
          <Row className="pt-3 pb-5">
            <Col md={4} className={styles.btnColumn}>
                <Button className={styles.renderForm}>
                    DADOS PESSOAIS
                </Button>
                <Button className={styles.renderForm}>
                    SENHA
                </Button>
            </Col>
            <Col md>
              <UserForm />
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
