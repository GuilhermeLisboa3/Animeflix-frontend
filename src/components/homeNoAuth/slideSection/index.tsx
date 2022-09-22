import Link from "next/link";
import { Button, Container } from "reactstrap";
import { AnimeType } from "../../../services/animesService";
import { SlideComponent } from "../../common/slideComponent";
import styles from "./styles.module.scss";

interface props {
  newestAnimes: AnimeType[];
}

export const SlideSection = ({ newestAnimes }: props) => {
  return (
    <>
      <Container>
        <p className={styles.sectionTitle}>ANIMES JÁ DISPONÍVEIS</p>
        <SlideComponent anime={newestAnimes}/>
        <Link href="/register">
            <Button outline color="light" className={styles.slideSectionBtn}>
                Se cadastre para acessar!
            </Button>
        </Link>
      </Container>
    </>
  );
};
