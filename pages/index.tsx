import Head from "next/head";
import CompatibleSection from "../src/components/homeNoAuth/compatibleSection";
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "../src/components/homeNoAuth/presentationSection";
import styles from "../styles/HomeNoAuth.module.scss";

const HomeNoAuth = () => {
  return (
    <>
      <Head>
          <title>Animeflix</title>
          <link rel="shortcut icon" href="/buttonPlay.svg" type="image/x-icon" />
          <meta property="og:title" content="Animeflix" key="title"/>
          <meta name="description" content="Tenha acesso aos melhores conteúdos de anime de uma forma simples e fácil"/>
      </Head>
      <main>
          <div className={styles.sectionBackground}>
            <HeaderNoAuth/>
            <PresentationSection/>
          </div>
          <CompatibleSection/>
      </main>
    </>
  );
};

export default HomeNoAuth;
