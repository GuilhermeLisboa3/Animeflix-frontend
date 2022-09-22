import { Container } from "reactstrap";
import styles from "./styles.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export const Footer = () => {
  return (
    <>
      <Container className={styles.footer}>
        <div className={styles.containerIcons}>
          <a
            href="https://www.linkedin.com/in/guilherme-gon%C3%A7alves-lisboa-abb8b0227/"
            target={"blank"}
            className={styles.footerLink}
          >
            <FaLinkedinIn />
          </a>
          <a 
          href="https://github.com/GuilhermeLisboa3" 
          target={"blank"}
          className={styles.footerLink}>
            <FiGithub />
          </a>
          <a 
          href="https://www.instagram.com/guime.lisboa/" 
          target={"blank"}
          className={styles.footerLink}>
            <FaInstagram />
          </a>
        </div>
      </Container>
    </>
  );
};
