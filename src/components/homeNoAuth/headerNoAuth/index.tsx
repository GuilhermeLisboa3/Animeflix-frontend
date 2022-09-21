import Link from "next/link";
import { Container, Button } from "reactstrap";
import styles from "./styles.module.scss";

const HeaderNoAuth = () => {
  return (
    <>
      <Container className={styles.nav}>
        <img
          src="/animeflix-trasnparent.svg"
          alt="animeflix"
          className={styles.imgLogoNav}
        />
        <div>
          <Link href="/login">
            <Button className={styles.navBtn} outline>
              ENTRAR
            </Button>
          </Link>
          <Link href="/register">
            <Button className={styles.navBtn} outline>
              Quero fazer parte
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default HeaderNoAuth;
