import { Container } from "reactstrap";
import styles from "./styles.module.scss";

export const CompatibleDevices = () => {
  return (
    <>
      <Container className={styles.Container}>
        <div className={styles.itens}>
          <img
            src="/homeNoAuth/televisao.png"
            alt="televisao"
            className={styles.img}
          />
          <p className={styles.title}>TV</p>
          <p className={styles.description}>
            Amazon Fire TV <br />
            Android TV <br />
            Apple TV
            <br />
            TVs LG
            <br />
            Roku Samsung
            <br />
          </p>
        </div>
        <div className={styles.itens}>
          <img
            src="/homeNoAuth/controle.png"
            alt="controle"
            className={styles.img}
          />
          <p className={styles.title}>Videogames</p>
          <p className={styles.description}>
            PS4
            <br />
            PS5
            <br />
            Xbox One
            <br />
            Xbox Series X<br />
            Xbox Series S
          </p>
        </div>
        <div className={styles.itens}>
          <img src="/homeNoAuth/phone.png" alt="phone" className={styles.img} />
          <p className={styles.title}>Celulares</p>
          <p className={styles.description}>
            Tablets Amazon Fire
            <br />
            Celulares e Tablets <br />
            Android
            <br />
            iPhone e iPad
          </p>
        </div>
        <div className={styles.itens}>
          <img
            src="/homeNoAuth/notebook.png"
            alt="notebook"
            className={styles.img}
          />
          <p className={styles.title}>Computador</p>
          <p className={styles.description}>
            Chrome OS <br />
            MacOS <br />
            PC Windows
            <br />
          </p>
        </div>
      </Container>
    </>
  );
};
