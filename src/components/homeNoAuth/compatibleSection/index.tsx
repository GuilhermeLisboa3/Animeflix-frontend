import styles from "./styles.module.scss";
import { Container } from "reactstrap";

const CompatibleSection = () => {
  return (
    <>
      <Container className={styles.container}>
        <div>
          <img
            src="/homeNoAuth/animeflix-compativeis.png"
            alt="fotos de celular tablet e televisão mostrando conteudo do app"
            className={styles.img}
          />
        </div>
        <div>
          <p className={styles.title}>Assista do seu jeito</p>
          <p className={styles.description}>
            Aproveite a tela grande da TV ou assista no tablet, laptop, celular
            e outros aparelhos. Nossa seleção de títulos em 4K não para de
            crescer. Além disso, para a felicidade de todos você consegue
            assistir anime de onde vc quiser, basta ter acesso a internet.{" "}
          </p>
        </div>
      </Container>
    </>
  );
};

export default CompatibleSection;
