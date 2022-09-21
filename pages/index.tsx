import Head from "next/head";
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
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
          <HeaderNoAuth/>
      </main>
    </>
  );
};

export default HomeNoAuth;
