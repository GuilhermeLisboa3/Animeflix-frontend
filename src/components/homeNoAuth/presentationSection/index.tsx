import styles from "./styles.module.scss";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

const PresentationSection = () => {
  return (
    <>
      <Container className={styles.container}>
        <Row>
        <Col md className={styles.containerImgAnimes}>
            <img src="/homeNoAuth/wallpaper-phone.jpg" alt="animes" className={styles.imgAnimes}/>
        </Col>
          <Col md className={styles.containerDescription}>
            <p className={styles.subTitle}>ACESSO ILIMITADO</p>
            <p className={styles.title}>
              Tenha acesso aos melhores <br /> animes do mundo.
            </p>
            <p className={styles.description}>
              Assista de onde estiver, e continue a melhor <br/>experiência da sua vida com animes.
            </p>
            <Link href="/register">
              <Button outline className={styles.btnCta}>
                ACESSE AGORA <img src="/buttonPlay.svg" alt="buttonPlay" className={styles.btnImg}/>
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center pt-5">
                <img src="/homeNoAuth/iconArrowDown.svg" alt="arrow down"  className={styles.arrowDown}/>
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default PresentationSection;
